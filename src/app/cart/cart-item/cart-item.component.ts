import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetMessageErrorPipe } from 'src/app/shared/get-message-error/get-message-error.pipe';
import { environment } from 'src/environments/environment';
import { CartItem } from '../cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  providers: [GetMessageErrorPipe],
})
export class CartItemComponent implements OnInit {
  BACKEND_URL = environment.BACKEND_URL;
  quantityControl = this.fb.control('', [Validators.min(1)]);
  oldValue!: number;

  @Input() cartItem!: CartItem;
  @Output() delete = new EventEmitter<CartItem>();
  @Output() edit = new EventEmitter<CartItem>();

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private getMessageErrorPipe: GetMessageErrorPipe
  ) {}

  ngOnInit() {
    this.setQuantity(this.cartItem.quantity);
  }

  onBlur() {
    const errors = this.quantityControl.errors;
    const quantity = this.quantityControl.value as number;

    if (!quantity) {
      this.setQuantity(this.cartItem.quantity);
      return;
    }

    if (quantity === this.oldValue) {
      return;
    }

    if (!errors) {
      this.edit.emit({ ...this.cartItem, quantity });
      this.snackBar.open('Wartość zmieniona poprawnie', '', {
        panelClass: ['success'],
      });
      return;
    }

    if (errors['required']) {
      this.quantityControl.setValue(this.cartItem.quantity);
      return;
    }

    this.snackBar.open(this.getMessageErrorPipe.transform(errors), '', {
      panelClass: ['warn'],
    });
  }

  onDelete() {
    this.delete.emit(this.cartItem);
  }

  private setQuantity(quantity: number) {
    this.quantityControl.setValue(quantity);
    this.oldValue = quantity;
  }
}

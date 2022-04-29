import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'getMessageError'
})
export class GetMessageErrorPipe implements PipeTransform {
  transform(value: ValidationErrors): string {
    console.log(value);
    if (value['required']) {
      return 'To pole jest wymagane.';
    }

    if (value['minlength']) {
      const requiredLength = value['minlength'].requiredLength;
      return `Wartość musi zawierać co najmniej ${requiredLength} znaków.`;
    }

    if (value['min']) {
      const min = value['min'].min;
      return `Wartość musi być większa niż ${min - 1}.`;
    }

    return 'Podana wartość nie jest poprawna.';
  }
}

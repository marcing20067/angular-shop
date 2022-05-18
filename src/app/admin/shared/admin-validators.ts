import { Validators } from '@angular/forms';

export const AdminValidators = {
  email: [Validators.required, Validators.email],
  password: [Validators.required, Validators.minLength(8)],
};

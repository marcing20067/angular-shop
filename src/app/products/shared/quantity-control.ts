import { FormControl, Validators } from "@angular/forms";

export const CreateQuantityControl = () => {
  return new FormControl(1, [Validators.required, Validators.min(1)]);
};

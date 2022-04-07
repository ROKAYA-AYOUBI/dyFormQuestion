export class FieldModel {
  id!: string ;
  value: any;
  controlType!: string ;
  placeHolder!: string ;
  options!: DropdownOption[] | undefined ;
  label!: string | undefined;
  required!: boolean ;
  errorMessage!: string ;
  validationMessage!: string ;
  pattern: any;

  constructor(field: {
    id?: string;
    value?: any;
    controlType?: string;
    placeHolder?: string;
    options?: DropdownOption[];
    label?: string;
    required?: boolean;
    errorMessage?: string;
    validationMessage?: string;
    pattern?: any;
  }){
    if(field){
      if (field.id != null) {
        this.id = field.id;
      }
      this.value = field.value;
      if (field.controlType != null) {
        this.controlType = field.controlType;
      }
      if (field.placeHolder != null) {
        this.placeHolder = field.placeHolder;
      }
      this.options = field.options;
      this.label = field.label;
      if (field.required) {
        this.required = field.required;
      }
      if (field.errorMessage != null) {
        this.errorMessage = field.errorMessage;
      }
      if (field.validationMessage != null) {
        this.validationMessage = field.validationMessage;
      }
      this.pattern = field.pattern;
    }
  }
}
class DropdownOption {
  code!: string;
  value: any
}

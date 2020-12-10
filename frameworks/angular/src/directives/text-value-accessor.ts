import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'calcite-input[type=color], calcite-input[type=date], calcite-input[type=datetime-local], calcite-input[type=email], calcite-input[type=file], calcite-input[type=image], calcite-input[type=month], calcite-input[type=password], calcite-input[type=search], calcite-input[type=tel], calcite-input[type=text], calcite-input[type=textarea], calcite-input[type=time], calcite-input[type=url], calcite-input[type=week]',
  host: {
    '(calciteInputInput)': 'handleChangeEvent($event.target.value)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessor,
      multi: true
    }
  ]
})
export class TextValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
}

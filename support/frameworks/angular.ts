import { ValueAccessorConfig } from "@stencil/angular-output-target";
/**
 * These bind ng-model to any components that are "input-like"
 */
export const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: [
      "calcite-input[type=color]",
      "calcite-input[type=date]",
      "calcite-input[type=datetime-local]",
      "calcite-input[type=email]",
      "calcite-input[type=file]",
      "calcite-input[type=image]",
      "calcite-input[type=month]",
      "calcite-input[type=password]",
      "calcite-input[type=search]",
      "calcite-input[type=tel]",
      "calcite-input[type=text]",
      "calcite-input[type=textarea]",
      "calcite-input[type=time]",
      "calcite-input[type=url]",
      "calcite-input[type=week]"
    ],
    event: 'calciteInputInput',
    targetAttr: 'value',
    type: 'text',
  },
  {
    elementSelectors: [
      "calcite-input[type=number]"
    ],
    event: 'calciteInputInput',
    targetAttr: 'value',
    type: 'number',
  },
  {
    elementSelectors: ['calcite-checkbox'],
    event: 'calciteCheckboxChange',
    targetAttr: 'checked',
    type: 'boolean',
  },
  {
    elementSelectors: ['calcite-radio-group-item'],
    event: 'calciteRadioGroupItemChange',
    targetAttr: 'checked',
    type: 'radio',
  }
  // TODO: can't get actual value of calcite radio group (only "selectedItem")
  // {
  //   elementSelectors: ['calcite-radio-group'],
  //   event: 'calciteRadioGroupItemChange',
  //   targetAttr: 'value',
  //   type: 'select',
  // },

];

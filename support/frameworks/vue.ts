import { ComponentModelConfig } from "@stencil/vue-output-target";
export const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: ['calcite-checkbox'],
    event: 'calciteCheckboxChange',
    targetAttr: 'checked'
  }
  // {
  //   elements: ['my-input', 'my-range'],
  //   event: 'myChange',
  //   targetAttr: 'value',
  // },
  // {
  //   elements: ['my-checkbox'],
  //   event: 'myChange',
  //   targetAttr: 'checked',
  // },
  // {
  //   elements: ['my-radio'],
  //   event: 'mySelect',
  //   targetAttr: 'checked',
  // },
  // {
  //   elements: ['my-range', 'my-radio-group'],
  //   event: 'myChange',
  //   targetAttr: 'value',
  // },
];

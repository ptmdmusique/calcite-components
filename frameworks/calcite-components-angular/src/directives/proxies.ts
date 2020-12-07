/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@esri/calcite-components';

import { CalciteAccordion as ICalciteAccordion } from '@esri/calcite-components/dist/types/components/calcite-accordion/calcite-accordion';
export declare interface CalciteAccordion extends Components.CalciteAccordion {}
@ProxyCmp({
  inputs: ['appearance', 'iconPosition', 'iconType', 'scale', 'selectionMode', 'theme']
})
@Component({
  selector: 'calcite-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appearance', 'iconPosition', 'iconType', 'scale', 'selectionMode', 'theme'],
  outputs: ['calciteAccordionChange']
})
export class CalciteAccordion {
  /**  */
  calciteAccordionChange!: ICalciteAccordion['calciteAccordionChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteAccordionChange']);
  }
}

import { CalciteAccordionItem as ICalciteAccordionItem } from '@esri/calcite-components/dist/types/components/calcite-accordion-item/calcite-accordion-item';
export declare interface CalciteAccordionItem extends Components.CalciteAccordionItem {}
@ProxyCmp({
  inputs: ['active', 'icon', 'itemSubtitle', 'itemTitle']
})
@Component({
  selector: 'calcite-accordion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'icon', 'itemSubtitle', 'itemTitle'],
  outputs: ['calciteAccordionItemKeyEvent', 'calciteAccordionItemSelect', 'calciteAccordionItemClose', 'calciteAccordionItemRegister']
})
export class CalciteAccordionItem {
  /**  */
  calciteAccordionItemKeyEvent!: ICalciteAccordionItem['calciteAccordionItemKeyEvent'];
  /**  */
  calciteAccordionItemSelect!: ICalciteAccordionItem['calciteAccordionItemSelect'];
  /**  */
  calciteAccordionItemClose!: ICalciteAccordionItem['calciteAccordionItemClose'];
  /**  */
  calciteAccordionItemRegister!: ICalciteAccordionItem['calciteAccordionItemRegister'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteAccordionItemKeyEvent', 'calciteAccordionItemSelect', 'calciteAccordionItemClose', 'calciteAccordionItemRegister']);
  }
}


export declare interface CalciteAction extends Components.CalciteAction {}
@ProxyCmp({
  inputs: ['active', 'appearance', 'compact', 'disabled', 'icon', 'indicator', 'intlLoading', 'label', 'loading', 'scale', 'text', 'textEnabled', 'theme'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-action',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'appearance', 'compact', 'disabled', 'icon', 'indicator', 'intlLoading', 'label', 'loading', 'scale', 'text', 'textEnabled', 'theme']
})
export class CalciteAction {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteActionBar as ICalciteActionBar } from '@esri/calcite-components/dist/types/components/calcite-action-bar/calcite-action-bar';
export declare interface CalciteActionBar extends Components.CalciteActionBar {}
@ProxyCmp({
  inputs: ['expand', 'expanded', 'intlCollapse', 'intlExpand', 'position', 'theme', 'tooltipExpand'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-action-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['expand', 'expanded', 'intlCollapse', 'intlExpand', 'position', 'theme', 'tooltipExpand'],
  outputs: ['calciteActionBarToggle']
})
export class CalciteActionBar {
  /** Emitted when expanded has been toggled. */
  calciteActionBarToggle!: ICalciteActionBar['calciteActionBarToggle'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteActionBarToggle']);
  }
}


export declare interface CalciteActionGroup extends Components.CalciteActionGroup {}

@Component({
  selector: 'calcite-action-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class CalciteActionGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteActionPad as ICalciteActionPad } from '@esri/calcite-components/dist/types/components/calcite-action-pad/calcite-action-pad';
export declare interface CalciteActionPad extends Components.CalciteActionPad {}
@ProxyCmp({
  inputs: ['expand', 'expanded', 'intlCollapse', 'intlExpand', 'layout', 'position', 'theme', 'tooltipExpand'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-action-pad',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['expand', 'expanded', 'intlCollapse', 'intlExpand', 'layout', 'position', 'theme', 'tooltipExpand'],
  outputs: ['calciteActionPadToggle']
})
export class CalciteActionPad {
  /** Emitted when expanded has been toggled. */
  calciteActionPadToggle!: ICalciteActionPad['calciteActionPadToggle'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteActionPadToggle']);
  }
}

import { CalciteAlert as ICalciteAlert } from '@esri/calcite-components/dist/types/components/calcite-alert/calcite-alert';
export declare interface CalciteAlert extends Components.CalciteAlert {}
@ProxyCmp({
  inputs: ['active', 'autoDismiss', 'autoDismissDuration', 'color', 'icon', 'intlClose', 'label', 'scale', 'theme'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'autoDismiss', 'autoDismissDuration', 'color', 'icon', 'intlClose', 'label', 'scale', 'theme'],
  outputs: ['calciteAlertClose', 'calciteAlertOpen']
})
export class CalciteAlert {
  /** Fired when an alert is closed */
  calciteAlertClose!: ICalciteAlert['calciteAlertClose'];
  /** Fired when an alert is opened */
  calciteAlertOpen!: ICalciteAlert['calciteAlertOpen'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteAlertClose', 'calciteAlertOpen']);
  }
}


export declare interface CalciteAvatar extends Components.CalciteAvatar {}
@ProxyCmp({
  inputs: ['fullName', 'scale', 'theme', 'thumbnail', 'userId', 'username']
})
@Component({
  selector: 'calcite-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fullName', 'scale', 'theme', 'thumbnail', 'userId', 'username']
})
export class CalciteAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteBlock as ICalciteBlock } from '@esri/calcite-components/dist/types/components/calcite-block/calcite-block';
export declare interface CalciteBlock extends Components.CalciteBlock {}
@ProxyCmp({
  inputs: ['collapsible', 'disabled', 'dragHandle', 'heading', 'intlCollapse', 'intlExpand', 'intlLoading', 'loading', 'open', 'summary', 'theme']
})
@Component({
  selector: 'calcite-block',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['collapsible', 'disabled', 'dragHandle', 'heading', 'intlCollapse', 'intlExpand', 'intlLoading', 'loading', 'open', 'summary', 'theme'],
  outputs: ['calciteBlockToggle']
})
export class CalciteBlock {
  /** Emitted when the header has been clicked. */
  calciteBlockToggle!: ICalciteBlock['calciteBlockToggle'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteBlockToggle']);
  }
}

import { CalciteBlockSection as ICalciteBlockSection } from '@esri/calcite-components/dist/types/components/calcite-block-section/calcite-block-section';
export declare interface CalciteBlockSection extends Components.CalciteBlockSection {}
@ProxyCmp({
  inputs: ['intlCollapse', 'intlExpand', 'open', 'text', 'toggleDisplay']
})
@Component({
  selector: 'calcite-block-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['intlCollapse', 'intlExpand', 'open', 'text', 'toggleDisplay'],
  outputs: ['calciteBlockSectionToggle']
})
export class CalciteBlockSection {
  /** Emitted when the header has been clicked. */
  calciteBlockSectionToggle!: ICalciteBlockSection['calciteBlockSectionToggle'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteBlockSectionToggle']);
  }
}


export declare interface CalciteButton extends Components.CalciteButton {}
@ProxyCmp({
  inputs: ['alignment', 'appearance', 'color', 'disabled', 'href', 'iconEnd', 'iconFlipRtl', 'iconStart', 'intlLoading', 'loading', 'round', 'scale', 'splitChild', 'theme', 'width'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alignment', 'appearance', 'color', 'disabled', 'href', 'iconEnd', 'iconFlipRtl', 'iconStart', 'intlLoading', 'loading', 'round', 'scale', 'splitChild', 'theme', 'width']
})
export class CalciteButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteCard as ICalciteCard } from '@esri/calcite-components/dist/types/components/calcite-card/calcite-card';
export declare interface CalciteCard extends Components.CalciteCard {}
@ProxyCmp({
  inputs: ['intlDeselect', 'intlLoading', 'intlSelect', 'loading', 'selectable', 'selected', 'theme']
})
@Component({
  selector: 'calcite-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['intlDeselect', 'intlLoading', 'intlSelect', 'loading', 'selectable', 'selected', 'theme'],
  outputs: ['calciteCardSelect']
})
export class CalciteCard {
  /** Fired when a selectable card is selected */
  calciteCardSelect!: ICalciteCard['calciteCardSelect'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteCardSelect']);
  }
}

import { CalciteCheckbox as ICalciteCheckbox } from '@esri/calcite-components/dist/types/components/calcite-checkbox/calcite-checkbox';
export declare interface CalciteCheckbox extends Components.CalciteCheckbox {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'focused', 'guid', 'hovered', 'indeterminate', 'name', 'scale', 'theme', 'value']
})
@Component({
  selector: 'calcite-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'focused', 'guid', 'hovered', 'indeterminate', 'name', 'scale', 'theme', 'value'],
  outputs: ['calciteCheckboxChange', 'calciteCheckboxFocusedChange']
})
export class CalciteCheckbox {
  /** Emitted when the checkbox checked status changes */
  calciteCheckboxChange!: ICalciteCheckbox['calciteCheckboxChange'];
  /** Emitted when the checkbox focused state changes */
  calciteCheckboxFocusedChange!: ICalciteCheckbox['calciteCheckboxFocusedChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteCheckboxChange', 'calciteCheckboxFocusedChange']);
  }
}

import { CalciteChip as ICalciteChip } from '@esri/calcite-components/dist/types/components/calcite-chip/calcite-chip';
export declare interface CalciteChip extends Components.CalciteChip {}
@ProxyCmp({
  inputs: ['appearance', 'color', 'dismissible', 'icon', 'iconFlipRtl', 'scale', 'theme', 'value']
})
@Component({
  selector: 'calcite-chip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appearance', 'color', 'dismissible', 'icon', 'iconFlipRtl', 'scale', 'theme', 'value'],
  outputs: ['calciteChipDismiss']
})
export class CalciteChip {
  /** Emitted when the dismiss button is clicked */
  calciteChipDismiss!: ICalciteChip['calciteChipDismiss'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteChipDismiss']);
  }
}

import { CalciteColor as ICalciteColor } from '@esri/calcite-components/dist/types/components/calcite-color/calcite-color';
export declare interface CalciteColor extends Components.CalciteColor {}
@ProxyCmp({
  inputs: ['appearance', 'hideChannels', 'hideHex', 'hideSaved', 'intlB', 'intlBlue', 'intlDeleteColor', 'intlG', 'intlGreen', 'intlH', 'intlHex', 'intlHsv', 'intlHue', 'intlR', 'intlRed', 'intlRgb', 'intlS', 'intlSaturation', 'intlSaveColor', 'intlSaved', 'intlV', 'intlValue', 'scale', 'storageId', 'theme', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-color',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appearance', 'hideChannels', 'hideHex', 'hideSaved', 'intlB', 'intlBlue', 'intlDeleteColor', 'intlG', 'intlGreen', 'intlH', 'intlHex', 'intlHsv', 'intlHue', 'intlR', 'intlRed', 'intlRgb', 'intlS', 'intlSaturation', 'intlSaveColor', 'intlSaved', 'intlV', 'intlValue', 'scale', 'storageId', 'theme', 'value'],
  outputs: ['calciteColorChange']
})
export class CalciteColor {
  /**  */
  calciteColorChange!: ICalciteColor['calciteColorChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteColorChange']);
  }
}

import { CalciteColorHexInput as ICalciteColorHexInput } from '@esri/calcite-components/dist/types/components/calcite-color-hex-input/calcite-color-hex-input';
export declare interface CalciteColorHexInput extends Components.CalciteColorHexInput {}
@ProxyCmp({
  inputs: ['intlHex', 'scale', 'theme', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-color-hex-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['intlHex', 'scale', 'theme', 'value'],
  outputs: ['calciteColorHexInputChange']
})
export class CalciteColorHexInput {
  /** Emitted when the hex value changes. */
  calciteColorHexInputChange!: ICalciteColorHexInput['calciteColorHexInputChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteColorHexInputChange']);
  }
}


export declare interface CalciteColorSwatch extends Components.CalciteColorSwatch {}
@ProxyCmp({
  inputs: ['active', 'color', 'scale', 'theme']
})
@Component({
  selector: 'calcite-color-swatch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'color', 'scale', 'theme']
})
export class CalciteColorSwatch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteCombobox as ICalciteCombobox } from '@esri/calcite-components/dist/types/components/calcite-combobox/calcite-combobox';
export declare interface CalciteCombobox extends Components.CalciteCombobox {}
@ProxyCmp({
  inputs: ['active', 'disabled', 'label', 'placeholder', 'scale', 'theme'],
  methods: ['reposition']
})
@Component({
  selector: 'calcite-combobox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'disabled', 'label', 'placeholder', 'scale', 'theme'],
  outputs: ['calciteLookupChange', 'calciteComboboxChipDismiss']
})
export class CalciteCombobox {
  /**  */
  calciteLookupChange!: ICalciteCombobox['calciteLookupChange'];
  /**  */
  calciteComboboxChipDismiss!: ICalciteCombobox['calciteComboboxChipDismiss'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteLookupChange', 'calciteComboboxChipDismiss']);
  }
}

import { CalciteComboboxItem as ICalciteComboboxItem } from '@esri/calcite-components/dist/types/components/calcite-combobox-item/calcite-combobox-item';
export declare interface CalciteComboboxItem extends Components.CalciteComboboxItem {}
@ProxyCmp({
  inputs: ['disabled', 'parentItem', 'selected', 'textLabel', 'value'],
  methods: ['toggleSelected']
})
@Component({
  selector: 'calcite-combobox-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'parentItem', 'selected', 'textLabel', 'value'],
  outputs: ['calciteComboboxItemChange', 'calciteComboboxItemKeyEvent']
})
export class CalciteComboboxItem {
  /** Emitted whenever the item is selected or unselected. @event calciteComboboxItemChange*/
  calciteComboboxItemChange!: ICalciteComboboxItem['calciteComboboxItemChange'];
  /**  */
  calciteComboboxItemKeyEvent!: ICalciteComboboxItem['calciteComboboxItemKeyEvent'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteComboboxItemChange', 'calciteComboboxItemKeyEvent']);
  }
}

import { CalciteDate as ICalciteDate } from '@esri/calcite-components/dist/types/components/calcite-date/calcite-date';
export declare interface CalciteDate extends Components.CalciteDate {}
@ProxyCmp({
  inputs: ['active', 'intlNextMonth', 'intlPrevMonth', 'locale', 'max', 'min', 'noCalendarInput', 'scale', 'value', 'valueAsDate'],
  methods: ['reposition']
})
@Component({
  selector: 'calcite-date',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'intlNextMonth', 'intlPrevMonth', 'locale', 'max', 'min', 'noCalendarInput', 'scale', 'value', 'valueAsDate'],
  outputs: ['calciteDateChange']
})
export class CalciteDate {
  /** Trigger calcite date change when a user changes the date. */
  calciteDateChange!: ICalciteDate['calciteDateChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteDateChange']);
  }
}

import { CalciteDateDay as ICalciteDateDay } from '@esri/calcite-components/dist/types/components/calcite-date-day/calcite-date-day';
export declare interface CalciteDateDay extends Components.CalciteDateDay {}
@ProxyCmp({
  inputs: ['active', 'currentMonth', 'day', 'disabled', 'scale', 'selected']
})
@Component({
  selector: 'calcite-date-day',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'currentMonth', 'day', 'disabled', 'scale', 'selected'],
  outputs: ['calciteDaySelect']
})
export class CalciteDateDay {
  /** Emitted when user selects day */
  calciteDaySelect!: ICalciteDateDay['calciteDaySelect'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteDaySelect']);
  }
}

import { CalciteDateMonth as ICalciteDateMonth } from '@esri/calcite-components/dist/types/components/calcite-date-month/calcite-date-month';
export declare interface CalciteDateMonth extends Components.CalciteDateMonth {}
@ProxyCmp({
  inputs: ['activeDate', 'max', 'min', 'scale', 'selectedDate']
})
@Component({
  selector: 'calcite-date-month',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeDate', 'max', 'min', 'scale', 'selectedDate'],
  outputs: ['calciteDateSelect', 'calciteActiveDateChange']
})
export class CalciteDateMonth {
  /** Event emitted when user selects the date. */
  calciteDateSelect!: ICalciteDateMonth['calciteDateSelect'];
  /** Active date for the user keyboard access. */
  calciteActiveDateChange!: ICalciteDateMonth['calciteActiveDateChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteDateSelect', 'calciteActiveDateChange']);
  }
}

import { CalciteDateMonthHeader as ICalciteDateMonthHeader } from '@esri/calcite-components/dist/types/components/calcite-date-month-header/calcite-date-month-header';
export declare interface CalciteDateMonthHeader extends Components.CalciteDateMonthHeader {}
@ProxyCmp({
  inputs: ['activeDate', 'intlNextMonth', 'intlPrevMonth', 'locale', 'localeData', 'max', 'min', 'scale', 'selectedDate']
})
@Component({
  selector: 'calcite-date-month-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeDate', 'intlNextMonth', 'intlPrevMonth', 'locale', 'localeData', 'max', 'min', 'scale', 'selectedDate'],
  outputs: ['calciteDateSelect']
})
export class CalciteDateMonthHeader {
  /** Changes to active date */
  calciteDateSelect!: ICalciteDateMonthHeader['calciteDateSelect'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteDateSelect']);
  }
}

import { CalciteDropdown as ICalciteDropdown } from '@esri/calcite-components/dist/types/components/calcite-dropdown/calcite-dropdown';
export declare interface CalciteDropdown extends Components.CalciteDropdown {}
@ProxyCmp({
  inputs: ['active', 'alignment', 'disableCloseOnSelect', 'disabled', 'maxItems', 'scale', 'selectedItems', 'theme', 'type', 'width'],
  methods: ['reposition']
})
@Component({
  selector: 'calcite-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'alignment', 'disableCloseOnSelect', 'disabled', 'maxItems', 'scale', 'selectedItems', 'theme', 'type', 'width'],
  outputs: ['calciteDropdownSelect', 'calciteDropdownOpen', 'calciteDropdownClose']
})
export class CalciteDropdown {
  /** fires when a dropdown item has been selected or deselected * */
  calciteDropdownSelect!: ICalciteDropdown['calciteDropdownSelect'];
  /** fires when a dropdown has been opened * */
  calciteDropdownOpen!: ICalciteDropdown['calciteDropdownOpen'];
  /** fires when a dropdown has been closed * */
  calciteDropdownClose!: ICalciteDropdown['calciteDropdownClose'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteDropdownSelect', 'calciteDropdownOpen', 'calciteDropdownClose']);
  }
}

import { CalciteDropdownGroup as ICalciteDropdownGroup } from '@esri/calcite-components/dist/types/components/calcite-dropdown-group/calcite-dropdown-group';
export declare interface CalciteDropdownGroup extends Components.CalciteDropdownGroup {}
@ProxyCmp({
  inputs: ['groupTitle', 'selectionMode']
})
@Component({
  selector: 'calcite-dropdown-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['groupTitle', 'selectionMode'],
  outputs: ['calciteDropdownGroupRegister', 'calciteDropdownItemChange']
})
export class CalciteDropdownGroup {
  /**  */
  calciteDropdownGroupRegister!: ICalciteDropdownGroup['calciteDropdownGroupRegister'];
  /**  */
  calciteDropdownItemChange!: ICalciteDropdownGroup['calciteDropdownItemChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteDropdownGroupRegister', 'calciteDropdownItemChange']);
  }
}

import { CalciteDropdownItem as ICalciteDropdownItem } from '@esri/calcite-components/dist/types/components/calcite-dropdown-item/calcite-dropdown-item';
export declare interface CalciteDropdownItem extends Components.CalciteDropdownItem {}
@ProxyCmp({
  inputs: ['active', 'href', 'iconEnd', 'iconFlipRtl', 'iconStart'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'href', 'iconEnd', 'iconFlipRtl', 'iconStart'],
  outputs: ['calciteDropdownItemSelect']
})
export class CalciteDropdownItem {
  /**  */
  calciteDropdownItemSelect!: ICalciteDropdownItem['calciteDropdownItemSelect'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteDropdownItemSelect']);
  }
}


export declare interface CalciteFab extends Components.CalciteFab {}
@ProxyCmp({
  inputs: ['appearance', 'color', 'disabled', 'icon', 'label', 'loading', 'scale', 'text', 'textEnabled', 'theme'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-fab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appearance', 'color', 'disabled', 'icon', 'label', 'loading', 'scale', 'text', 'textEnabled', 'theme']
})
export class CalciteFab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteFilter as ICalciteFilter } from '@esri/calcite-components/dist/types/components/calcite-filter/calcite-filter';
export declare interface CalciteFilter extends Components.CalciteFilter {}
@ProxyCmp({
  inputs: ['data', 'intlClear', 'intlLabel', 'placeholder']
})
@Component({
  selector: 'calcite-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['data', 'intlClear', 'intlLabel', 'placeholder'],
  outputs: ['calciteFilterChange']
})
export class CalciteFilter {
  /**  */
  calciteFilterChange!: ICalciteFilter['calciteFilterChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteFilterChange']);
  }
}


export declare interface CalciteFlow extends Components.CalciteFlow {}
@ProxyCmp({
  inputs: ['theme'],
  methods: ['back']
})
@Component({
  selector: 'calcite-flow',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['theme']
})
export class CalciteFlow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CalciteGraph extends Components.CalciteGraph {}
@ProxyCmp({
  inputs: ['data', 'height', 'highlightMax', 'highlightMin', 'width']
})
@Component({
  selector: 'calcite-graph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['data', 'height', 'highlightMax', 'highlightMin', 'width']
})
export class CalciteGraph {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteHandle as ICalciteHandle } from '@esri/calcite-components/dist/types/components/calcite-handle/calcite-handle';
export declare interface CalciteHandle extends Components.CalciteHandle {}
@ProxyCmp({
  inputs: ['textTitle'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-handle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['textTitle'],
  outputs: ['calciteHandleNudge']
})
export class CalciteHandle {
  /** Emmitted when the the handle is activated and the up or down arrow key is pressed. @event calciteHandleNudge*/
  calciteHandleNudge!: ICalciteHandle['calciteHandleNudge'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteHandleNudge']);
  }
}


export declare interface CalciteIcon extends Components.CalciteIcon {}
@ProxyCmp({
  inputs: ['flipRtl', 'icon', 'scale', 'textLabel', 'theme']
})
@Component({
  selector: 'calcite-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['flipRtl', 'icon', 'scale', 'textLabel', 'theme']
})
export class CalciteIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteInlineEditable as ICalciteInlineEditable } from '@esri/calcite-components/dist/types/components/calcite-inline-editable/calcite-inline-editable';
export declare interface CalciteInlineEditable extends Components.CalciteInlineEditable {}
@ProxyCmp({
  inputs: ['afterConfirm', 'controls', 'disabled', 'editingEnabled', 'intlCancelEditing', 'intlConfirmChanges', 'intlEnableEditing', 'loading', 'scale', 'theme']
})
@Component({
  selector: 'calcite-inline-editable',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['afterConfirm', 'controls', 'disabled', 'editingEnabled', 'intlCancelEditing', 'intlConfirmChanges', 'intlEnableEditing', 'loading', 'scale', 'theme'],
  outputs: ['calciteInlineEditableEditingCancel', 'calciteInlineEditableChangesConfirm', 'calciteInlineEditableEnableEditingChange']
})
export class CalciteInlineEditable {
  /**  */
  calciteInlineEditableEditingCancel!: ICalciteInlineEditable['calciteInlineEditableEditingCancel'];
  /**  */
  calciteInlineEditableChangesConfirm!: ICalciteInlineEditable['calciteInlineEditableChangesConfirm'];
  /**  */
  calciteInlineEditableEnableEditingChange!: ICalciteInlineEditable['calciteInlineEditableEnableEditingChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteInlineEditableEditingCancel', 'calciteInlineEditableChangesConfirm', 'calciteInlineEditableEnableEditingChange']);
  }
}

import { CalciteInput as ICalciteInput } from '@esri/calcite-components/dist/types/components/calcite-input/calcite-input';
export declare interface CalciteInput extends Components.CalciteInput {}
@ProxyCmp({
  inputs: ['alignment', 'autofocus', 'clearable', 'disabled', 'icon', 'iconFlipRtl', 'loading', 'max', 'min', 'numberButtonType', 'placeholder', 'prefixText', 'required', 'scale', 'status', 'step', 'suffixText', 'theme', 'type', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alignment', 'autofocus', 'clearable', 'disabled', 'icon', 'iconFlipRtl', 'loading', 'max', 'min', 'numberButtonType', 'placeholder', 'prefixText', 'required', 'scale', 'status', 'step', 'suffixText', 'theme', 'type', 'value'],
  outputs: ['calciteInputFocus', 'calciteInputBlur', 'calciteInputInput']
})
export class CalciteInput {
  /**  */
  calciteInputFocus!: ICalciteInput['calciteInputFocus'];
  /**  */
  calciteInputBlur!: ICalciteInput['calciteInputBlur'];
  /**  */
  calciteInputInput!: ICalciteInput['calciteInputInput'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteInputFocus', 'calciteInputBlur', 'calciteInputInput']);
  }
}


export declare interface CalciteInputMessage extends Components.CalciteInputMessage {}
@ProxyCmp({
  inputs: ['active', 'icon', 'scale', 'status', 'theme', 'type']
})
@Component({
  selector: 'calcite-input-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'icon', 'scale', 'status', 'theme', 'type']
})
export class CalciteInputMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteLabel as ICalciteLabel } from '@esri/calcite-components/dist/types/components/calcite-label/calcite-label';
export declare interface CalciteLabel extends Components.CalciteLabel {}
@ProxyCmp({
  inputs: ['disableSpacing', 'disabled', 'for', 'layout', 'scale', 'status', 'theme']
})
@Component({
  selector: 'calcite-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disableSpacing', 'disabled', 'for', 'layout', 'scale', 'status', 'theme'],
  outputs: ['calciteLabelFocus']
})
export class CalciteLabel {
  /**  */
  calciteLabelFocus!: ICalciteLabel['calciteLabelFocus'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteLabelFocus']);
  }
}


export declare interface CalciteLink extends Components.CalciteLink {}
@ProxyCmp({
  inputs: ['disabled', 'href', 'iconEnd', 'iconFlipRtl', 'iconStart', 'theme', 'userSelect'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'href', 'iconEnd', 'iconFlipRtl', 'iconStart', 'theme', 'userSelect']
})
export class CalciteLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CalciteLoader extends Components.CalciteLoader {}
@ProxyCmp({
  inputs: ['active', 'inline', 'label', 'noPadding', 'scale', 'text', 'type', 'value']
})
@Component({
  selector: 'calcite-loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'inline', 'label', 'noPadding', 'scale', 'text', 'type', 'value']
})
export class CalciteLoader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteModal as ICalciteModal } from '@esri/calcite-components/dist/types/components/calcite-modal/calcite-modal';
export declare interface CalciteModal extends Components.CalciteModal {}
@ProxyCmp({
  inputs: ['active', 'backgroundColor', 'beforeClose', 'color', 'disableCloseButton', 'disableEscape', 'docked', 'firstFocus', 'fullscreen', 'intlClose', 'noPadding', 'scale', 'theme', 'width'],
  methods: ['focusElement', 'scrollContent']
})
@Component({
  selector: 'calcite-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'backgroundColor', 'beforeClose', 'color', 'disableCloseButton', 'disableEscape', 'docked', 'firstFocus', 'fullscreen', 'intlClose', 'noPadding', 'scale', 'theme', 'width'],
  outputs: ['calciteModalOpen', 'calciteModalClose']
})
export class CalciteModal {
  /** Fired when the modal begins the open animation */
  calciteModalOpen!: ICalciteModal['calciteModalOpen'];
  /** Fired when the modal begins the close animation */
  calciteModalClose!: ICalciteModal['calciteModalClose'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteModalOpen', 'calciteModalClose']);
  }
}

import { CalciteNotice as ICalciteNotice } from '@esri/calcite-components/dist/types/components/calcite-notice/calcite-notice';
export declare interface CalciteNotice extends Components.CalciteNotice {}
@ProxyCmp({
  inputs: ['active', 'color', 'dismissible', 'icon', 'intlClose', 'scale', 'theme', 'width'],
  methods: ['close', 'open', 'setFocus']
})
@Component({
  selector: 'calcite-notice',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'color', 'dismissible', 'icon', 'intlClose', 'scale', 'theme', 'width'],
  outputs: ['calciteNoticeClose', 'calciteNoticeOpen']
})
export class CalciteNotice {
  /** Fired when an notice is closed */
  calciteNoticeClose!: ICalciteNotice['calciteNoticeClose'];
  /** Fired when an Notice is opened */
  calciteNoticeOpen!: ICalciteNotice['calciteNoticeOpen'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteNoticeClose', 'calciteNoticeOpen']);
  }
}


export declare interface CalciteOption extends Components.CalciteOption {}
@ProxyCmp({
  inputs: ['disabled', 'label', 'selected', 'value']
})
@Component({
  selector: 'calcite-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'label', 'selected', 'value']
})
export class CalciteOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CalciteOptionGroup extends Components.CalciteOptionGroup {}
@ProxyCmp({
  inputs: ['disabled', 'label']
})
@Component({
  selector: 'calcite-option-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'label']
})
export class CalciteOptionGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalcitePagination as ICalcitePagination } from '@esri/calcite-components/dist/types/components/calcite-pagination/calcite-pagination';
export declare interface CalcitePagination extends Components.CalcitePagination {}
@ProxyCmp({
  inputs: ['num', 'scale', 'start', 'textLabelNext', 'textLabelPrevious', 'theme', 'total'],
  methods: ['nextPage', 'previousPage']
})
@Component({
  selector: 'calcite-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['num', 'scale', 'start', 'textLabelNext', 'textLabelPrevious', 'theme', 'total'],
  outputs: ['calcitePaginationUpdate']
})
export class CalcitePagination {
  /** Emitted whenever the selected page changes. @event calcitePaginationUpdate*/
  calcitePaginationUpdate!: ICalcitePagination['calcitePaginationUpdate'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calcitePaginationUpdate']);
  }
}

import { CalcitePanel as ICalcitePanel } from '@esri/calcite-components/dist/types/components/calcite-panel/calcite-panel';
export declare interface CalcitePanel extends Components.CalcitePanel {}
@ProxyCmp({
  inputs: ['beforeBack', 'disabled', 'dismissed', 'dismissible', 'heading', 'heightScale', 'intlBack', 'intlClose', 'intlOpen', 'intlOptions', 'loading', 'menuOpen', 'showBackButton', 'summary', 'theme', 'widthScale'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['beforeBack', 'disabled', 'dismissed', 'dismissible', 'heading', 'heightScale', 'intlBack', 'intlClose', 'intlOpen', 'intlOptions', 'loading', 'menuOpen', 'showBackButton', 'summary', 'theme', 'widthScale'],
  outputs: ['calcitePanelDismissedChange', 'calcitePanelScroll', 'calcitePanelBackClick']
})
export class CalcitePanel {
  /** Emitted when the close button has been clicked. */
  calcitePanelDismissedChange!: ICalcitePanel['calcitePanelDismissedChange'];
  /** Emitted when the content has been scrolled. */
  calcitePanelScroll!: ICalcitePanel['calcitePanelScroll'];
  /** Emitted when the back button has been clicked. */
  calcitePanelBackClick!: ICalcitePanel['calcitePanelBackClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calcitePanelDismissedChange', 'calcitePanelScroll', 'calcitePanelBackClick']);
  }
}

import { CalcitePickList as ICalcitePickList } from '@esri/calcite-components/dist/types/components/calcite-pick-list/calcite-pick-list';
export declare interface CalcitePickList extends Components.CalcitePickList {}
@ProxyCmp({
  inputs: ['disabled', 'filterEnabled', 'filterPlaceholder', 'loading', 'multiple'],
  methods: ['getSelectedItems', 'setFocus']
})
@Component({
  selector: 'calcite-pick-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'filterEnabled', 'filterPlaceholder', 'loading', 'multiple'],
  outputs: ['calciteListChange']
})
export class CalcitePickList {
  /** Emitted when any of the item selections have changed. @event calciteListChange*/
  calciteListChange!: ICalcitePickList['calciteListChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteListChange']);
  }
}


export declare interface CalcitePickListGroup extends Components.CalcitePickListGroup {}
@ProxyCmp({
  inputs: ['groupTitle']
})
@Component({
  selector: 'calcite-pick-list-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['groupTitle']
})
export class CalcitePickListGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalcitePickListItem as ICalcitePickListItem } from '@esri/calcite-components/dist/types/components/calcite-pick-list-item/calcite-pick-list-item';
export declare interface CalcitePickListItem extends Components.CalcitePickListItem {}
@ProxyCmp({
  inputs: ['description', 'disableDeselect', 'disabled', 'icon', 'intlRemove', 'label', 'metadata', 'removable', 'selected', 'value'],
  methods: ['toggleSelected', 'setFocus']
})
@Component({
  selector: 'calcite-pick-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['description', 'disableDeselect', 'disabled', 'icon', 'intlRemove', 'label', 'metadata', 'removable', 'selected', 'value'],
  outputs: ['calciteListItemChange', 'calciteListItemRemove']
})
export class CalcitePickListItem {
  /** Emitted whenever the item is selected or unselected. @event calciteListItemChange*/
  calciteListItemChange!: ICalcitePickListItem['calciteListItemChange'];
  /** Emitted whenever the remove button is pressed. @event calciteListItemRemove*/
  calciteListItemRemove!: ICalcitePickListItem['calciteListItemRemove'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteListItemChange', 'calciteListItemRemove']);
  }
}

import { CalcitePopover as ICalcitePopover } from '@esri/calcite-components/dist/types/components/calcite-popover/calcite-popover';
export declare interface CalcitePopover extends Components.CalcitePopover {}
@ProxyCmp({
  inputs: ['closeButton', 'disableFlip', 'disablePointer', 'flipPlacements', 'intlClose', 'label', 'offsetDistance', 'offsetSkidding', 'open', 'placement', 'referenceElement', 'theme'],
  methods: ['reposition', 'setFocus', 'toggle']
})
@Component({
  selector: 'calcite-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closeButton', 'disableFlip', 'disablePointer', 'flipPlacements', 'intlClose', 'label', 'offsetDistance', 'offsetSkidding', 'open', 'placement', 'referenceElement', 'theme'],
  outputs: ['calcitePopoverClose', 'calcitePopoverOpen']
})
export class CalcitePopover {
  /** Fired when the popover is closed */
  calcitePopoverClose!: ICalcitePopover['calcitePopoverClose'];
  /** Fired when the popover is opened */
  calcitePopoverOpen!: ICalcitePopover['calcitePopoverOpen'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calcitePopoverClose', 'calcitePopoverOpen']);
  }
}


export declare interface CalcitePopoverManager extends Components.CalcitePopoverManager {}
@ProxyCmp({
  inputs: ['autoClose', 'selector']
})
@Component({
  selector: 'calcite-popover-manager',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoClose', 'selector']
})
export class CalcitePopoverManager {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CalciteProgress extends Components.CalciteProgress {}
@ProxyCmp({
  inputs: ['reversed', 'text', 'theme', 'type', 'value']
})
@Component({
  selector: 'calcite-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['reversed', 'text', 'theme', 'type', 'value']
})
export class CalciteProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CalciteRadio extends Components.CalciteRadio {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'focused', 'hidden', 'hovered', 'scale', 'theme']
})
@Component({
  selector: 'calcite-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'focused', 'hidden', 'hovered', 'scale', 'theme']
})
export class CalciteRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteRadioButton as ICalciteRadioButton } from '@esri/calcite-components/dist/types/components/calcite-radio-button/calcite-radio-button';
export declare interface CalciteRadioButton extends Components.CalciteRadioButton {}
@ProxyCmp({
  inputs: ['checked', 'disabled', 'focused', 'guid', 'hidden', 'hovered', 'name', 'required', 'scale', 'theme', 'value']
})
@Component({
  selector: 'calcite-radio-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'focused', 'guid', 'hidden', 'hovered', 'name', 'required', 'scale', 'theme', 'value'],
  outputs: ['calciteRadioButtonChange', 'calciteRadioButtonFocusedChange']
})
export class CalciteRadioButton {
  /** Fires only when the radio button is checked.  This behavior is identical to the native HTML input element.
Since this event does not fire when the radio button is unchecked, it's not recommended to attach a listener for this event
directly on the element, but instead either attach it to a node that contains all of the radio buttons in the group
or use the calciteRadioButtonGroupChange event if using this with calcite-radio-button-group. */
  calciteRadioButtonChange!: ICalciteRadioButton['calciteRadioButtonChange'];
  /** Fires when the radio button is either focused or blurred. */
  calciteRadioButtonFocusedChange!: ICalciteRadioButton['calciteRadioButtonFocusedChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteRadioButtonChange', 'calciteRadioButtonFocusedChange']);
  }
}

import { CalciteRadioButtonGroup as ICalciteRadioButtonGroup } from '@esri/calcite-components/dist/types/components/calcite-radio-button-group/calcite-radio-button-group';
export declare interface CalciteRadioButtonGroup extends Components.CalciteRadioButtonGroup {}
@ProxyCmp({
  inputs: ['disabled', 'hidden', 'layout', 'name', 'required', 'scale', 'theme']
})
@Component({
  selector: 'calcite-radio-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'hidden', 'layout', 'name', 'required', 'scale', 'theme'],
  outputs: ['calciteRadioButtonGroupChange']
})
export class CalciteRadioButtonGroup {
  /**  */
  calciteRadioButtonGroupChange!: ICalciteRadioButtonGroup['calciteRadioButtonGroupChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteRadioButtonGroupChange']);
  }
}

import { CalciteRadioGroup as ICalciteRadioGroup } from '@esri/calcite-components/dist/types/components/calcite-radio-group/calcite-radio-group';
export declare interface CalciteRadioGroup extends Components.CalciteRadioGroup {}
@ProxyCmp({
  inputs: ['appearance', 'disabled', 'layout', 'name', 'scale', 'selectedItem', 'theme', 'width'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appearance', 'disabled', 'layout', 'name', 'scale', 'selectedItem', 'theme', 'width'],
  outputs: ['calciteRadioGroupChange']
})
export class CalciteRadioGroup {
  /**  */
  calciteRadioGroupChange!: ICalciteRadioGroup['calciteRadioGroupChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteRadioGroupChange']);
  }
}

import { CalciteRadioGroupItem as ICalciteRadioGroupItem } from '@esri/calcite-components/dist/types/components/calcite-radio-group-item/calcite-radio-group-item';
export declare interface CalciteRadioGroupItem extends Components.CalciteRadioGroupItem {}
@ProxyCmp({
  inputs: ['checked', 'icon', 'iconFlipRtl', 'iconPosition', 'value']
})
@Component({
  selector: 'calcite-radio-group-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'icon', 'iconFlipRtl', 'iconPosition', 'value'],
  outputs: ['calciteRadioGroupItemChange']
})
export class CalciteRadioGroupItem {
  /**  */
  calciteRadioGroupItemChange!: ICalciteRadioGroupItem['calciteRadioGroupItemChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteRadioGroupItemChange']);
  }
}

import { CalciteRating as ICalciteRating } from '@esri/calcite-components/dist/types/components/calcite-rating/calcite-rating';
export declare interface CalciteRating extends Components.CalciteRating {}
@ProxyCmp({
  inputs: ['average', 'count', 'disabled', 'displayValue', 'intlRating', 'intlStars', 'readOnly', 'scale', 'theme', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-rating',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['average', 'count', 'disabled', 'displayValue', 'intlRating', 'intlStars', 'readOnly', 'scale', 'theme', 'value'],
  outputs: ['calciteRatingChange']
})
export class CalciteRating {
  /**  */
  calciteRatingChange!: ICalciteRating['calciteRatingChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteRatingChange']);
  }
}


export declare interface CalciteScrim extends Components.CalciteScrim {}
@ProxyCmp({
  inputs: ['intlLoading', 'loading', 'theme']
})
@Component({
  selector: 'calcite-scrim',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['intlLoading', 'loading', 'theme']
})
export class CalciteScrim {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteSelect as ICalciteSelect } from '@esri/calcite-components/dist/types/components/calcite-select/calcite-select';
export declare interface CalciteSelect extends Components.CalciteSelect {}
@ProxyCmp({
  inputs: ['disabled', 'label', 'scale', 'theme', 'width'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'label', 'scale', 'theme', 'width'],
  outputs: ['calciteSelectChange']
})
export class CalciteSelect {
  /** This event will fire whenever the selected option changes. */
  calciteSelectChange!: ICalciteSelect['calciteSelectChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteSelectChange']);
  }
}


export declare interface CalciteShell extends Components.CalciteShell {}
@ProxyCmp({
  inputs: ['theme']
})
@Component({
  selector: 'calcite-shell',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['theme']
})
export class CalciteShell {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CalciteShellCenterRow extends Components.CalciteShellCenterRow {}
@ProxyCmp({
  inputs: ['detached', 'heightScale', 'position']
})
@Component({
  selector: 'calcite-shell-center-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['detached', 'heightScale', 'position']
})
export class CalciteShellCenterRow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteShellPanel as ICalciteShellPanel } from '@esri/calcite-components/dist/types/components/calcite-shell-panel/calcite-shell-panel';
export declare interface CalciteShellPanel extends Components.CalciteShellPanel {}
@ProxyCmp({
  inputs: ['collapsed', 'detached', 'detachedHeightScale', 'position', 'widthScale']
})
@Component({
  selector: 'calcite-shell-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['collapsed', 'detached', 'detachedHeightScale', 'position', 'widthScale'],
  outputs: ['calciteShellPanelToggle']
})
export class CalciteShellPanel {
  /** Emitted when collapse has been toggled. */
  calciteShellPanelToggle!: ICalciteShellPanel['calciteShellPanelToggle'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteShellPanelToggle']);
  }
}

import { CalciteSlider as ICalciteSlider } from '@esri/calcite-components/dist/types/components/calcite-slider/calcite-slider';
export declare interface CalciteSlider extends Components.CalciteSlider {}
@ProxyCmp({
  inputs: ['disabled', 'hasHistogram', 'histogram', 'labelHandles', 'labelTicks', 'max', 'maxLabel', 'maxValue', 'min', 'minLabel', 'minValue', 'pageStep', 'precise', 'snap', 'step', 'theme', 'ticks', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'calcite-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'hasHistogram', 'histogram', 'labelHandles', 'labelTicks', 'max', 'maxLabel', 'maxValue', 'min', 'minLabel', 'minValue', 'pageStep', 'precise', 'snap', 'step', 'theme', 'ticks', 'value'],
  outputs: ['calciteSliderUpdate']
})
export class CalciteSlider {
  /** Fires on all updates to the slider.
:warning: Will be fired frequently during drag. If you are performing any
expensive operations consider using a debounce or throttle to avoid
locking up the main thread. */
  calciteSliderUpdate!: ICalciteSlider['calciteSliderUpdate'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteSliderUpdate']);
  }
}

import { CalciteSortableList as ICalciteSortableList } from '@esri/calcite-components/dist/types/components/calcite-sortable-list/calcite-sortable-list';
export declare interface CalciteSortableList extends Components.CalciteSortableList {}
@ProxyCmp({
  inputs: ['disabled', 'handleSelector', 'loading']
})
@Component({
  selector: 'calcite-sortable-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'handleSelector', 'loading'],
  outputs: ['calciteListOrderChange']
})
export class CalciteSortableList {
  /** Emmitted when the order of the list has changed. @event calciteListOrderChange*/
  calciteListOrderChange!: ICalciteSortableList['calciteListOrderChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteListOrderChange']);
  }
}

import { CalciteSplitButton as ICalciteSplitButton } from '@esri/calcite-components/dist/types/components/calcite-split-button/calcite-split-button';
export declare interface CalciteSplitButton extends Components.CalciteSplitButton {}
@ProxyCmp({
  inputs: ['appearance', 'color', 'disabled', 'dropdownIconType', 'dropdownLabel', 'loading', 'primaryIconEnd', 'primaryIconFlipRtl', 'primaryIconStart', 'primaryLabel', 'primaryText', 'scale', 'theme']
})
@Component({
  selector: 'calcite-split-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['appearance', 'color', 'disabled', 'dropdownIconType', 'dropdownLabel', 'loading', 'primaryIconEnd', 'primaryIconFlipRtl', 'primaryIconStart', 'primaryLabel', 'primaryText', 'scale', 'theme'],
  outputs: ['calciteSplitButtonPrimaryClick', 'calciteSplitButtonSecondaryClick']
})
export class CalciteSplitButton {
  /** fired when the primary button is clicked */
  calciteSplitButtonPrimaryClick!: ICalciteSplitButton['calciteSplitButtonPrimaryClick'];
  /** fired when the secondary button is clicked */
  calciteSplitButtonSecondaryClick!: ICalciteSplitButton['calciteSplitButtonSecondaryClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteSplitButtonPrimaryClick', 'calciteSplitButtonSecondaryClick']);
  }
}

import { CalciteStepper as ICalciteStepper } from '@esri/calcite-components/dist/types/components/calcite-stepper/calcite-stepper';
export declare interface CalciteStepper extends Components.CalciteStepper {}
@ProxyCmp({
  inputs: ['icon', 'layout', 'numbered', 'scale', 'theme'],
  methods: ['nextStep', 'prevStep', 'goToStep', 'startStep', 'endStep']
})
@Component({
  selector: 'calcite-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['icon', 'layout', 'numbered', 'scale', 'theme'],
  outputs: ['calciteStepperItemChange']
})
export class CalciteStepper {
  /**  */
  calciteStepperItemChange!: ICalciteStepper['calciteStepperItemChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteStepperItemChange']);
  }
}

import { CalciteStepperItem as ICalciteStepperItem } from '@esri/calcite-components/dist/types/components/calcite-stepper-item/calcite-stepper-item';
export declare interface CalciteStepperItem extends Components.CalciteStepperItem {}
@ProxyCmp({
  inputs: ['active', 'complete', 'disabled', 'error', 'itemSubtitle', 'itemTitle']
})
@Component({
  selector: 'calcite-stepper-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'complete', 'disabled', 'error', 'itemSubtitle', 'itemTitle'],
  outputs: ['calciteStepperItemKeyEvent', 'calciteStepperItemSelect', 'calciteStepperItemRegister']
})
export class CalciteStepperItem {
  /**  */
  calciteStepperItemKeyEvent!: ICalciteStepperItem['calciteStepperItemKeyEvent'];
  /**  */
  calciteStepperItemSelect!: ICalciteStepperItem['calciteStepperItemSelect'];
  /**  */
  calciteStepperItemRegister!: ICalciteStepperItem['calciteStepperItemRegister'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteStepperItemKeyEvent', 'calciteStepperItemSelect', 'calciteStepperItemRegister']);
  }
}

import { CalciteSwitch as ICalciteSwitch } from '@esri/calcite-components/dist/types/components/calcite-switch/calcite-switch';
export declare interface CalciteSwitch extends Components.CalciteSwitch {}
@ProxyCmp({
  inputs: ['disabled', 'name', 'scale', 'switched', 'theme', 'value']
})
@Component({
  selector: 'calcite-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'name', 'scale', 'switched', 'theme', 'value'],
  outputs: ['calciteSwitchChange']
})
export class CalciteSwitch {
  /**  */
  calciteSwitchChange!: ICalciteSwitch['calciteSwitchChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteSwitchChange']);
  }
}


export declare interface CalciteTab extends Components.CalciteTab {}
@ProxyCmp({
  inputs: ['active', 'tab'],
  methods: ['getTabIndex']
})
@Component({
  selector: 'calcite-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'tab']
})
export class CalciteTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteTabNav as ICalciteTabNav } from '@esri/calcite-components/dist/types/components/calcite-tab-nav/calcite-tab-nav';
export declare interface CalciteTabNav extends Components.CalciteTabNav {}
@ProxyCmp({
  inputs: ['storageId', 'syncId']
})
@Component({
  selector: 'calcite-tab-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['storageId', 'syncId'],
  outputs: ['calciteTabChange']
})
export class CalciteTabNav {
  /** Emitted when the active tab changes */
  calciteTabChange!: ICalciteTabNav['calciteTabChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteTabChange']);
  }
}

import { CalciteTabTitle as ICalciteTabTitle } from '@esri/calcite-components/dist/types/components/calcite-tab-title/calcite-tab-title';
export declare interface CalciteTabTitle extends Components.CalciteTabTitle {}
@ProxyCmp({
  inputs: ['active', 'disabled', 'iconEnd', 'iconFlipRtl', 'iconStart', 'tab'],
  methods: ['getTabIndex']
})
@Component({
  selector: 'calcite-tab-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'disabled', 'iconEnd', 'iconFlipRtl', 'iconStart', 'tab'],
  outputs: ['calciteTabsActivate']
})
export class CalciteTabTitle {
  /** Fires when a specific tab is activated. `event.details`: [TabChangeEventDetail](../../interfaces/TabChange.ts) */
  calciteTabsActivate!: ICalciteTabTitle['calciteTabsActivate'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteTabsActivate']);
  }
}


export declare interface CalciteTabs extends Components.CalciteTabs {}
@ProxyCmp({
  inputs: ['layout', 'position', 'theme']
})
@Component({
  selector: 'calcite-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['layout', 'position', 'theme']
})
export class CalciteTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CalciteTile extends Components.CalciteTile {}
@ProxyCmp({
  inputs: ['active', 'description', 'embed', 'focused', 'heading', 'hidden', 'href', 'icon', 'theme']
})
@Component({
  selector: 'calcite-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'description', 'embed', 'focused', 'heading', 'hidden', 'href', 'icon', 'theme']
})
export class CalciteTile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CalciteTileSelect extends Components.CalciteTileSelect {}
@ProxyCmp({
  inputs: ['checked', 'description', 'disabled', 'focused', 'heading', 'hidden', 'icon', 'name', 'showInput', 'theme', 'type', 'value', 'width']
})
@Component({
  selector: 'calcite-tile-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'description', 'disabled', 'focused', 'heading', 'hidden', 'icon', 'name', 'showInput', 'theme', 'type', 'value', 'width']
})
export class CalciteTileSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CalciteTileSelectGroup extends Components.CalciteTileSelectGroup {}
@ProxyCmp({
  inputs: ['layout']
})
@Component({
  selector: 'calcite-tile-select-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['layout']
})
export class CalciteTileSelectGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteTip as ICalciteTip } from '@esri/calcite-components/dist/types/components/calcite-tip/calcite-tip';
export declare interface CalciteTip extends Components.CalciteTip {}
@ProxyCmp({
  inputs: ['dismissed', 'heading', 'intlClose', 'nonDismissible', 'selected', 'theme']
})
@Component({
  selector: 'calcite-tip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dismissed', 'heading', 'intlClose', 'nonDismissible', 'selected', 'theme'],
  outputs: ['calciteTipDismiss']
})
export class CalciteTip {
  /** Emitted when the component has been dismissed. */
  calciteTipDismiss!: ICalciteTip['calciteTipDismiss'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteTipDismiss']);
  }
}


export declare interface CalciteTipGroup extends Components.CalciteTipGroup {}
@ProxyCmp({
  inputs: ['groupTitle']
})
@Component({
  selector: 'calcite-tip-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['groupTitle']
})
export class CalciteTipGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteTipManager as ICalciteTipManager } from '@esri/calcite-components/dist/types/components/calcite-tip-manager/calcite-tip-manager';
export declare interface CalciteTipManager extends Components.CalciteTipManager {}
@ProxyCmp({
  inputs: ['closed', 'intlClose', 'intlDefaultTitle', 'intlNext', 'intlPaginationLabel', 'intlPrevious', 'theme'],
  methods: ['nextTip', 'previousTip']
})
@Component({
  selector: 'calcite-tip-manager',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closed', 'intlClose', 'intlDefaultTitle', 'intlNext', 'intlPaginationLabel', 'intlPrevious', 'theme'],
  outputs: ['calciteTipManagerToggle']
})
export class CalciteTipManager {
  /** Emitted when the `calcite-tip-manager` has been toggled open or closed. */
  calciteTipManagerToggle!: ICalciteTipManager['calciteTipManagerToggle'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteTipManagerToggle']);
  }
}


export declare interface CalciteTooltip extends Components.CalciteTooltip {}
@ProxyCmp({
  inputs: ['label', 'offsetDistance', 'offsetSkidding', 'open', 'placement', 'referenceElement', 'theme'],
  methods: ['reposition']
})
@Component({
  selector: 'calcite-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label', 'offsetDistance', 'offsetSkidding', 'open', 'placement', 'referenceElement', 'theme']
})
export class CalciteTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CalciteTooltipManager extends Components.CalciteTooltipManager {}
@ProxyCmp({
  inputs: ['selector']
})
@Component({
  selector: 'calcite-tooltip-manager',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['selector']
})
export class CalciteTooltipManager {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { CalciteTree as ICalciteTree } from '@esri/calcite-components/dist/types/components/calcite-tree/calcite-tree';
export declare interface CalciteTree extends Components.CalciteTree {}
@ProxyCmp({
  inputs: ['lines', 'scale', 'selectionMode', 'theme']
})
@Component({
  selector: 'calcite-tree',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['lines', 'scale', 'selectionMode', 'theme'],
  outputs: ['calciteTreeSelect']
})
export class CalciteTree {
  /**  */
  calciteTreeSelect!: ICalciteTree['calciteTreeSelect'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteTreeSelect']);
  }
}

import { CalciteTreeItem as ICalciteTreeItem } from '@esri/calcite-components/dist/types/components/calcite-tree-item/calcite-tree-item';
export declare interface CalciteTreeItem extends Components.CalciteTreeItem {}
@ProxyCmp({
  inputs: ['expanded', 'selected']
})
@Component({
  selector: 'calcite-tree-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['expanded', 'selected'],
  outputs: ['calciteTreeItemSelect']
})
export class CalciteTreeItem {
  /**  */
  calciteTreeItemSelect!: ICalciteTreeItem['calciteTreeItemSelect'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteTreeItemSelect']);
  }
}

import { CalciteValueList as ICalciteValueList } from '@esri/calcite-components/dist/types/components/calcite-value-list/calcite-value-list';
export declare interface CalciteValueList extends Components.CalciteValueList {}
@ProxyCmp({
  inputs: ['disabled', 'dragEnabled', 'filterEnabled', 'filterPlaceholder', 'group', 'loading', 'multiple'],
  methods: ['getSelectedItems', 'setFocus']
})
@Component({
  selector: 'calcite-value-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'dragEnabled', 'filterEnabled', 'filterPlaceholder', 'group', 'loading', 'multiple'],
  outputs: ['calciteListChange', 'calciteListOrderChange']
})
export class CalciteValueList {
  /** Emitted when any of the item selections have changed. @event calciteListChange*/
  calciteListChange!: ICalciteValueList['calciteListChange'];
  /** Emmitted when the order of the list has changed. @event calciteListOrderChange*/
  calciteListOrderChange!: ICalciteValueList['calciteListOrderChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteListChange', 'calciteListOrderChange']);
  }
}

import { CalciteValueListItem as ICalciteValueListItem } from '@esri/calcite-components/dist/types/components/calcite-value-list-item/calcite-value-list-item';
export declare interface CalciteValueListItem extends Components.CalciteValueListItem {}
@ProxyCmp({
  inputs: ['description', 'disabled', 'icon', 'label', 'metadata', 'removable', 'selected', 'value'],
  methods: ['toggleSelected', 'setFocus']
})
@Component({
  selector: 'calcite-value-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['description', 'disabled', 'icon', 'label', 'metadata', 'removable', 'selected', 'value'],
  outputs: ['calciteListItemRemove']
})
export class CalciteValueListItem {
  /** Emitted whenever the remove button is pressed. @event calciteListItemRemove*/
  calciteListItemRemove!: ICalciteValueListItem['calciteListItemRemove'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['calciteListItemRemove']);
  }
}

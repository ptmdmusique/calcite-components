import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { Components } from '@esri/calcite-components';
import { CalciteAccordion as ICalciteAccordion } from '@esri/calcite-components/dist/types/components/calcite-accordion/calcite-accordion';
export declare interface CalciteAccordion extends Components.CalciteAccordion {
}
export declare class CalciteAccordion {
    protected z: NgZone;
    /**  */
    calciteAccordionChange: ICalciteAccordion['calciteAccordionChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteAccordionItem as ICalciteAccordionItem } from '@esri/calcite-components/dist/types/components/calcite-accordion-item/calcite-accordion-item';
export declare interface CalciteAccordionItem extends Components.CalciteAccordionItem {
}
export declare class CalciteAccordionItem {
    protected z: NgZone;
    /**  */
    calciteAccordionItemKeyEvent: ICalciteAccordionItem['calciteAccordionItemKeyEvent'];
    /**  */
    calciteAccordionItemSelect: ICalciteAccordionItem['calciteAccordionItemSelect'];
    /**  */
    calciteAccordionItemClose: ICalciteAccordionItem['calciteAccordionItemClose'];
    /**  */
    calciteAccordionItemRegister: ICalciteAccordionItem['calciteAccordionItemRegister'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteAction extends Components.CalciteAction {
}
export declare class CalciteAction {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteActionBar as ICalciteActionBar } from '@esri/calcite-components/dist/types/components/calcite-action-bar/calcite-action-bar';
export declare interface CalciteActionBar extends Components.CalciteActionBar {
}
export declare class CalciteActionBar {
    protected z: NgZone;
    /** Emitted when expanded has been toggled. */
    calciteActionBarToggle: ICalciteActionBar['calciteActionBarToggle'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteActionGroup extends Components.CalciteActionGroup {
}
export declare class CalciteActionGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteActionPad as ICalciteActionPad } from '@esri/calcite-components/dist/types/components/calcite-action-pad/calcite-action-pad';
export declare interface CalciteActionPad extends Components.CalciteActionPad {
}
export declare class CalciteActionPad {
    protected z: NgZone;
    /** Emitted when expanded has been toggled. */
    calciteActionPadToggle: ICalciteActionPad['calciteActionPadToggle'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteAlert as ICalciteAlert } from '@esri/calcite-components/dist/types/components/calcite-alert/calcite-alert';
export declare interface CalciteAlert extends Components.CalciteAlert {
}
export declare class CalciteAlert {
    protected z: NgZone;
    /** Fired when an alert is closed */
    calciteAlertClose: ICalciteAlert['calciteAlertClose'];
    /** Fired when an alert is opened */
    calciteAlertOpen: ICalciteAlert['calciteAlertOpen'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteAvatar extends Components.CalciteAvatar {
}
export declare class CalciteAvatar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteBlock as ICalciteBlock } from '@esri/calcite-components/dist/types/components/calcite-block/calcite-block';
export declare interface CalciteBlock extends Components.CalciteBlock {
}
export declare class CalciteBlock {
    protected z: NgZone;
    /** Emitted when the header has been clicked. */
    calciteBlockToggle: ICalciteBlock['calciteBlockToggle'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteBlockSection as ICalciteBlockSection } from '@esri/calcite-components/dist/types/components/calcite-block-section/calcite-block-section';
export declare interface CalciteBlockSection extends Components.CalciteBlockSection {
}
export declare class CalciteBlockSection {
    protected z: NgZone;
    /** Emitted when the header has been clicked. */
    calciteBlockSectionToggle: ICalciteBlockSection['calciteBlockSectionToggle'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteButton extends Components.CalciteButton {
}
export declare class CalciteButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteCard as ICalciteCard } from '@esri/calcite-components/dist/types/components/calcite-card/calcite-card';
export declare interface CalciteCard extends Components.CalciteCard {
}
export declare class CalciteCard {
    protected z: NgZone;
    /** Fired when a selectable card is selected */
    calciteCardSelect: ICalciteCard['calciteCardSelect'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteCheckbox as ICalciteCheckbox } from '@esri/calcite-components/dist/types/components/calcite-checkbox/calcite-checkbox';
export declare interface CalciteCheckbox extends Components.CalciteCheckbox {
}
export declare class CalciteCheckbox {
    protected z: NgZone;
    /** Emitted when the checkbox checked status changes */
    calciteCheckboxChange: ICalciteCheckbox['calciteCheckboxChange'];
    /** Emitted when the checkbox focused state changes */
    calciteCheckboxFocusedChange: ICalciteCheckbox['calciteCheckboxFocusedChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteChip as ICalciteChip } from '@esri/calcite-components/dist/types/components/calcite-chip/calcite-chip';
export declare interface CalciteChip extends Components.CalciteChip {
}
export declare class CalciteChip {
    protected z: NgZone;
    /** Emitted when the dismiss button is clicked */
    calciteChipDismiss: ICalciteChip['calciteChipDismiss'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteColor as ICalciteColor } from '@esri/calcite-components/dist/types/components/calcite-color/calcite-color';
export declare interface CalciteColor extends Components.CalciteColor {
}
export declare class CalciteColor {
    protected z: NgZone;
    /**  */
    calciteColorChange: ICalciteColor['calciteColorChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteColorHexInput as ICalciteColorHexInput } from '@esri/calcite-components/dist/types/components/calcite-color-hex-input/calcite-color-hex-input';
export declare interface CalciteColorHexInput extends Components.CalciteColorHexInput {
}
export declare class CalciteColorHexInput {
    protected z: NgZone;
    /** Emitted when the hex value changes. */
    calciteColorHexInputChange: ICalciteColorHexInput['calciteColorHexInputChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteColorSwatch extends Components.CalciteColorSwatch {
}
export declare class CalciteColorSwatch {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteCombobox as ICalciteCombobox } from '@esri/calcite-components/dist/types/components/calcite-combobox/calcite-combobox';
export declare interface CalciteCombobox extends Components.CalciteCombobox {
}
export declare class CalciteCombobox {
    protected z: NgZone;
    /**  */
    calciteLookupChange: ICalciteCombobox['calciteLookupChange'];
    /**  */
    calciteComboboxChipDismiss: ICalciteCombobox['calciteComboboxChipDismiss'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteComboboxItem as ICalciteComboboxItem } from '@esri/calcite-components/dist/types/components/calcite-combobox-item/calcite-combobox-item';
export declare interface CalciteComboboxItem extends Components.CalciteComboboxItem {
}
export declare class CalciteComboboxItem {
    protected z: NgZone;
    /** Emitted whenever the item is selected or unselected. @event calciteComboboxItemChange*/
    calciteComboboxItemChange: ICalciteComboboxItem['calciteComboboxItemChange'];
    /**  */
    calciteComboboxItemKeyEvent: ICalciteComboboxItem['calciteComboboxItemKeyEvent'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteDate as ICalciteDate } from '@esri/calcite-components/dist/types/components/calcite-date/calcite-date';
export declare interface CalciteDate extends Components.CalciteDate {
}
export declare class CalciteDate {
    protected z: NgZone;
    /** Trigger calcite date change when a user changes the date. */
    calciteDateChange: ICalciteDate['calciteDateChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteDateDay as ICalciteDateDay } from '@esri/calcite-components/dist/types/components/calcite-date-day/calcite-date-day';
export declare interface CalciteDateDay extends Components.CalciteDateDay {
}
export declare class CalciteDateDay {
    protected z: NgZone;
    /** Emitted when user selects day */
    calciteDaySelect: ICalciteDateDay['calciteDaySelect'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteDateMonth as ICalciteDateMonth } from '@esri/calcite-components/dist/types/components/calcite-date-month/calcite-date-month';
export declare interface CalciteDateMonth extends Components.CalciteDateMonth {
}
export declare class CalciteDateMonth {
    protected z: NgZone;
    /** Event emitted when user selects the date. */
    calciteDateSelect: ICalciteDateMonth['calciteDateSelect'];
    /** Active date for the user keyboard access. */
    calciteActiveDateChange: ICalciteDateMonth['calciteActiveDateChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteDateMonthHeader as ICalciteDateMonthHeader } from '@esri/calcite-components/dist/types/components/calcite-date-month-header/calcite-date-month-header';
export declare interface CalciteDateMonthHeader extends Components.CalciteDateMonthHeader {
}
export declare class CalciteDateMonthHeader {
    protected z: NgZone;
    /** Changes to active date */
    calciteDateSelect: ICalciteDateMonthHeader['calciteDateSelect'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteDropdown as ICalciteDropdown } from '@esri/calcite-components/dist/types/components/calcite-dropdown/calcite-dropdown';
export declare interface CalciteDropdown extends Components.CalciteDropdown {
}
export declare class CalciteDropdown {
    protected z: NgZone;
    /** fires when a dropdown item has been selected or deselected * */
    calciteDropdownSelect: ICalciteDropdown['calciteDropdownSelect'];
    /** fires when a dropdown has been opened * */
    calciteDropdownOpen: ICalciteDropdown['calciteDropdownOpen'];
    /** fires when a dropdown has been closed * */
    calciteDropdownClose: ICalciteDropdown['calciteDropdownClose'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteDropdownGroup as ICalciteDropdownGroup } from '@esri/calcite-components/dist/types/components/calcite-dropdown-group/calcite-dropdown-group';
export declare interface CalciteDropdownGroup extends Components.CalciteDropdownGroup {
}
export declare class CalciteDropdownGroup {
    protected z: NgZone;
    /**  */
    calciteDropdownGroupRegister: ICalciteDropdownGroup['calciteDropdownGroupRegister'];
    /**  */
    calciteDropdownItemChange: ICalciteDropdownGroup['calciteDropdownItemChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteDropdownItem as ICalciteDropdownItem } from '@esri/calcite-components/dist/types/components/calcite-dropdown-item/calcite-dropdown-item';
export declare interface CalciteDropdownItem extends Components.CalciteDropdownItem {
}
export declare class CalciteDropdownItem {
    protected z: NgZone;
    /**  */
    calciteDropdownItemSelect: ICalciteDropdownItem['calciteDropdownItemSelect'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteFab extends Components.CalciteFab {
}
export declare class CalciteFab {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteFilter as ICalciteFilter } from '@esri/calcite-components/dist/types/components/calcite-filter/calcite-filter';
export declare interface CalciteFilter extends Components.CalciteFilter {
}
export declare class CalciteFilter {
    protected z: NgZone;
    /**  */
    calciteFilterChange: ICalciteFilter['calciteFilterChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteFlow extends Components.CalciteFlow {
}
export declare class CalciteFlow {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteGraph extends Components.CalciteGraph {
}
export declare class CalciteGraph {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteHandle as ICalciteHandle } from '@esri/calcite-components/dist/types/components/calcite-handle/calcite-handle';
export declare interface CalciteHandle extends Components.CalciteHandle {
}
export declare class CalciteHandle {
    protected z: NgZone;
    /** Emmitted when the the handle is activated and the up or down arrow key is pressed. @event calciteHandleNudge*/
    calciteHandleNudge: ICalciteHandle['calciteHandleNudge'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteIcon extends Components.CalciteIcon {
}
export declare class CalciteIcon {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteInlineEditable as ICalciteInlineEditable } from '@esri/calcite-components/dist/types/components/calcite-inline-editable/calcite-inline-editable';
export declare interface CalciteInlineEditable extends Components.CalciteInlineEditable {
}
export declare class CalciteInlineEditable {
    protected z: NgZone;
    /**  */
    calciteInlineEditableEditingCancel: ICalciteInlineEditable['calciteInlineEditableEditingCancel'];
    /**  */
    calciteInlineEditableChangesConfirm: ICalciteInlineEditable['calciteInlineEditableChangesConfirm'];
    /**  */
    calciteInlineEditableEnableEditingChange: ICalciteInlineEditable['calciteInlineEditableEnableEditingChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteInput as ICalciteInput } from '@esri/calcite-components/dist/types/components/calcite-input/calcite-input';
export declare interface CalciteInput extends Components.CalciteInput {
}
export declare class CalciteInput {
    protected z: NgZone;
    /**  */
    calciteInputFocus: ICalciteInput['calciteInputFocus'];
    /**  */
    calciteInputBlur: ICalciteInput['calciteInputBlur'];
    /**  */
    calciteInputInput: ICalciteInput['calciteInputInput'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteInputMessage extends Components.CalciteInputMessage {
}
export declare class CalciteInputMessage {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteLabel as ICalciteLabel } from '@esri/calcite-components/dist/types/components/calcite-label/calcite-label';
export declare interface CalciteLabel extends Components.CalciteLabel {
}
export declare class CalciteLabel {
    protected z: NgZone;
    /**  */
    calciteLabelFocus: ICalciteLabel['calciteLabelFocus'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteLink extends Components.CalciteLink {
}
export declare class CalciteLink {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteLoader extends Components.CalciteLoader {
}
export declare class CalciteLoader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteModal as ICalciteModal } from '@esri/calcite-components/dist/types/components/calcite-modal/calcite-modal';
export declare interface CalciteModal extends Components.CalciteModal {
}
export declare class CalciteModal {
    protected z: NgZone;
    /** Fired when the modal begins the open animation */
    calciteModalOpen: ICalciteModal['calciteModalOpen'];
    /** Fired when the modal begins the close animation */
    calciteModalClose: ICalciteModal['calciteModalClose'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteNotice as ICalciteNotice } from '@esri/calcite-components/dist/types/components/calcite-notice/calcite-notice';
export declare interface CalciteNotice extends Components.CalciteNotice {
}
export declare class CalciteNotice {
    protected z: NgZone;
    /** Fired when an notice is closed */
    calciteNoticeClose: ICalciteNotice['calciteNoticeClose'];
    /** Fired when an Notice is opened */
    calciteNoticeOpen: ICalciteNotice['calciteNoticeOpen'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteOption extends Components.CalciteOption {
}
export declare class CalciteOption {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteOptionGroup extends Components.CalciteOptionGroup {
}
export declare class CalciteOptionGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalcitePagination as ICalcitePagination } from '@esri/calcite-components/dist/types/components/calcite-pagination/calcite-pagination';
export declare interface CalcitePagination extends Components.CalcitePagination {
}
export declare class CalcitePagination {
    protected z: NgZone;
    /** Emitted whenever the selected page changes. @event calcitePaginationUpdate*/
    calcitePaginationUpdate: ICalcitePagination['calcitePaginationUpdate'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalcitePanel as ICalcitePanel } from '@esri/calcite-components/dist/types/components/calcite-panel/calcite-panel';
export declare interface CalcitePanel extends Components.CalcitePanel {
}
export declare class CalcitePanel {
    protected z: NgZone;
    /** Emitted when the close button has been clicked. */
    calcitePanelDismissedChange: ICalcitePanel['calcitePanelDismissedChange'];
    /** Emitted when the content has been scrolled. */
    calcitePanelScroll: ICalcitePanel['calcitePanelScroll'];
    /** Emitted when the back button has been clicked. */
    calcitePanelBackClick: ICalcitePanel['calcitePanelBackClick'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalcitePickList as ICalcitePickList } from '@esri/calcite-components/dist/types/components/calcite-pick-list/calcite-pick-list';
export declare interface CalcitePickList extends Components.CalcitePickList {
}
export declare class CalcitePickList {
    protected z: NgZone;
    /** Emitted when any of the item selections have changed. @event calciteListChange*/
    calciteListChange: ICalcitePickList['calciteListChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalcitePickListGroup extends Components.CalcitePickListGroup {
}
export declare class CalcitePickListGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalcitePickListItem as ICalcitePickListItem } from '@esri/calcite-components/dist/types/components/calcite-pick-list-item/calcite-pick-list-item';
export declare interface CalcitePickListItem extends Components.CalcitePickListItem {
}
export declare class CalcitePickListItem {
    protected z: NgZone;
    /** Emitted whenever the item is selected or unselected. @event calciteListItemChange*/
    calciteListItemChange: ICalcitePickListItem['calciteListItemChange'];
    /** Emitted whenever the remove button is pressed. @event calciteListItemRemove*/
    calciteListItemRemove: ICalcitePickListItem['calciteListItemRemove'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalcitePopover as ICalcitePopover } from '@esri/calcite-components/dist/types/components/calcite-popover/calcite-popover';
export declare interface CalcitePopover extends Components.CalcitePopover {
}
export declare class CalcitePopover {
    protected z: NgZone;
    /** Fired when the popover is closed */
    calcitePopoverClose: ICalcitePopover['calcitePopoverClose'];
    /** Fired when the popover is opened */
    calcitePopoverOpen: ICalcitePopover['calcitePopoverOpen'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalcitePopoverManager extends Components.CalcitePopoverManager {
}
export declare class CalcitePopoverManager {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteProgress extends Components.CalciteProgress {
}
export declare class CalciteProgress {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteRadio extends Components.CalciteRadio {
}
export declare class CalciteRadio {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteRadioButton as ICalciteRadioButton } from '@esri/calcite-components/dist/types/components/calcite-radio-button/calcite-radio-button';
export declare interface CalciteRadioButton extends Components.CalciteRadioButton {
}
export declare class CalciteRadioButton {
    protected z: NgZone;
    /** Fires only when the radio button is checked.  This behavior is identical to the native HTML input element.
  Since this event does not fire when the radio button is unchecked, it's not recommended to attach a listener for this event
  directly on the element, but instead either attach it to a node that contains all of the radio buttons in the group
  or use the calciteRadioButtonGroupChange event if using this with calcite-radio-button-group. */
    calciteRadioButtonChange: ICalciteRadioButton['calciteRadioButtonChange'];
    /** Fires when the radio button is either focused or blurred. */
    calciteRadioButtonFocusedChange: ICalciteRadioButton['calciteRadioButtonFocusedChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteRadioButtonGroup as ICalciteRadioButtonGroup } from '@esri/calcite-components/dist/types/components/calcite-radio-button-group/calcite-radio-button-group';
export declare interface CalciteRadioButtonGroup extends Components.CalciteRadioButtonGroup {
}
export declare class CalciteRadioButtonGroup {
    protected z: NgZone;
    /**  */
    calciteRadioButtonGroupChange: ICalciteRadioButtonGroup['calciteRadioButtonGroupChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteRadioGroup as ICalciteRadioGroup } from '@esri/calcite-components/dist/types/components/calcite-radio-group/calcite-radio-group';
export declare interface CalciteRadioGroup extends Components.CalciteRadioGroup {
}
export declare class CalciteRadioGroup {
    protected z: NgZone;
    /**  */
    calciteRadioGroupChange: ICalciteRadioGroup['calciteRadioGroupChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteRadioGroupItem as ICalciteRadioGroupItem } from '@esri/calcite-components/dist/types/components/calcite-radio-group-item/calcite-radio-group-item';
export declare interface CalciteRadioGroupItem extends Components.CalciteRadioGroupItem {
}
export declare class CalciteRadioGroupItem {
    protected z: NgZone;
    /**  */
    calciteRadioGroupItemChange: ICalciteRadioGroupItem['calciteRadioGroupItemChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteRating as ICalciteRating } from '@esri/calcite-components/dist/types/components/calcite-rating/calcite-rating';
export declare interface CalciteRating extends Components.CalciteRating {
}
export declare class CalciteRating {
    protected z: NgZone;
    /**  */
    calciteRatingChange: ICalciteRating['calciteRatingChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteScrim extends Components.CalciteScrim {
}
export declare class CalciteScrim {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteSelect as ICalciteSelect } from '@esri/calcite-components/dist/types/components/calcite-select/calcite-select';
export declare interface CalciteSelect extends Components.CalciteSelect {
}
export declare class CalciteSelect {
    protected z: NgZone;
    /** This event will fire whenever the selected option changes. */
    calciteSelectChange: ICalciteSelect['calciteSelectChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteShell extends Components.CalciteShell {
}
export declare class CalciteShell {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteShellCenterRow extends Components.CalciteShellCenterRow {
}
export declare class CalciteShellCenterRow {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteShellPanel as ICalciteShellPanel } from '@esri/calcite-components/dist/types/components/calcite-shell-panel/calcite-shell-panel';
export declare interface CalciteShellPanel extends Components.CalciteShellPanel {
}
export declare class CalciteShellPanel {
    protected z: NgZone;
    /** Emitted when collapse has been toggled. */
    calciteShellPanelToggle: ICalciteShellPanel['calciteShellPanelToggle'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteSlider as ICalciteSlider } from '@esri/calcite-components/dist/types/components/calcite-slider/calcite-slider';
export declare interface CalciteSlider extends Components.CalciteSlider {
}
export declare class CalciteSlider {
    protected z: NgZone;
    /** Fires on all updates to the slider.
  :warning: Will be fired frequently during drag. If you are performing any
  expensive operations consider using a debounce or throttle to avoid
  locking up the main thread. */
    calciteSliderUpdate: ICalciteSlider['calciteSliderUpdate'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteSortableList as ICalciteSortableList } from '@esri/calcite-components/dist/types/components/calcite-sortable-list/calcite-sortable-list';
export declare interface CalciteSortableList extends Components.CalciteSortableList {
}
export declare class CalciteSortableList {
    protected z: NgZone;
    /** Emmitted when the order of the list has changed. @event calciteListOrderChange*/
    calciteListOrderChange: ICalciteSortableList['calciteListOrderChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteSplitButton as ICalciteSplitButton } from '@esri/calcite-components/dist/types/components/calcite-split-button/calcite-split-button';
export declare interface CalciteSplitButton extends Components.CalciteSplitButton {
}
export declare class CalciteSplitButton {
    protected z: NgZone;
    /** fired when the primary button is clicked */
    calciteSplitButtonPrimaryClick: ICalciteSplitButton['calciteSplitButtonPrimaryClick'];
    /** fired when the secondary button is clicked */
    calciteSplitButtonSecondaryClick: ICalciteSplitButton['calciteSplitButtonSecondaryClick'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteStepper as ICalciteStepper } from '@esri/calcite-components/dist/types/components/calcite-stepper/calcite-stepper';
export declare interface CalciteStepper extends Components.CalciteStepper {
}
export declare class CalciteStepper {
    protected z: NgZone;
    /**  */
    calciteStepperItemChange: ICalciteStepper['calciteStepperItemChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteStepperItem as ICalciteStepperItem } from '@esri/calcite-components/dist/types/components/calcite-stepper-item/calcite-stepper-item';
export declare interface CalciteStepperItem extends Components.CalciteStepperItem {
}
export declare class CalciteStepperItem {
    protected z: NgZone;
    /**  */
    calciteStepperItemKeyEvent: ICalciteStepperItem['calciteStepperItemKeyEvent'];
    /**  */
    calciteStepperItemSelect: ICalciteStepperItem['calciteStepperItemSelect'];
    /**  */
    calciteStepperItemRegister: ICalciteStepperItem['calciteStepperItemRegister'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteSwitch as ICalciteSwitch } from '@esri/calcite-components/dist/types/components/calcite-switch/calcite-switch';
export declare interface CalciteSwitch extends Components.CalciteSwitch {
}
export declare class CalciteSwitch {
    protected z: NgZone;
    /**  */
    calciteSwitchChange: ICalciteSwitch['calciteSwitchChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteTab extends Components.CalciteTab {
}
export declare class CalciteTab {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteTabNav as ICalciteTabNav } from '@esri/calcite-components/dist/types/components/calcite-tab-nav/calcite-tab-nav';
export declare interface CalciteTabNav extends Components.CalciteTabNav {
}
export declare class CalciteTabNav {
    protected z: NgZone;
    /** Emitted when the active tab changes */
    calciteTabChange: ICalciteTabNav['calciteTabChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteTabTitle as ICalciteTabTitle } from '@esri/calcite-components/dist/types/components/calcite-tab-title/calcite-tab-title';
export declare interface CalciteTabTitle extends Components.CalciteTabTitle {
}
export declare class CalciteTabTitle {
    protected z: NgZone;
    /** Fires when a specific tab is activated. `event.details`: [TabChangeEventDetail](../../interfaces/TabChange.ts) */
    calciteTabsActivate: ICalciteTabTitle['calciteTabsActivate'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteTabs extends Components.CalciteTabs {
}
export declare class CalciteTabs {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteTile extends Components.CalciteTile {
}
export declare class CalciteTile {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteTileSelect extends Components.CalciteTileSelect {
}
export declare class CalciteTileSelect {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteTileSelectGroup extends Components.CalciteTileSelectGroup {
}
export declare class CalciteTileSelectGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteTip as ICalciteTip } from '@esri/calcite-components/dist/types/components/calcite-tip/calcite-tip';
export declare interface CalciteTip extends Components.CalciteTip {
}
export declare class CalciteTip {
    protected z: NgZone;
    /** Emitted when the component has been dismissed. */
    calciteTipDismiss: ICalciteTip['calciteTipDismiss'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteTipGroup extends Components.CalciteTipGroup {
}
export declare class CalciteTipGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteTipManager as ICalciteTipManager } from '@esri/calcite-components/dist/types/components/calcite-tip-manager/calcite-tip-manager';
export declare interface CalciteTipManager extends Components.CalciteTipManager {
}
export declare class CalciteTipManager {
    protected z: NgZone;
    /** Emitted when the `calcite-tip-manager` has been toggled open or closed. */
    calciteTipManagerToggle: ICalciteTipManager['calciteTipManagerToggle'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteTooltip extends Components.CalciteTooltip {
}
export declare class CalciteTooltip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface CalciteTooltipManager extends Components.CalciteTooltipManager {
}
export declare class CalciteTooltipManager {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteTree as ICalciteTree } from '@esri/calcite-components/dist/types/components/calcite-tree/calcite-tree';
export declare interface CalciteTree extends Components.CalciteTree {
}
export declare class CalciteTree {
    protected z: NgZone;
    /**  */
    calciteTreeSelect: ICalciteTree['calciteTreeSelect'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteTreeItem as ICalciteTreeItem } from '@esri/calcite-components/dist/types/components/calcite-tree-item/calcite-tree-item';
export declare interface CalciteTreeItem extends Components.CalciteTreeItem {
}
export declare class CalciteTreeItem {
    protected z: NgZone;
    /**  */
    calciteTreeItemSelect: ICalciteTreeItem['calciteTreeItemSelect'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteValueList as ICalciteValueList } from '@esri/calcite-components/dist/types/components/calcite-value-list/calcite-value-list';
export declare interface CalciteValueList extends Components.CalciteValueList {
}
export declare class CalciteValueList {
    protected z: NgZone;
    /** Emitted when any of the item selections have changed. @event calciteListChange*/
    calciteListChange: ICalciteValueList['calciteListChange'];
    /** Emmitted when the order of the list has changed. @event calciteListOrderChange*/
    calciteListOrderChange: ICalciteValueList['calciteListOrderChange'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
import { CalciteValueListItem as ICalciteValueListItem } from '@esri/calcite-components/dist/types/components/calcite-value-list-item/calcite-value-list-item';
export declare interface CalciteValueListItem extends Components.CalciteValueListItem {
}
export declare class CalciteValueListItem {
    protected z: NgZone;
    /** Emitted whenever the remove button is pressed. @event calciteListItemRemove*/
    calciteListItemRemove: ICalciteValueListItem['calciteListItemRemove'];
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}

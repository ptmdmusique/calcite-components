import { __decorate } from "tslib";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';
import * as i0 from "@angular/core";
const _c0 = ["*"];
let CalciteAccordion = class CalciteAccordion {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteAccordionChange']);
    }
};
CalciteAccordion.decorators = [
    { type: Component, args: [{
                selector: 'calcite-accordion',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['appearance', 'iconPosition', 'iconType', 'scale', 'selectionMode', 'theme'],
                outputs: ['calciteAccordionChange']
            },] },
];
/** @nocollapse */
CalciteAccordion.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteAccordion.ɵfac = function CalciteAccordion_Factory(t) { return new (t || CalciteAccordion)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteAccordion.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteAccordion, selectors: [["calcite-accordion"]], inputs: { appearance: "appearance", iconPosition: "iconPosition", iconType: "iconType", scale: "scale", selectionMode: "selectionMode", theme: "theme" }, outputs: { calciteAccordionChange: "calciteAccordionChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteAccordion_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteAccordion = __decorate([
    ProxyCmp({
        inputs: ['appearance', 'iconPosition', 'iconType', 'scale', 'selectionMode', 'theme']
    })
], CalciteAccordion);
export { CalciteAccordion };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteAccordion, [{
        type: Component,
        args: [{
                selector: 'calcite-accordion',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['appearance', 'iconPosition', 'iconType', 'scale', 'selectionMode', 'theme'],
                outputs: ['calciteAccordionChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteAccordion.prototype.calciteAccordionChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteAccordion.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteAccordion.prototype.z;
}
let CalciteAccordionItem = class CalciteAccordionItem {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteAccordionItemKeyEvent', 'calciteAccordionItemSelect', 'calciteAccordionItemClose', 'calciteAccordionItemRegister']);
    }
};
CalciteAccordionItem.decorators = [
    { type: Component, args: [{
                selector: 'calcite-accordion-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'icon', 'itemSubtitle', 'itemTitle'],
                outputs: ['calciteAccordionItemKeyEvent', 'calciteAccordionItemSelect', 'calciteAccordionItemClose', 'calciteAccordionItemRegister']
            },] },
];
/** @nocollapse */
CalciteAccordionItem.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteAccordionItem.ɵfac = function CalciteAccordionItem_Factory(t) { return new (t || CalciteAccordionItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteAccordionItem.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteAccordionItem, selectors: [["calcite-accordion-item"]], inputs: { active: "active", icon: "icon", itemSubtitle: "itemSubtitle", itemTitle: "itemTitle" }, outputs: { calciteAccordionItemKeyEvent: "calciteAccordionItemKeyEvent", calciteAccordionItemSelect: "calciteAccordionItemSelect", calciteAccordionItemClose: "calciteAccordionItemClose", calciteAccordionItemRegister: "calciteAccordionItemRegister" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteAccordionItem_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteAccordionItem = __decorate([
    ProxyCmp({
        inputs: ['active', 'icon', 'itemSubtitle', 'itemTitle']
    })
], CalciteAccordionItem);
export { CalciteAccordionItem };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteAccordionItem, [{
        type: Component,
        args: [{
                selector: 'calcite-accordion-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'icon', 'itemSubtitle', 'itemTitle'],
                outputs: ['calciteAccordionItemKeyEvent', 'calciteAccordionItemSelect', 'calciteAccordionItemClose', 'calciteAccordionItemRegister']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteAccordionItem.prototype.calciteAccordionItemKeyEvent;
    /**
     *
     * @type {?}
     */
    CalciteAccordionItem.prototype.calciteAccordionItemSelect;
    /**
     *
     * @type {?}
     */
    CalciteAccordionItem.prototype.calciteAccordionItemClose;
    /**
     *
     * @type {?}
     */
    CalciteAccordionItem.prototype.calciteAccordionItemRegister;
    /**
     * @type {?}
     * @protected
     */
    CalciteAccordionItem.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteAccordionItem.prototype.z;
}
let CalciteAction = class CalciteAction {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteAction.decorators = [
    { type: Component, args: [{
                selector: 'calcite-action',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'appearance', 'compact', 'disabled', 'icon', 'indicator', 'intlLoading', 'label', 'loading', 'scale', 'text', 'textEnabled', 'theme']
            },] },
];
/** @nocollapse */
CalciteAction.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteAction.ɵfac = function CalciteAction_Factory(t) { return new (t || CalciteAction)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteAction.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteAction, selectors: [["calcite-action"]], inputs: { active: "active", appearance: "appearance", compact: "compact", disabled: "disabled", icon: "icon", indicator: "indicator", intlLoading: "intlLoading", label: "label", loading: "loading", scale: "scale", text: "text", textEnabled: "textEnabled", theme: "theme" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteAction_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteAction = __decorate([
    ProxyCmp({
        inputs: ['active', 'appearance', 'compact', 'disabled', 'icon', 'indicator', 'intlLoading', 'label', 'loading', 'scale', 'text', 'textEnabled', 'theme'],
        methods: ['setFocus']
    })
], CalciteAction);
export { CalciteAction };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteAction, [{
        type: Component,
        args: [{
                selector: 'calcite-action',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'appearance', 'compact', 'disabled', 'icon', 'indicator', 'intlLoading', 'label', 'loading', 'scale', 'text', 'textEnabled', 'theme']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteAction.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteAction.prototype.z;
}
let CalciteActionBar = class CalciteActionBar {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteActionBarToggle']);
    }
};
CalciteActionBar.decorators = [
    { type: Component, args: [{
                selector: 'calcite-action-bar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['expand', 'expanded', 'intlCollapse', 'intlExpand', 'position', 'theme', 'tooltipExpand'],
                outputs: ['calciteActionBarToggle']
            },] },
];
/** @nocollapse */
CalciteActionBar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteActionBar.ɵfac = function CalciteActionBar_Factory(t) { return new (t || CalciteActionBar)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteActionBar.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteActionBar, selectors: [["calcite-action-bar"]], inputs: { expand: "expand", expanded: "expanded", intlCollapse: "intlCollapse", intlExpand: "intlExpand", position: "position", theme: "theme", tooltipExpand: "tooltipExpand" }, outputs: { calciteActionBarToggle: "calciteActionBarToggle" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteActionBar_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteActionBar = __decorate([
    ProxyCmp({
        inputs: ['expand', 'expanded', 'intlCollapse', 'intlExpand', 'position', 'theme', 'tooltipExpand'],
        methods: ['setFocus']
    })
], CalciteActionBar);
export { CalciteActionBar };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteActionBar, [{
        type: Component,
        args: [{
                selector: 'calcite-action-bar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['expand', 'expanded', 'intlCollapse', 'intlExpand', 'position', 'theme', 'tooltipExpand'],
                outputs: ['calciteActionBarToggle']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted when expanded has been toggled.
     * @type {?}
     */
    CalciteActionBar.prototype.calciteActionBarToggle;
    /**
     * @type {?}
     * @protected
     */
    CalciteActionBar.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteActionBar.prototype.z;
}
export class CalciteActionGroup {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
}
CalciteActionGroup.decorators = [
    { type: Component, args: [{
                selector: 'calcite-action-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>'
            },] },
];
/** @nocollapse */
CalciteActionGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteActionGroup.ɵfac = function CalciteActionGroup_Factory(t) { return new (t || CalciteActionGroup)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteActionGroup.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteActionGroup, selectors: [["calcite-action-group"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteActionGroup_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteActionGroup, [{
        type: Component,
        args: [{
                selector: 'calcite-action-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>'
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteActionGroup.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteActionGroup.prototype.z;
}
let CalciteActionPad = class CalciteActionPad {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteActionPadToggle']);
    }
};
CalciteActionPad.decorators = [
    { type: Component, args: [{
                selector: 'calcite-action-pad',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['expand', 'expanded', 'intlCollapse', 'intlExpand', 'layout', 'position', 'theme', 'tooltipExpand'],
                outputs: ['calciteActionPadToggle']
            },] },
];
/** @nocollapse */
CalciteActionPad.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteActionPad.ɵfac = function CalciteActionPad_Factory(t) { return new (t || CalciteActionPad)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteActionPad.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteActionPad, selectors: [["calcite-action-pad"]], inputs: { expand: "expand", expanded: "expanded", intlCollapse: "intlCollapse", intlExpand: "intlExpand", layout: "layout", position: "position", theme: "theme", tooltipExpand: "tooltipExpand" }, outputs: { calciteActionPadToggle: "calciteActionPadToggle" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteActionPad_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteActionPad = __decorate([
    ProxyCmp({
        inputs: ['expand', 'expanded', 'intlCollapse', 'intlExpand', 'layout', 'position', 'theme', 'tooltipExpand'],
        methods: ['setFocus']
    })
], CalciteActionPad);
export { CalciteActionPad };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteActionPad, [{
        type: Component,
        args: [{
                selector: 'calcite-action-pad',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['expand', 'expanded', 'intlCollapse', 'intlExpand', 'layout', 'position', 'theme', 'tooltipExpand'],
                outputs: ['calciteActionPadToggle']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted when expanded has been toggled.
     * @type {?}
     */
    CalciteActionPad.prototype.calciteActionPadToggle;
    /**
     * @type {?}
     * @protected
     */
    CalciteActionPad.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteActionPad.prototype.z;
}
let CalciteAlert = class CalciteAlert {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteAlertClose', 'calciteAlertOpen']);
    }
};
CalciteAlert.decorators = [
    { type: Component, args: [{
                selector: 'calcite-alert',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'autoDismiss', 'autoDismissDuration', 'color', 'icon', 'intlClose', 'label', 'scale', 'theme'],
                outputs: ['calciteAlertClose', 'calciteAlertOpen']
            },] },
];
/** @nocollapse */
CalciteAlert.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteAlert.ɵfac = function CalciteAlert_Factory(t) { return new (t || CalciteAlert)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteAlert.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteAlert, selectors: [["calcite-alert"]], inputs: { active: "active", autoDismiss: "autoDismiss", autoDismissDuration: "autoDismissDuration", color: "color", icon: "icon", intlClose: "intlClose", label: "label", scale: "scale", theme: "theme" }, outputs: { calciteAlertClose: "calciteAlertClose", calciteAlertOpen: "calciteAlertOpen" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteAlert_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteAlert = __decorate([
    ProxyCmp({
        inputs: ['active', 'autoDismiss', 'autoDismissDuration', 'color', 'icon', 'intlClose', 'label', 'scale', 'theme'],
        methods: ['setFocus']
    })
], CalciteAlert);
export { CalciteAlert };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteAlert, [{
        type: Component,
        args: [{
                selector: 'calcite-alert',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'autoDismiss', 'autoDismissDuration', 'color', 'icon', 'intlClose', 'label', 'scale', 'theme'],
                outputs: ['calciteAlertClose', 'calciteAlertOpen']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Fired when an alert is closed
     * @type {?}
     */
    CalciteAlert.prototype.calciteAlertClose;
    /**
     * Fired when an alert is opened
     * @type {?}
     */
    CalciteAlert.prototype.calciteAlertOpen;
    /**
     * @type {?}
     * @protected
     */
    CalciteAlert.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteAlert.prototype.z;
}
let CalciteAvatar = class CalciteAvatar {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteAvatar.decorators = [
    { type: Component, args: [{
                selector: 'calcite-avatar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['fullName', 'scale', 'theme', 'thumbnail', 'userId', 'username']
            },] },
];
/** @nocollapse */
CalciteAvatar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteAvatar.ɵfac = function CalciteAvatar_Factory(t) { return new (t || CalciteAvatar)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteAvatar.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteAvatar, selectors: [["calcite-avatar"]], inputs: { fullName: "fullName", scale: "scale", theme: "theme", thumbnail: "thumbnail", userId: "userId", username: "username" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteAvatar_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteAvatar = __decorate([
    ProxyCmp({
        inputs: ['fullName', 'scale', 'theme', 'thumbnail', 'userId', 'username']
    })
], CalciteAvatar);
export { CalciteAvatar };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteAvatar, [{
        type: Component,
        args: [{
                selector: 'calcite-avatar',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['fullName', 'scale', 'theme', 'thumbnail', 'userId', 'username']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteAvatar.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteAvatar.prototype.z;
}
let CalciteBlock = class CalciteBlock {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteBlockToggle']);
    }
};
CalciteBlock.decorators = [
    { type: Component, args: [{
                selector: 'calcite-block',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['collapsible', 'disabled', 'dragHandle', 'heading', 'intlCollapse', 'intlExpand', 'intlLoading', 'loading', 'open', 'summary', 'theme'],
                outputs: ['calciteBlockToggle']
            },] },
];
/** @nocollapse */
CalciteBlock.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteBlock.ɵfac = function CalciteBlock_Factory(t) { return new (t || CalciteBlock)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteBlock.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteBlock, selectors: [["calcite-block"]], inputs: { collapsible: "collapsible", disabled: "disabled", dragHandle: "dragHandle", heading: "heading", intlCollapse: "intlCollapse", intlExpand: "intlExpand", intlLoading: "intlLoading", loading: "loading", open: "open", summary: "summary", theme: "theme" }, outputs: { calciteBlockToggle: "calciteBlockToggle" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteBlock_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteBlock = __decorate([
    ProxyCmp({
        inputs: ['collapsible', 'disabled', 'dragHandle', 'heading', 'intlCollapse', 'intlExpand', 'intlLoading', 'loading', 'open', 'summary', 'theme']
    })
], CalciteBlock);
export { CalciteBlock };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteBlock, [{
        type: Component,
        args: [{
                selector: 'calcite-block',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['collapsible', 'disabled', 'dragHandle', 'heading', 'intlCollapse', 'intlExpand', 'intlLoading', 'loading', 'open', 'summary', 'theme'],
                outputs: ['calciteBlockToggle']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted when the header has been clicked.
     * @type {?}
     */
    CalciteBlock.prototype.calciteBlockToggle;
    /**
     * @type {?}
     * @protected
     */
    CalciteBlock.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteBlock.prototype.z;
}
let CalciteBlockSection = class CalciteBlockSection {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteBlockSectionToggle']);
    }
};
CalciteBlockSection.decorators = [
    { type: Component, args: [{
                selector: 'calcite-block-section',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['intlCollapse', 'intlExpand', 'open', 'text', 'toggleDisplay'],
                outputs: ['calciteBlockSectionToggle']
            },] },
];
/** @nocollapse */
CalciteBlockSection.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteBlockSection.ɵfac = function CalciteBlockSection_Factory(t) { return new (t || CalciteBlockSection)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteBlockSection.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteBlockSection, selectors: [["calcite-block-section"]], inputs: { intlCollapse: "intlCollapse", intlExpand: "intlExpand", open: "open", text: "text", toggleDisplay: "toggleDisplay" }, outputs: { calciteBlockSectionToggle: "calciteBlockSectionToggle" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteBlockSection_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteBlockSection = __decorate([
    ProxyCmp({
        inputs: ['intlCollapse', 'intlExpand', 'open', 'text', 'toggleDisplay']
    })
], CalciteBlockSection);
export { CalciteBlockSection };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteBlockSection, [{
        type: Component,
        args: [{
                selector: 'calcite-block-section',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['intlCollapse', 'intlExpand', 'open', 'text', 'toggleDisplay'],
                outputs: ['calciteBlockSectionToggle']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted when the header has been clicked.
     * @type {?}
     */
    CalciteBlockSection.prototype.calciteBlockSectionToggle;
    /**
     * @type {?}
     * @protected
     */
    CalciteBlockSection.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteBlockSection.prototype.z;
}
let CalciteButton = class CalciteButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteButton.decorators = [
    { type: Component, args: [{
                selector: 'calcite-button',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['alignment', 'appearance', 'color', 'disabled', 'href', 'iconEnd', 'iconFlipRtl', 'iconStart', 'intlLoading', 'loading', 'round', 'scale', 'splitChild', 'theme', 'width']
            },] },
];
/** @nocollapse */
CalciteButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteButton.ɵfac = function CalciteButton_Factory(t) { return new (t || CalciteButton)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteButton.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteButton, selectors: [["calcite-button"]], inputs: { alignment: "alignment", appearance: "appearance", color: "color", disabled: "disabled", href: "href", iconEnd: "iconEnd", iconFlipRtl: "iconFlipRtl", iconStart: "iconStart", intlLoading: "intlLoading", loading: "loading", round: "round", scale: "scale", splitChild: "splitChild", theme: "theme", width: "width" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteButton_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteButton = __decorate([
    ProxyCmp({
        inputs: ['alignment', 'appearance', 'color', 'disabled', 'href', 'iconEnd', 'iconFlipRtl', 'iconStart', 'intlLoading', 'loading', 'round', 'scale', 'splitChild', 'theme', 'width'],
        methods: ['setFocus']
    })
], CalciteButton);
export { CalciteButton };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteButton, [{
        type: Component,
        args: [{
                selector: 'calcite-button',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['alignment', 'appearance', 'color', 'disabled', 'href', 'iconEnd', 'iconFlipRtl', 'iconStart', 'intlLoading', 'loading', 'round', 'scale', 'splitChild', 'theme', 'width']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteButton.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteButton.prototype.z;
}
let CalciteCard = class CalciteCard {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteCardSelect']);
    }
};
CalciteCard.decorators = [
    { type: Component, args: [{
                selector: 'calcite-card',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['intlDeselect', 'intlLoading', 'intlSelect', 'loading', 'selectable', 'selected', 'theme'],
                outputs: ['calciteCardSelect']
            },] },
];
/** @nocollapse */
CalciteCard.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteCard.ɵfac = function CalciteCard_Factory(t) { return new (t || CalciteCard)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteCard.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteCard, selectors: [["calcite-card"]], inputs: { intlDeselect: "intlDeselect", intlLoading: "intlLoading", intlSelect: "intlSelect", loading: "loading", selectable: "selectable", selected: "selected", theme: "theme" }, outputs: { calciteCardSelect: "calciteCardSelect" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteCard_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteCard = __decorate([
    ProxyCmp({
        inputs: ['intlDeselect', 'intlLoading', 'intlSelect', 'loading', 'selectable', 'selected', 'theme']
    })
], CalciteCard);
export { CalciteCard };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteCard, [{
        type: Component,
        args: [{
                selector: 'calcite-card',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['intlDeselect', 'intlLoading', 'intlSelect', 'loading', 'selectable', 'selected', 'theme'],
                outputs: ['calciteCardSelect']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Fired when a selectable card is selected
     * @type {?}
     */
    CalciteCard.prototype.calciteCardSelect;
    /**
     * @type {?}
     * @protected
     */
    CalciteCard.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteCard.prototype.z;
}
let CalciteCheckbox = class CalciteCheckbox {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteCheckboxChange', 'calciteCheckboxFocusedChange']);
    }
};
CalciteCheckbox.decorators = [
    { type: Component, args: [{
                selector: 'calcite-checkbox',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['checked', 'disabled', 'focused', 'guid', 'hovered', 'indeterminate', 'name', 'scale', 'theme', 'value'],
                outputs: ['calciteCheckboxChange', 'calciteCheckboxFocusedChange']
            },] },
];
/** @nocollapse */
CalciteCheckbox.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteCheckbox.ɵfac = function CalciteCheckbox_Factory(t) { return new (t || CalciteCheckbox)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteCheckbox.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteCheckbox, selectors: [["calcite-checkbox"]], inputs: { checked: "checked", disabled: "disabled", focused: "focused", guid: "guid", hovered: "hovered", indeterminate: "indeterminate", name: "name", scale: "scale", theme: "theme", value: "value" }, outputs: { calciteCheckboxChange: "calciteCheckboxChange", calciteCheckboxFocusedChange: "calciteCheckboxFocusedChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteCheckbox_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteCheckbox = __decorate([
    ProxyCmp({
        inputs: ['checked', 'disabled', 'focused', 'guid', 'hovered', 'indeterminate', 'name', 'scale', 'theme', 'value']
    })
], CalciteCheckbox);
export { CalciteCheckbox };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteCheckbox, [{
        type: Component,
        args: [{
                selector: 'calcite-checkbox',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['checked', 'disabled', 'focused', 'guid', 'hovered', 'indeterminate', 'name', 'scale', 'theme', 'value'],
                outputs: ['calciteCheckboxChange', 'calciteCheckboxFocusedChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted when the checkbox checked status changes
     * @type {?}
     */
    CalciteCheckbox.prototype.calciteCheckboxChange;
    /**
     * Emitted when the checkbox focused state changes
     * @type {?}
     */
    CalciteCheckbox.prototype.calciteCheckboxFocusedChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteCheckbox.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteCheckbox.prototype.z;
}
let CalciteChip = class CalciteChip {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteChipDismiss']);
    }
};
CalciteChip.decorators = [
    { type: Component, args: [{
                selector: 'calcite-chip',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['appearance', 'color', 'dismissible', 'icon', 'iconFlipRtl', 'scale', 'theme', 'value'],
                outputs: ['calciteChipDismiss']
            },] },
];
/** @nocollapse */
CalciteChip.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteChip.ɵfac = function CalciteChip_Factory(t) { return new (t || CalciteChip)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteChip.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteChip, selectors: [["calcite-chip"]], inputs: { appearance: "appearance", color: "color", dismissible: "dismissible", icon: "icon", iconFlipRtl: "iconFlipRtl", scale: "scale", theme: "theme", value: "value" }, outputs: { calciteChipDismiss: "calciteChipDismiss" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteChip_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteChip = __decorate([
    ProxyCmp({
        inputs: ['appearance', 'color', 'dismissible', 'icon', 'iconFlipRtl', 'scale', 'theme', 'value']
    })
], CalciteChip);
export { CalciteChip };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteChip, [{
        type: Component,
        args: [{
                selector: 'calcite-chip',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['appearance', 'color', 'dismissible', 'icon', 'iconFlipRtl', 'scale', 'theme', 'value'],
                outputs: ['calciteChipDismiss']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted when the dismiss button is clicked
     * @type {?}
     */
    CalciteChip.prototype.calciteChipDismiss;
    /**
     * @type {?}
     * @protected
     */
    CalciteChip.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteChip.prototype.z;
}
let CalciteColor = class CalciteColor {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteColorChange']);
    }
};
CalciteColor.decorators = [
    { type: Component, args: [{
                selector: 'calcite-color',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['appearance', 'hideChannels', 'hideHex', 'hideSaved', 'intlB', 'intlBlue', 'intlDeleteColor', 'intlG', 'intlGreen', 'intlH', 'intlHex', 'intlHsv', 'intlHue', 'intlR', 'intlRed', 'intlRgb', 'intlS', 'intlSaturation', 'intlSaveColor', 'intlSaved', 'intlV', 'intlValue', 'scale', 'storageId', 'theme', 'value'],
                outputs: ['calciteColorChange']
            },] },
];
/** @nocollapse */
CalciteColor.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteColor.ɵfac = function CalciteColor_Factory(t) { return new (t || CalciteColor)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteColor.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteColor, selectors: [["calcite-color"]], inputs: { appearance: "appearance", hideChannels: "hideChannels", hideHex: "hideHex", hideSaved: "hideSaved", intlB: "intlB", intlBlue: "intlBlue", intlDeleteColor: "intlDeleteColor", intlG: "intlG", intlGreen: "intlGreen", intlH: "intlH", intlHex: "intlHex", intlHsv: "intlHsv", intlHue: "intlHue", intlR: "intlR", intlRed: "intlRed", intlRgb: "intlRgb", intlS: "intlS", intlSaturation: "intlSaturation", intlSaveColor: "intlSaveColor", intlSaved: "intlSaved", intlV: "intlV", intlValue: "intlValue", scale: "scale", storageId: "storageId", theme: "theme", value: "value" }, outputs: { calciteColorChange: "calciteColorChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteColor_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteColor = __decorate([
    ProxyCmp({
        inputs: ['appearance', 'hideChannels', 'hideHex', 'hideSaved', 'intlB', 'intlBlue', 'intlDeleteColor', 'intlG', 'intlGreen', 'intlH', 'intlHex', 'intlHsv', 'intlHue', 'intlR', 'intlRed', 'intlRgb', 'intlS', 'intlSaturation', 'intlSaveColor', 'intlSaved', 'intlV', 'intlValue', 'scale', 'storageId', 'theme', 'value'],
        methods: ['setFocus']
    })
], CalciteColor);
export { CalciteColor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteColor, [{
        type: Component,
        args: [{
                selector: 'calcite-color',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['appearance', 'hideChannels', 'hideHex', 'hideSaved', 'intlB', 'intlBlue', 'intlDeleteColor', 'intlG', 'intlGreen', 'intlH', 'intlHex', 'intlHsv', 'intlHue', 'intlR', 'intlRed', 'intlRgb', 'intlS', 'intlSaturation', 'intlSaveColor', 'intlSaved', 'intlV', 'intlValue', 'scale', 'storageId', 'theme', 'value'],
                outputs: ['calciteColorChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteColor.prototype.calciteColorChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteColor.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteColor.prototype.z;
}
let CalciteColorHexInput = class CalciteColorHexInput {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteColorHexInputChange']);
    }
};
CalciteColorHexInput.decorators = [
    { type: Component, args: [{
                selector: 'calcite-color-hex-input',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['intlHex', 'scale', 'theme', 'value'],
                outputs: ['calciteColorHexInputChange']
            },] },
];
/** @nocollapse */
CalciteColorHexInput.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteColorHexInput.ɵfac = function CalciteColorHexInput_Factory(t) { return new (t || CalciteColorHexInput)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteColorHexInput.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteColorHexInput, selectors: [["calcite-color-hex-input"]], inputs: { intlHex: "intlHex", scale: "scale", theme: "theme", value: "value" }, outputs: { calciteColorHexInputChange: "calciteColorHexInputChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteColorHexInput_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteColorHexInput = __decorate([
    ProxyCmp({
        inputs: ['intlHex', 'scale', 'theme', 'value'],
        methods: ['setFocus']
    })
], CalciteColorHexInput);
export { CalciteColorHexInput };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteColorHexInput, [{
        type: Component,
        args: [{
                selector: 'calcite-color-hex-input',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['intlHex', 'scale', 'theme', 'value'],
                outputs: ['calciteColorHexInputChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted when the hex value changes.
     * @type {?}
     */
    CalciteColorHexInput.prototype.calciteColorHexInputChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteColorHexInput.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteColorHexInput.prototype.z;
}
let CalciteColorSwatch = class CalciteColorSwatch {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteColorSwatch.decorators = [
    { type: Component, args: [{
                selector: 'calcite-color-swatch',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'color', 'scale', 'theme']
            },] },
];
/** @nocollapse */
CalciteColorSwatch.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteColorSwatch.ɵfac = function CalciteColorSwatch_Factory(t) { return new (t || CalciteColorSwatch)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteColorSwatch.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteColorSwatch, selectors: [["calcite-color-swatch"]], inputs: { active: "active", color: "color", scale: "scale", theme: "theme" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteColorSwatch_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteColorSwatch = __decorate([
    ProxyCmp({
        inputs: ['active', 'color', 'scale', 'theme']
    })
], CalciteColorSwatch);
export { CalciteColorSwatch };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteColorSwatch, [{
        type: Component,
        args: [{
                selector: 'calcite-color-swatch',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'color', 'scale', 'theme']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteColorSwatch.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteColorSwatch.prototype.z;
}
let CalciteCombobox = class CalciteCombobox {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteLookupChange', 'calciteComboboxChipDismiss']);
    }
};
CalciteCombobox.decorators = [
    { type: Component, args: [{
                selector: 'calcite-combobox',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'disabled', 'label', 'placeholder', 'scale', 'theme'],
                outputs: ['calciteLookupChange', 'calciteComboboxChipDismiss']
            },] },
];
/** @nocollapse */
CalciteCombobox.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteCombobox.ɵfac = function CalciteCombobox_Factory(t) { return new (t || CalciteCombobox)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteCombobox.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteCombobox, selectors: [["calcite-combobox"]], inputs: { active: "active", disabled: "disabled", label: "label", placeholder: "placeholder", scale: "scale", theme: "theme" }, outputs: { calciteLookupChange: "calciteLookupChange", calciteComboboxChipDismiss: "calciteComboboxChipDismiss" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteCombobox_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteCombobox = __decorate([
    ProxyCmp({
        inputs: ['active', 'disabled', 'label', 'placeholder', 'scale', 'theme'],
        methods: ['reposition']
    })
], CalciteCombobox);
export { CalciteCombobox };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteCombobox, [{
        type: Component,
        args: [{
                selector: 'calcite-combobox',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'disabled', 'label', 'placeholder', 'scale', 'theme'],
                outputs: ['calciteLookupChange', 'calciteComboboxChipDismiss']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteCombobox.prototype.calciteLookupChange;
    /**
     *
     * @type {?}
     */
    CalciteCombobox.prototype.calciteComboboxChipDismiss;
    /**
     * @type {?}
     * @protected
     */
    CalciteCombobox.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteCombobox.prototype.z;
}
let CalciteComboboxItem = class CalciteComboboxItem {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteComboboxItemChange', 'calciteComboboxItemKeyEvent']);
    }
};
CalciteComboboxItem.decorators = [
    { type: Component, args: [{
                selector: 'calcite-combobox-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'parentItem', 'selected', 'textLabel', 'value'],
                outputs: ['calciteComboboxItemChange', 'calciteComboboxItemKeyEvent']
            },] },
];
/** @nocollapse */
CalciteComboboxItem.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteComboboxItem.ɵfac = function CalciteComboboxItem_Factory(t) { return new (t || CalciteComboboxItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteComboboxItem.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteComboboxItem, selectors: [["calcite-combobox-item"]], inputs: { disabled: "disabled", parentItem: "parentItem", selected: "selected", textLabel: "textLabel", value: "value" }, outputs: { calciteComboboxItemChange: "calciteComboboxItemChange", calciteComboboxItemKeyEvent: "calciteComboboxItemKeyEvent" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteComboboxItem_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteComboboxItem = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'parentItem', 'selected', 'textLabel', 'value'],
        methods: ['toggleSelected']
    })
], CalciteComboboxItem);
export { CalciteComboboxItem };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteComboboxItem, [{
        type: Component,
        args: [{
                selector: 'calcite-combobox-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'parentItem', 'selected', 'textLabel', 'value'],
                outputs: ['calciteComboboxItemChange', 'calciteComboboxItemKeyEvent']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted whenever the item is selected or unselected. \@event calciteComboboxItemChange
     * @type {?}
     */
    CalciteComboboxItem.prototype.calciteComboboxItemChange;
    /**
     *
     * @type {?}
     */
    CalciteComboboxItem.prototype.calciteComboboxItemKeyEvent;
    /**
     * @type {?}
     * @protected
     */
    CalciteComboboxItem.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteComboboxItem.prototype.z;
}
let CalciteDate = class CalciteDate {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteDateChange']);
    }
};
CalciteDate.decorators = [
    { type: Component, args: [{
                selector: 'calcite-date',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'intlNextMonth', 'intlPrevMonth', 'locale', 'max', 'min', 'noCalendarInput', 'scale', 'value', 'valueAsDate'],
                outputs: ['calciteDateChange']
            },] },
];
/** @nocollapse */
CalciteDate.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteDate.ɵfac = function CalciteDate_Factory(t) { return new (t || CalciteDate)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteDate.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteDate, selectors: [["calcite-date"]], inputs: { active: "active", intlNextMonth: "intlNextMonth", intlPrevMonth: "intlPrevMonth", locale: "locale", max: "max", min: "min", noCalendarInput: "noCalendarInput", scale: "scale", value: "value", valueAsDate: "valueAsDate" }, outputs: { calciteDateChange: "calciteDateChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteDate_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteDate = __decorate([
    ProxyCmp({
        inputs: ['active', 'intlNextMonth', 'intlPrevMonth', 'locale', 'max', 'min', 'noCalendarInput', 'scale', 'value', 'valueAsDate'],
        methods: ['reposition']
    })
], CalciteDate);
export { CalciteDate };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteDate, [{
        type: Component,
        args: [{
                selector: 'calcite-date',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'intlNextMonth', 'intlPrevMonth', 'locale', 'max', 'min', 'noCalendarInput', 'scale', 'value', 'valueAsDate'],
                outputs: ['calciteDateChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Trigger calcite date change when a user changes the date.
     * @type {?}
     */
    CalciteDate.prototype.calciteDateChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteDate.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteDate.prototype.z;
}
let CalciteDateDay = class CalciteDateDay {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteDaySelect']);
    }
};
CalciteDateDay.decorators = [
    { type: Component, args: [{
                selector: 'calcite-date-day',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'currentMonth', 'day', 'disabled', 'scale', 'selected'],
                outputs: ['calciteDaySelect']
            },] },
];
/** @nocollapse */
CalciteDateDay.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteDateDay.ɵfac = function CalciteDateDay_Factory(t) { return new (t || CalciteDateDay)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteDateDay.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteDateDay, selectors: [["calcite-date-day"]], inputs: { active: "active", currentMonth: "currentMonth", day: "day", disabled: "disabled", scale: "scale", selected: "selected" }, outputs: { calciteDaySelect: "calciteDaySelect" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteDateDay_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteDateDay = __decorate([
    ProxyCmp({
        inputs: ['active', 'currentMonth', 'day', 'disabled', 'scale', 'selected']
    })
], CalciteDateDay);
export { CalciteDateDay };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteDateDay, [{
        type: Component,
        args: [{
                selector: 'calcite-date-day',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'currentMonth', 'day', 'disabled', 'scale', 'selected'],
                outputs: ['calciteDaySelect']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted when user selects day
     * @type {?}
     */
    CalciteDateDay.prototype.calciteDaySelect;
    /**
     * @type {?}
     * @protected
     */
    CalciteDateDay.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteDateDay.prototype.z;
}
let CalciteDateMonth = class CalciteDateMonth {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteDateSelect', 'calciteActiveDateChange']);
    }
};
CalciteDateMonth.decorators = [
    { type: Component, args: [{
                selector: 'calcite-date-month',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['activeDate', 'max', 'min', 'scale', 'selectedDate'],
                outputs: ['calciteDateSelect', 'calciteActiveDateChange']
            },] },
];
/** @nocollapse */
CalciteDateMonth.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteDateMonth.ɵfac = function CalciteDateMonth_Factory(t) { return new (t || CalciteDateMonth)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteDateMonth.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteDateMonth, selectors: [["calcite-date-month"]], inputs: { activeDate: "activeDate", max: "max", min: "min", scale: "scale", selectedDate: "selectedDate" }, outputs: { calciteDateSelect: "calciteDateSelect", calciteActiveDateChange: "calciteActiveDateChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteDateMonth_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteDateMonth = __decorate([
    ProxyCmp({
        inputs: ['activeDate', 'max', 'min', 'scale', 'selectedDate']
    })
], CalciteDateMonth);
export { CalciteDateMonth };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteDateMonth, [{
        type: Component,
        args: [{
                selector: 'calcite-date-month',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['activeDate', 'max', 'min', 'scale', 'selectedDate'],
                outputs: ['calciteDateSelect', 'calciteActiveDateChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Event emitted when user selects the date.
     * @type {?}
     */
    CalciteDateMonth.prototype.calciteDateSelect;
    /**
     * Active date for the user keyboard access.
     * @type {?}
     */
    CalciteDateMonth.prototype.calciteActiveDateChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteDateMonth.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteDateMonth.prototype.z;
}
let CalciteDateMonthHeader = class CalciteDateMonthHeader {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteDateSelect']);
    }
};
CalciteDateMonthHeader.decorators = [
    { type: Component, args: [{
                selector: 'calcite-date-month-header',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['activeDate', 'intlNextMonth', 'intlPrevMonth', 'locale', 'localeData', 'max', 'min', 'scale', 'selectedDate'],
                outputs: ['calciteDateSelect']
            },] },
];
/** @nocollapse */
CalciteDateMonthHeader.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteDateMonthHeader.ɵfac = function CalciteDateMonthHeader_Factory(t) { return new (t || CalciteDateMonthHeader)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteDateMonthHeader.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteDateMonthHeader, selectors: [["calcite-date-month-header"]], inputs: { activeDate: "activeDate", intlNextMonth: "intlNextMonth", intlPrevMonth: "intlPrevMonth", locale: "locale", localeData: "localeData", max: "max", min: "min", scale: "scale", selectedDate: "selectedDate" }, outputs: { calciteDateSelect: "calciteDateSelect" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteDateMonthHeader_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteDateMonthHeader = __decorate([
    ProxyCmp({
        inputs: ['activeDate', 'intlNextMonth', 'intlPrevMonth', 'locale', 'localeData', 'max', 'min', 'scale', 'selectedDate']
    })
], CalciteDateMonthHeader);
export { CalciteDateMonthHeader };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteDateMonthHeader, [{
        type: Component,
        args: [{
                selector: 'calcite-date-month-header',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['activeDate', 'intlNextMonth', 'intlPrevMonth', 'locale', 'localeData', 'max', 'min', 'scale', 'selectedDate'],
                outputs: ['calciteDateSelect']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Changes to active date
     * @type {?}
     */
    CalciteDateMonthHeader.prototype.calciteDateSelect;
    /**
     * @type {?}
     * @protected
     */
    CalciteDateMonthHeader.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteDateMonthHeader.prototype.z;
}
let CalciteDropdown = class CalciteDropdown {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteDropdownSelect', 'calciteDropdownOpen', 'calciteDropdownClose']);
    }
};
CalciteDropdown.decorators = [
    { type: Component, args: [{
                selector: 'calcite-dropdown',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'alignment', 'disableCloseOnSelect', 'disabled', 'maxItems', 'scale', 'selectedItems', 'theme', 'type', 'width'],
                outputs: ['calciteDropdownSelect', 'calciteDropdownOpen', 'calciteDropdownClose']
            },] },
];
/** @nocollapse */
CalciteDropdown.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteDropdown.ɵfac = function CalciteDropdown_Factory(t) { return new (t || CalciteDropdown)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteDropdown.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteDropdown, selectors: [["calcite-dropdown"]], inputs: { active: "active", alignment: "alignment", disableCloseOnSelect: "disableCloseOnSelect", disabled: "disabled", maxItems: "maxItems", scale: "scale", selectedItems: "selectedItems", theme: "theme", type: "type", width: "width" }, outputs: { calciteDropdownSelect: "calciteDropdownSelect", calciteDropdownOpen: "calciteDropdownOpen", calciteDropdownClose: "calciteDropdownClose" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteDropdown_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteDropdown = __decorate([
    ProxyCmp({
        inputs: ['active', 'alignment', 'disableCloseOnSelect', 'disabled', 'maxItems', 'scale', 'selectedItems', 'theme', 'type', 'width'],
        methods: ['reposition']
    })
], CalciteDropdown);
export { CalciteDropdown };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteDropdown, [{
        type: Component,
        args: [{
                selector: 'calcite-dropdown',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'alignment', 'disableCloseOnSelect', 'disabled', 'maxItems', 'scale', 'selectedItems', 'theme', 'type', 'width'],
                outputs: ['calciteDropdownSelect', 'calciteDropdownOpen', 'calciteDropdownClose']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * fires when a dropdown item has been selected or deselected *
     * @type {?}
     */
    CalciteDropdown.prototype.calciteDropdownSelect;
    /**
     * fires when a dropdown has been opened *
     * @type {?}
     */
    CalciteDropdown.prototype.calciteDropdownOpen;
    /**
     * fires when a dropdown has been closed *
     * @type {?}
     */
    CalciteDropdown.prototype.calciteDropdownClose;
    /**
     * @type {?}
     * @protected
     */
    CalciteDropdown.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteDropdown.prototype.z;
}
let CalciteDropdownGroup = class CalciteDropdownGroup {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteDropdownGroupRegister', 'calciteDropdownItemChange']);
    }
};
CalciteDropdownGroup.decorators = [
    { type: Component, args: [{
                selector: 'calcite-dropdown-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['groupTitle', 'selectionMode'],
                outputs: ['calciteDropdownGroupRegister', 'calciteDropdownItemChange']
            },] },
];
/** @nocollapse */
CalciteDropdownGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteDropdownGroup.ɵfac = function CalciteDropdownGroup_Factory(t) { return new (t || CalciteDropdownGroup)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteDropdownGroup.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteDropdownGroup, selectors: [["calcite-dropdown-group"]], inputs: { groupTitle: "groupTitle", selectionMode: "selectionMode" }, outputs: { calciteDropdownGroupRegister: "calciteDropdownGroupRegister", calciteDropdownItemChange: "calciteDropdownItemChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteDropdownGroup_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteDropdownGroup = __decorate([
    ProxyCmp({
        inputs: ['groupTitle', 'selectionMode']
    })
], CalciteDropdownGroup);
export { CalciteDropdownGroup };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteDropdownGroup, [{
        type: Component,
        args: [{
                selector: 'calcite-dropdown-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['groupTitle', 'selectionMode'],
                outputs: ['calciteDropdownGroupRegister', 'calciteDropdownItemChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteDropdownGroup.prototype.calciteDropdownGroupRegister;
    /**
     *
     * @type {?}
     */
    CalciteDropdownGroup.prototype.calciteDropdownItemChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteDropdownGroup.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteDropdownGroup.prototype.z;
}
let CalciteDropdownItem = class CalciteDropdownItem {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteDropdownItemSelect']);
    }
};
CalciteDropdownItem.decorators = [
    { type: Component, args: [{
                selector: 'calcite-dropdown-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'href', 'iconEnd', 'iconFlipRtl', 'iconStart'],
                outputs: ['calciteDropdownItemSelect']
            },] },
];
/** @nocollapse */
CalciteDropdownItem.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteDropdownItem.ɵfac = function CalciteDropdownItem_Factory(t) { return new (t || CalciteDropdownItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteDropdownItem.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteDropdownItem, selectors: [["calcite-dropdown-item"]], inputs: { active: "active", href: "href", iconEnd: "iconEnd", iconFlipRtl: "iconFlipRtl", iconStart: "iconStart" }, outputs: { calciteDropdownItemSelect: "calciteDropdownItemSelect" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteDropdownItem_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteDropdownItem = __decorate([
    ProxyCmp({
        inputs: ['active', 'href', 'iconEnd', 'iconFlipRtl', 'iconStart'],
        methods: ['setFocus']
    })
], CalciteDropdownItem);
export { CalciteDropdownItem };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteDropdownItem, [{
        type: Component,
        args: [{
                selector: 'calcite-dropdown-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'href', 'iconEnd', 'iconFlipRtl', 'iconStart'],
                outputs: ['calciteDropdownItemSelect']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteDropdownItem.prototype.calciteDropdownItemSelect;
    /**
     * @type {?}
     * @protected
     */
    CalciteDropdownItem.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteDropdownItem.prototype.z;
}
let CalciteFab = class CalciteFab {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteFab.decorators = [
    { type: Component, args: [{
                selector: 'calcite-fab',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['appearance', 'color', 'disabled', 'icon', 'label', 'loading', 'scale', 'text', 'textEnabled', 'theme']
            },] },
];
/** @nocollapse */
CalciteFab.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteFab.ɵfac = function CalciteFab_Factory(t) { return new (t || CalciteFab)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteFab.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteFab, selectors: [["calcite-fab"]], inputs: { appearance: "appearance", color: "color", disabled: "disabled", icon: "icon", label: "label", loading: "loading", scale: "scale", text: "text", textEnabled: "textEnabled", theme: "theme" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteFab_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteFab = __decorate([
    ProxyCmp({
        inputs: ['appearance', 'color', 'disabled', 'icon', 'label', 'loading', 'scale', 'text', 'textEnabled', 'theme'],
        methods: ['setFocus']
    })
], CalciteFab);
export { CalciteFab };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteFab, [{
        type: Component,
        args: [{
                selector: 'calcite-fab',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['appearance', 'color', 'disabled', 'icon', 'label', 'loading', 'scale', 'text', 'textEnabled', 'theme']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteFab.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteFab.prototype.z;
}
let CalciteFilter = class CalciteFilter {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteFilterChange']);
    }
};
CalciteFilter.decorators = [
    { type: Component, args: [{
                selector: 'calcite-filter',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['data', 'intlClear', 'intlLabel', 'placeholder'],
                outputs: ['calciteFilterChange']
            },] },
];
/** @nocollapse */
CalciteFilter.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteFilter.ɵfac = function CalciteFilter_Factory(t) { return new (t || CalciteFilter)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteFilter.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteFilter, selectors: [["calcite-filter"]], inputs: { data: "data", intlClear: "intlClear", intlLabel: "intlLabel", placeholder: "placeholder" }, outputs: { calciteFilterChange: "calciteFilterChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteFilter_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteFilter = __decorate([
    ProxyCmp({
        inputs: ['data', 'intlClear', 'intlLabel', 'placeholder']
    })
], CalciteFilter);
export { CalciteFilter };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteFilter, [{
        type: Component,
        args: [{
                selector: 'calcite-filter',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['data', 'intlClear', 'intlLabel', 'placeholder'],
                outputs: ['calciteFilterChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteFilter.prototype.calciteFilterChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteFilter.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteFilter.prototype.z;
}
let CalciteFlow = class CalciteFlow {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteFlow.decorators = [
    { type: Component, args: [{
                selector: 'calcite-flow',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['theme']
            },] },
];
/** @nocollapse */
CalciteFlow.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteFlow.ɵfac = function CalciteFlow_Factory(t) { return new (t || CalciteFlow)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteFlow.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteFlow, selectors: [["calcite-flow"]], inputs: { theme: "theme" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteFlow_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteFlow = __decorate([
    ProxyCmp({
        inputs: ['theme'],
        methods: ['back']
    })
], CalciteFlow);
export { CalciteFlow };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteFlow, [{
        type: Component,
        args: [{
                selector: 'calcite-flow',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['theme']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteFlow.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteFlow.prototype.z;
}
let CalciteGraph = class CalciteGraph {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteGraph.decorators = [
    { type: Component, args: [{
                selector: 'calcite-graph',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['data', 'height', 'highlightMax', 'highlightMin', 'width']
            },] },
];
/** @nocollapse */
CalciteGraph.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteGraph.ɵfac = function CalciteGraph_Factory(t) { return new (t || CalciteGraph)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteGraph.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteGraph, selectors: [["calcite-graph"]], inputs: { data: "data", height: "height", highlightMax: "highlightMax", highlightMin: "highlightMin", width: "width" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteGraph_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteGraph = __decorate([
    ProxyCmp({
        inputs: ['data', 'height', 'highlightMax', 'highlightMin', 'width']
    })
], CalciteGraph);
export { CalciteGraph };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteGraph, [{
        type: Component,
        args: [{
                selector: 'calcite-graph',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['data', 'height', 'highlightMax', 'highlightMin', 'width']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteGraph.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteGraph.prototype.z;
}
let CalciteHandle = class CalciteHandle {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteHandleNudge']);
    }
};
CalciteHandle.decorators = [
    { type: Component, args: [{
                selector: 'calcite-handle',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['textTitle'],
                outputs: ['calciteHandleNudge']
            },] },
];
/** @nocollapse */
CalciteHandle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteHandle.ɵfac = function CalciteHandle_Factory(t) { return new (t || CalciteHandle)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteHandle.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteHandle, selectors: [["calcite-handle"]], inputs: { textTitle: "textTitle" }, outputs: { calciteHandleNudge: "calciteHandleNudge" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteHandle_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteHandle = __decorate([
    ProxyCmp({
        inputs: ['textTitle'],
        methods: ['setFocus']
    })
], CalciteHandle);
export { CalciteHandle };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteHandle, [{
        type: Component,
        args: [{
                selector: 'calcite-handle',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['textTitle'],
                outputs: ['calciteHandleNudge']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emmitted when the the handle is activated and the up or down arrow key is pressed. \@event calciteHandleNudge
     * @type {?}
     */
    CalciteHandle.prototype.calciteHandleNudge;
    /**
     * @type {?}
     * @protected
     */
    CalciteHandle.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteHandle.prototype.z;
}
let CalciteIcon = class CalciteIcon {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteIcon.decorators = [
    { type: Component, args: [{
                selector: 'calcite-icon',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['flipRtl', 'icon', 'scale', 'textLabel', 'theme']
            },] },
];
/** @nocollapse */
CalciteIcon.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteIcon.ɵfac = function CalciteIcon_Factory(t) { return new (t || CalciteIcon)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteIcon.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteIcon, selectors: [["calcite-icon"]], inputs: { flipRtl: "flipRtl", icon: "icon", scale: "scale", textLabel: "textLabel", theme: "theme" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteIcon_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteIcon = __decorate([
    ProxyCmp({
        inputs: ['flipRtl', 'icon', 'scale', 'textLabel', 'theme']
    })
], CalciteIcon);
export { CalciteIcon };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteIcon, [{
        type: Component,
        args: [{
                selector: 'calcite-icon',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['flipRtl', 'icon', 'scale', 'textLabel', 'theme']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteIcon.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteIcon.prototype.z;
}
let CalciteInlineEditable = class CalciteInlineEditable {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteInlineEditableEditingCancel', 'calciteInlineEditableChangesConfirm', 'calciteInlineEditableEnableEditingChange']);
    }
};
CalciteInlineEditable.decorators = [
    { type: Component, args: [{
                selector: 'calcite-inline-editable',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['afterConfirm', 'controls', 'disabled', 'editingEnabled', 'intlCancelEditing', 'intlConfirmChanges', 'intlEnableEditing', 'loading', 'scale', 'theme'],
                outputs: ['calciteInlineEditableEditingCancel', 'calciteInlineEditableChangesConfirm', 'calciteInlineEditableEnableEditingChange']
            },] },
];
/** @nocollapse */
CalciteInlineEditable.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteInlineEditable.ɵfac = function CalciteInlineEditable_Factory(t) { return new (t || CalciteInlineEditable)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteInlineEditable.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteInlineEditable, selectors: [["calcite-inline-editable"]], inputs: { afterConfirm: "afterConfirm", controls: "controls", disabled: "disabled", editingEnabled: "editingEnabled", intlCancelEditing: "intlCancelEditing", intlConfirmChanges: "intlConfirmChanges", intlEnableEditing: "intlEnableEditing", loading: "loading", scale: "scale", theme: "theme" }, outputs: { calciteInlineEditableEditingCancel: "calciteInlineEditableEditingCancel", calciteInlineEditableChangesConfirm: "calciteInlineEditableChangesConfirm", calciteInlineEditableEnableEditingChange: "calciteInlineEditableEnableEditingChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteInlineEditable_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteInlineEditable = __decorate([
    ProxyCmp({
        inputs: ['afterConfirm', 'controls', 'disabled', 'editingEnabled', 'intlCancelEditing', 'intlConfirmChanges', 'intlEnableEditing', 'loading', 'scale', 'theme']
    })
], CalciteInlineEditable);
export { CalciteInlineEditable };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteInlineEditable, [{
        type: Component,
        args: [{
                selector: 'calcite-inline-editable',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['afterConfirm', 'controls', 'disabled', 'editingEnabled', 'intlCancelEditing', 'intlConfirmChanges', 'intlEnableEditing', 'loading', 'scale', 'theme'],
                outputs: ['calciteInlineEditableEditingCancel', 'calciteInlineEditableChangesConfirm', 'calciteInlineEditableEnableEditingChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteInlineEditable.prototype.calciteInlineEditableEditingCancel;
    /**
     *
     * @type {?}
     */
    CalciteInlineEditable.prototype.calciteInlineEditableChangesConfirm;
    /**
     *
     * @type {?}
     */
    CalciteInlineEditable.prototype.calciteInlineEditableEnableEditingChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteInlineEditable.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteInlineEditable.prototype.z;
}
let CalciteInput = class CalciteInput {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteInputFocus', 'calciteInputBlur', 'calciteInputInput']);
    }
};
CalciteInput.decorators = [
    { type: Component, args: [{
                selector: 'calcite-input',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['alignment', 'autofocus', 'clearable', 'disabled', 'icon', 'iconFlipRtl', 'loading', 'max', 'min', 'numberButtonType', 'placeholder', 'prefixText', 'required', 'scale', 'status', 'step', 'suffixText', 'theme', 'type', 'value'],
                outputs: ['calciteInputFocus', 'calciteInputBlur', 'calciteInputInput']
            },] },
];
/** @nocollapse */
CalciteInput.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteInput.ɵfac = function CalciteInput_Factory(t) { return new (t || CalciteInput)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteInput.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteInput, selectors: [["calcite-input"]], inputs: { alignment: "alignment", autofocus: "autofocus", clearable: "clearable", disabled: "disabled", icon: "icon", iconFlipRtl: "iconFlipRtl", loading: "loading", max: "max", min: "min", numberButtonType: "numberButtonType", placeholder: "placeholder", prefixText: "prefixText", required: "required", scale: "scale", status: "status", step: "step", suffixText: "suffixText", theme: "theme", type: "type", value: "value" }, outputs: { calciteInputFocus: "calciteInputFocus", calciteInputBlur: "calciteInputBlur", calciteInputInput: "calciteInputInput" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteInput_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteInput = __decorate([
    ProxyCmp({
        inputs: ['alignment', 'autofocus', 'clearable', 'disabled', 'icon', 'iconFlipRtl', 'loading', 'max', 'min', 'numberButtonType', 'placeholder', 'prefixText', 'required', 'scale', 'status', 'step', 'suffixText', 'theme', 'type', 'value'],
        methods: ['setFocus']
    })
], CalciteInput);
export { CalciteInput };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteInput, [{
        type: Component,
        args: [{
                selector: 'calcite-input',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['alignment', 'autofocus', 'clearable', 'disabled', 'icon', 'iconFlipRtl', 'loading', 'max', 'min', 'numberButtonType', 'placeholder', 'prefixText', 'required', 'scale', 'status', 'step', 'suffixText', 'theme', 'type', 'value'],
                outputs: ['calciteInputFocus', 'calciteInputBlur', 'calciteInputInput']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteInput.prototype.calciteInputFocus;
    /**
     *
     * @type {?}
     */
    CalciteInput.prototype.calciteInputBlur;
    /**
     *
     * @type {?}
     */
    CalciteInput.prototype.calciteInputInput;
    /**
     * @type {?}
     * @protected
     */
    CalciteInput.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteInput.prototype.z;
}
let CalciteInputMessage = class CalciteInputMessage {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteInputMessage.decorators = [
    { type: Component, args: [{
                selector: 'calcite-input-message',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'icon', 'scale', 'status', 'theme', 'type']
            },] },
];
/** @nocollapse */
CalciteInputMessage.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteInputMessage.ɵfac = function CalciteInputMessage_Factory(t) { return new (t || CalciteInputMessage)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteInputMessage.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteInputMessage, selectors: [["calcite-input-message"]], inputs: { active: "active", icon: "icon", scale: "scale", status: "status", theme: "theme", type: "type" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteInputMessage_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteInputMessage = __decorate([
    ProxyCmp({
        inputs: ['active', 'icon', 'scale', 'status', 'theme', 'type']
    })
], CalciteInputMessage);
export { CalciteInputMessage };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteInputMessage, [{
        type: Component,
        args: [{
                selector: 'calcite-input-message',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'icon', 'scale', 'status', 'theme', 'type']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteInputMessage.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteInputMessage.prototype.z;
}
let CalciteLabel = class CalciteLabel {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteLabelFocus']);
    }
};
CalciteLabel.decorators = [
    { type: Component, args: [{
                selector: 'calcite-label',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disableSpacing', 'disabled', 'for', 'layout', 'scale', 'status', 'theme'],
                outputs: ['calciteLabelFocus']
            },] },
];
/** @nocollapse */
CalciteLabel.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteLabel.ɵfac = function CalciteLabel_Factory(t) { return new (t || CalciteLabel)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteLabel.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteLabel, selectors: [["calcite-label"]], inputs: { disableSpacing: "disableSpacing", disabled: "disabled", for: "for", layout: "layout", scale: "scale", status: "status", theme: "theme" }, outputs: { calciteLabelFocus: "calciteLabelFocus" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteLabel_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteLabel = __decorate([
    ProxyCmp({
        inputs: ['disableSpacing', 'disabled', 'for', 'layout', 'scale', 'status', 'theme']
    })
], CalciteLabel);
export { CalciteLabel };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteLabel, [{
        type: Component,
        args: [{
                selector: 'calcite-label',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disableSpacing', 'disabled', 'for', 'layout', 'scale', 'status', 'theme'],
                outputs: ['calciteLabelFocus']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteLabel.prototype.calciteLabelFocus;
    /**
     * @type {?}
     * @protected
     */
    CalciteLabel.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteLabel.prototype.z;
}
let CalciteLink = class CalciteLink {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteLink.decorators = [
    { type: Component, args: [{
                selector: 'calcite-link',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'href', 'iconEnd', 'iconFlipRtl', 'iconStart', 'theme', 'userSelect']
            },] },
];
/** @nocollapse */
CalciteLink.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteLink.ɵfac = function CalciteLink_Factory(t) { return new (t || CalciteLink)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteLink.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteLink, selectors: [["calcite-link"]], inputs: { disabled: "disabled", href: "href", iconEnd: "iconEnd", iconFlipRtl: "iconFlipRtl", iconStart: "iconStart", theme: "theme", userSelect: "userSelect" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteLink_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteLink = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'href', 'iconEnd', 'iconFlipRtl', 'iconStart', 'theme', 'userSelect'],
        methods: ['setFocus']
    })
], CalciteLink);
export { CalciteLink };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteLink, [{
        type: Component,
        args: [{
                selector: 'calcite-link',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'href', 'iconEnd', 'iconFlipRtl', 'iconStart', 'theme', 'userSelect']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteLink.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteLink.prototype.z;
}
let CalciteLoader = class CalciteLoader {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteLoader.decorators = [
    { type: Component, args: [{
                selector: 'calcite-loader',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'inline', 'label', 'noPadding', 'scale', 'text', 'type', 'value']
            },] },
];
/** @nocollapse */
CalciteLoader.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteLoader.ɵfac = function CalciteLoader_Factory(t) { return new (t || CalciteLoader)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteLoader.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteLoader, selectors: [["calcite-loader"]], inputs: { active: "active", inline: "inline", label: "label", noPadding: "noPadding", scale: "scale", text: "text", type: "type", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteLoader_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteLoader = __decorate([
    ProxyCmp({
        inputs: ['active', 'inline', 'label', 'noPadding', 'scale', 'text', 'type', 'value']
    })
], CalciteLoader);
export { CalciteLoader };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteLoader, [{
        type: Component,
        args: [{
                selector: 'calcite-loader',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'inline', 'label', 'noPadding', 'scale', 'text', 'type', 'value']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteLoader.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteLoader.prototype.z;
}
let CalciteModal = class CalciteModal {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteModalOpen', 'calciteModalClose']);
    }
};
CalciteModal.decorators = [
    { type: Component, args: [{
                selector: 'calcite-modal',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'backgroundColor', 'beforeClose', 'color', 'disableCloseButton', 'disableEscape', 'docked', 'firstFocus', 'fullscreen', 'intlClose', 'noPadding', 'scale', 'theme', 'width'],
                outputs: ['calciteModalOpen', 'calciteModalClose']
            },] },
];
/** @nocollapse */
CalciteModal.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteModal.ɵfac = function CalciteModal_Factory(t) { return new (t || CalciteModal)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteModal.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteModal, selectors: [["calcite-modal"]], inputs: { active: "active", backgroundColor: "backgroundColor", beforeClose: "beforeClose", color: "color", disableCloseButton: "disableCloseButton", disableEscape: "disableEscape", docked: "docked", firstFocus: "firstFocus", fullscreen: "fullscreen", intlClose: "intlClose", noPadding: "noPadding", scale: "scale", theme: "theme", width: "width" }, outputs: { calciteModalOpen: "calciteModalOpen", calciteModalClose: "calciteModalClose" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteModal_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteModal = __decorate([
    ProxyCmp({
        inputs: ['active', 'backgroundColor', 'beforeClose', 'color', 'disableCloseButton', 'disableEscape', 'docked', 'firstFocus', 'fullscreen', 'intlClose', 'noPadding', 'scale', 'theme', 'width'],
        methods: ['focusElement', 'scrollContent']
    })
], CalciteModal);
export { CalciteModal };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteModal, [{
        type: Component,
        args: [{
                selector: 'calcite-modal',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'backgroundColor', 'beforeClose', 'color', 'disableCloseButton', 'disableEscape', 'docked', 'firstFocus', 'fullscreen', 'intlClose', 'noPadding', 'scale', 'theme', 'width'],
                outputs: ['calciteModalOpen', 'calciteModalClose']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Fired when the modal begins the open animation
     * @type {?}
     */
    CalciteModal.prototype.calciteModalOpen;
    /**
     * Fired when the modal begins the close animation
     * @type {?}
     */
    CalciteModal.prototype.calciteModalClose;
    /**
     * @type {?}
     * @protected
     */
    CalciteModal.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteModal.prototype.z;
}
let CalciteNotice = class CalciteNotice {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteNoticeClose', 'calciteNoticeOpen']);
    }
};
CalciteNotice.decorators = [
    { type: Component, args: [{
                selector: 'calcite-notice',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'color', 'dismissible', 'icon', 'intlClose', 'scale', 'theme', 'width'],
                outputs: ['calciteNoticeClose', 'calciteNoticeOpen']
            },] },
];
/** @nocollapse */
CalciteNotice.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteNotice.ɵfac = function CalciteNotice_Factory(t) { return new (t || CalciteNotice)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteNotice.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteNotice, selectors: [["calcite-notice"]], inputs: { active: "active", color: "color", dismissible: "dismissible", icon: "icon", intlClose: "intlClose", scale: "scale", theme: "theme", width: "width" }, outputs: { calciteNoticeClose: "calciteNoticeClose", calciteNoticeOpen: "calciteNoticeOpen" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteNotice_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteNotice = __decorate([
    ProxyCmp({
        inputs: ['active', 'color', 'dismissible', 'icon', 'intlClose', 'scale', 'theme', 'width'],
        methods: ['close', 'open', 'setFocus']
    })
], CalciteNotice);
export { CalciteNotice };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteNotice, [{
        type: Component,
        args: [{
                selector: 'calcite-notice',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'color', 'dismissible', 'icon', 'intlClose', 'scale', 'theme', 'width'],
                outputs: ['calciteNoticeClose', 'calciteNoticeOpen']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Fired when an notice is closed
     * @type {?}
     */
    CalciteNotice.prototype.calciteNoticeClose;
    /**
     * Fired when an Notice is opened
     * @type {?}
     */
    CalciteNotice.prototype.calciteNoticeOpen;
    /**
     * @type {?}
     * @protected
     */
    CalciteNotice.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteNotice.prototype.z;
}
let CalciteOption = class CalciteOption {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteOption.decorators = [
    { type: Component, args: [{
                selector: 'calcite-option',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'label', 'selected', 'value']
            },] },
];
/** @nocollapse */
CalciteOption.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteOption.ɵfac = function CalciteOption_Factory(t) { return new (t || CalciteOption)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteOption.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteOption, selectors: [["calcite-option"]], inputs: { disabled: "disabled", label: "label", selected: "selected", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteOption_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteOption = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'label', 'selected', 'value']
    })
], CalciteOption);
export { CalciteOption };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteOption, [{
        type: Component,
        args: [{
                selector: 'calcite-option',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'label', 'selected', 'value']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteOption.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteOption.prototype.z;
}
let CalciteOptionGroup = class CalciteOptionGroup {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteOptionGroup.decorators = [
    { type: Component, args: [{
                selector: 'calcite-option-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'label']
            },] },
];
/** @nocollapse */
CalciteOptionGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteOptionGroup.ɵfac = function CalciteOptionGroup_Factory(t) { return new (t || CalciteOptionGroup)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteOptionGroup.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteOptionGroup, selectors: [["calcite-option-group"]], inputs: { disabled: "disabled", label: "label" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteOptionGroup_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteOptionGroup = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'label']
    })
], CalciteOptionGroup);
export { CalciteOptionGroup };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteOptionGroup, [{
        type: Component,
        args: [{
                selector: 'calcite-option-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'label']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteOptionGroup.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteOptionGroup.prototype.z;
}
let CalcitePagination = class CalcitePagination {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calcitePaginationUpdate']);
    }
};
CalcitePagination.decorators = [
    { type: Component, args: [{
                selector: 'calcite-pagination',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['num', 'scale', 'start', 'textLabelNext', 'textLabelPrevious', 'theme', 'total'],
                outputs: ['calcitePaginationUpdate']
            },] },
];
/** @nocollapse */
CalcitePagination.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalcitePagination.ɵfac = function CalcitePagination_Factory(t) { return new (t || CalcitePagination)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalcitePagination.ɵcmp = i0.ɵɵdefineComponent({ type: CalcitePagination, selectors: [["calcite-pagination"]], inputs: { num: "num", scale: "scale", start: "start", textLabelNext: "textLabelNext", textLabelPrevious: "textLabelPrevious", theme: "theme", total: "total" }, outputs: { calcitePaginationUpdate: "calcitePaginationUpdate" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalcitePagination_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalcitePagination = __decorate([
    ProxyCmp({
        inputs: ['num', 'scale', 'start', 'textLabelNext', 'textLabelPrevious', 'theme', 'total'],
        methods: ['nextPage', 'previousPage']
    })
], CalcitePagination);
export { CalcitePagination };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalcitePagination, [{
        type: Component,
        args: [{
                selector: 'calcite-pagination',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['num', 'scale', 'start', 'textLabelNext', 'textLabelPrevious', 'theme', 'total'],
                outputs: ['calcitePaginationUpdate']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted whenever the selected page changes. \@event calcitePaginationUpdate
     * @type {?}
     */
    CalcitePagination.prototype.calcitePaginationUpdate;
    /**
     * @type {?}
     * @protected
     */
    CalcitePagination.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalcitePagination.prototype.z;
}
let CalcitePanel = class CalcitePanel {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calcitePanelDismissedChange', 'calcitePanelScroll', 'calcitePanelBackClick']);
    }
};
CalcitePanel.decorators = [
    { type: Component, args: [{
                selector: 'calcite-panel',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['beforeBack', 'disabled', 'dismissed', 'dismissible', 'heading', 'heightScale', 'intlBack', 'intlClose', 'intlOpen', 'intlOptions', 'loading', 'menuOpen', 'showBackButton', 'summary', 'theme', 'widthScale'],
                outputs: ['calcitePanelDismissedChange', 'calcitePanelScroll', 'calcitePanelBackClick']
            },] },
];
/** @nocollapse */
CalcitePanel.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalcitePanel.ɵfac = function CalcitePanel_Factory(t) { return new (t || CalcitePanel)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalcitePanel.ɵcmp = i0.ɵɵdefineComponent({ type: CalcitePanel, selectors: [["calcite-panel"]], inputs: { beforeBack: "beforeBack", disabled: "disabled", dismissed: "dismissed", dismissible: "dismissible", heading: "heading", heightScale: "heightScale", intlBack: "intlBack", intlClose: "intlClose", intlOpen: "intlOpen", intlOptions: "intlOptions", loading: "loading", menuOpen: "menuOpen", showBackButton: "showBackButton", summary: "summary", theme: "theme", widthScale: "widthScale" }, outputs: { calcitePanelDismissedChange: "calcitePanelDismissedChange", calcitePanelScroll: "calcitePanelScroll", calcitePanelBackClick: "calcitePanelBackClick" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalcitePanel_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalcitePanel = __decorate([
    ProxyCmp({
        inputs: ['beforeBack', 'disabled', 'dismissed', 'dismissible', 'heading', 'heightScale', 'intlBack', 'intlClose', 'intlOpen', 'intlOptions', 'loading', 'menuOpen', 'showBackButton', 'summary', 'theme', 'widthScale'],
        methods: ['setFocus']
    })
], CalcitePanel);
export { CalcitePanel };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalcitePanel, [{
        type: Component,
        args: [{
                selector: 'calcite-panel',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['beforeBack', 'disabled', 'dismissed', 'dismissible', 'heading', 'heightScale', 'intlBack', 'intlClose', 'intlOpen', 'intlOptions', 'loading', 'menuOpen', 'showBackButton', 'summary', 'theme', 'widthScale'],
                outputs: ['calcitePanelDismissedChange', 'calcitePanelScroll', 'calcitePanelBackClick']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted when the close button has been clicked.
     * @type {?}
     */
    CalcitePanel.prototype.calcitePanelDismissedChange;
    /**
     * Emitted when the content has been scrolled.
     * @type {?}
     */
    CalcitePanel.prototype.calcitePanelScroll;
    /**
     * Emitted when the back button has been clicked.
     * @type {?}
     */
    CalcitePanel.prototype.calcitePanelBackClick;
    /**
     * @type {?}
     * @protected
     */
    CalcitePanel.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalcitePanel.prototype.z;
}
let CalcitePickList = class CalcitePickList {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteListChange']);
    }
};
CalcitePickList.decorators = [
    { type: Component, args: [{
                selector: 'calcite-pick-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'filterEnabled', 'filterPlaceholder', 'loading', 'multiple'],
                outputs: ['calciteListChange']
            },] },
];
/** @nocollapse */
CalcitePickList.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalcitePickList.ɵfac = function CalcitePickList_Factory(t) { return new (t || CalcitePickList)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalcitePickList.ɵcmp = i0.ɵɵdefineComponent({ type: CalcitePickList, selectors: [["calcite-pick-list"]], inputs: { disabled: "disabled", filterEnabled: "filterEnabled", filterPlaceholder: "filterPlaceholder", loading: "loading", multiple: "multiple" }, outputs: { calciteListChange: "calciteListChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalcitePickList_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalcitePickList = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'filterEnabled', 'filterPlaceholder', 'loading', 'multiple'],
        methods: ['getSelectedItems', 'setFocus']
    })
], CalcitePickList);
export { CalcitePickList };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalcitePickList, [{
        type: Component,
        args: [{
                selector: 'calcite-pick-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'filterEnabled', 'filterPlaceholder', 'loading', 'multiple'],
                outputs: ['calciteListChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted when any of the item selections have changed. \@event calciteListChange
     * @type {?}
     */
    CalcitePickList.prototype.calciteListChange;
    /**
     * @type {?}
     * @protected
     */
    CalcitePickList.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalcitePickList.prototype.z;
}
let CalcitePickListGroup = class CalcitePickListGroup {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalcitePickListGroup.decorators = [
    { type: Component, args: [{
                selector: 'calcite-pick-list-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['groupTitle']
            },] },
];
/** @nocollapse */
CalcitePickListGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalcitePickListGroup.ɵfac = function CalcitePickListGroup_Factory(t) { return new (t || CalcitePickListGroup)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalcitePickListGroup.ɵcmp = i0.ɵɵdefineComponent({ type: CalcitePickListGroup, selectors: [["calcite-pick-list-group"]], inputs: { groupTitle: "groupTitle" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalcitePickListGroup_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalcitePickListGroup = __decorate([
    ProxyCmp({
        inputs: ['groupTitle']
    })
], CalcitePickListGroup);
export { CalcitePickListGroup };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalcitePickListGroup, [{
        type: Component,
        args: [{
                selector: 'calcite-pick-list-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['groupTitle']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalcitePickListGroup.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalcitePickListGroup.prototype.z;
}
let CalcitePickListItem = class CalcitePickListItem {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteListItemChange', 'calciteListItemRemove']);
    }
};
CalcitePickListItem.decorators = [
    { type: Component, args: [{
                selector: 'calcite-pick-list-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['description', 'disableDeselect', 'disabled', 'icon', 'intlRemove', 'label', 'metadata', 'removable', 'selected', 'value'],
                outputs: ['calciteListItemChange', 'calciteListItemRemove']
            },] },
];
/** @nocollapse */
CalcitePickListItem.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalcitePickListItem.ɵfac = function CalcitePickListItem_Factory(t) { return new (t || CalcitePickListItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalcitePickListItem.ɵcmp = i0.ɵɵdefineComponent({ type: CalcitePickListItem, selectors: [["calcite-pick-list-item"]], inputs: { description: "description", disableDeselect: "disableDeselect", disabled: "disabled", icon: "icon", intlRemove: "intlRemove", label: "label", metadata: "metadata", removable: "removable", selected: "selected", value: "value" }, outputs: { calciteListItemChange: "calciteListItemChange", calciteListItemRemove: "calciteListItemRemove" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalcitePickListItem_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalcitePickListItem = __decorate([
    ProxyCmp({
        inputs: ['description', 'disableDeselect', 'disabled', 'icon', 'intlRemove', 'label', 'metadata', 'removable', 'selected', 'value'],
        methods: ['toggleSelected', 'setFocus']
    })
], CalcitePickListItem);
export { CalcitePickListItem };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalcitePickListItem, [{
        type: Component,
        args: [{
                selector: 'calcite-pick-list-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['description', 'disableDeselect', 'disabled', 'icon', 'intlRemove', 'label', 'metadata', 'removable', 'selected', 'value'],
                outputs: ['calciteListItemChange', 'calciteListItemRemove']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted whenever the item is selected or unselected. \@event calciteListItemChange
     * @type {?}
     */
    CalcitePickListItem.prototype.calciteListItemChange;
    /**
     * Emitted whenever the remove button is pressed. \@event calciteListItemRemove
     * @type {?}
     */
    CalcitePickListItem.prototype.calciteListItemRemove;
    /**
     * @type {?}
     * @protected
     */
    CalcitePickListItem.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalcitePickListItem.prototype.z;
}
let CalcitePopover = class CalcitePopover {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calcitePopoverClose', 'calcitePopoverOpen']);
    }
};
CalcitePopover.decorators = [
    { type: Component, args: [{
                selector: 'calcite-popover',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['closeButton', 'disableFlip', 'disablePointer', 'flipPlacements', 'intlClose', 'label', 'offsetDistance', 'offsetSkidding', 'open', 'placement', 'referenceElement', 'theme'],
                outputs: ['calcitePopoverClose', 'calcitePopoverOpen']
            },] },
];
/** @nocollapse */
CalcitePopover.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalcitePopover.ɵfac = function CalcitePopover_Factory(t) { return new (t || CalcitePopover)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalcitePopover.ɵcmp = i0.ɵɵdefineComponent({ type: CalcitePopover, selectors: [["calcite-popover"]], inputs: { closeButton: "closeButton", disableFlip: "disableFlip", disablePointer: "disablePointer", flipPlacements: "flipPlacements", intlClose: "intlClose", label: "label", offsetDistance: "offsetDistance", offsetSkidding: "offsetSkidding", open: "open", placement: "placement", referenceElement: "referenceElement", theme: "theme" }, outputs: { calcitePopoverClose: "calcitePopoverClose", calcitePopoverOpen: "calcitePopoverOpen" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalcitePopover_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalcitePopover = __decorate([
    ProxyCmp({
        inputs: ['closeButton', 'disableFlip', 'disablePointer', 'flipPlacements', 'intlClose', 'label', 'offsetDistance', 'offsetSkidding', 'open', 'placement', 'referenceElement', 'theme'],
        methods: ['reposition', 'setFocus', 'toggle']
    })
], CalcitePopover);
export { CalcitePopover };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalcitePopover, [{
        type: Component,
        args: [{
                selector: 'calcite-popover',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['closeButton', 'disableFlip', 'disablePointer', 'flipPlacements', 'intlClose', 'label', 'offsetDistance', 'offsetSkidding', 'open', 'placement', 'referenceElement', 'theme'],
                outputs: ['calcitePopoverClose', 'calcitePopoverOpen']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Fired when the popover is closed
     * @type {?}
     */
    CalcitePopover.prototype.calcitePopoverClose;
    /**
     * Fired when the popover is opened
     * @type {?}
     */
    CalcitePopover.prototype.calcitePopoverOpen;
    /**
     * @type {?}
     * @protected
     */
    CalcitePopover.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalcitePopover.prototype.z;
}
let CalcitePopoverManager = class CalcitePopoverManager {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalcitePopoverManager.decorators = [
    { type: Component, args: [{
                selector: 'calcite-popover-manager',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['autoClose', 'selector']
            },] },
];
/** @nocollapse */
CalcitePopoverManager.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalcitePopoverManager.ɵfac = function CalcitePopoverManager_Factory(t) { return new (t || CalcitePopoverManager)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalcitePopoverManager.ɵcmp = i0.ɵɵdefineComponent({ type: CalcitePopoverManager, selectors: [["calcite-popover-manager"]], inputs: { autoClose: "autoClose", selector: "selector" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalcitePopoverManager_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalcitePopoverManager = __decorate([
    ProxyCmp({
        inputs: ['autoClose', 'selector']
    })
], CalcitePopoverManager);
export { CalcitePopoverManager };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalcitePopoverManager, [{
        type: Component,
        args: [{
                selector: 'calcite-popover-manager',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['autoClose', 'selector']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalcitePopoverManager.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalcitePopoverManager.prototype.z;
}
let CalciteProgress = class CalciteProgress {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteProgress.decorators = [
    { type: Component, args: [{
                selector: 'calcite-progress',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['reversed', 'text', 'theme', 'type', 'value']
            },] },
];
/** @nocollapse */
CalciteProgress.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteProgress.ɵfac = function CalciteProgress_Factory(t) { return new (t || CalciteProgress)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteProgress.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteProgress, selectors: [["calcite-progress"]], inputs: { reversed: "reversed", text: "text", theme: "theme", type: "type", value: "value" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteProgress_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteProgress = __decorate([
    ProxyCmp({
        inputs: ['reversed', 'text', 'theme', 'type', 'value']
    })
], CalciteProgress);
export { CalciteProgress };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteProgress, [{
        type: Component,
        args: [{
                selector: 'calcite-progress',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['reversed', 'text', 'theme', 'type', 'value']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteProgress.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteProgress.prototype.z;
}
let CalciteRadio = class CalciteRadio {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteRadio.decorators = [
    { type: Component, args: [{
                selector: 'calcite-radio',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['checked', 'disabled', 'focused', 'hidden', 'hovered', 'scale', 'theme']
            },] },
];
/** @nocollapse */
CalciteRadio.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteRadio.ɵfac = function CalciteRadio_Factory(t) { return new (t || CalciteRadio)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteRadio.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteRadio, selectors: [["calcite-radio"]], inputs: { checked: "checked", disabled: "disabled", focused: "focused", hidden: "hidden", hovered: "hovered", scale: "scale", theme: "theme" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteRadio_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteRadio = __decorate([
    ProxyCmp({
        inputs: ['checked', 'disabled', 'focused', 'hidden', 'hovered', 'scale', 'theme']
    })
], CalciteRadio);
export { CalciteRadio };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteRadio, [{
        type: Component,
        args: [{
                selector: 'calcite-radio',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['checked', 'disabled', 'focused', 'hidden', 'hovered', 'scale', 'theme']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteRadio.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteRadio.prototype.z;
}
let CalciteRadioButton = class CalciteRadioButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteRadioButtonChange', 'calciteRadioButtonFocusedChange']);
    }
};
CalciteRadioButton.decorators = [
    { type: Component, args: [{
                selector: 'calcite-radio-button',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['checked', 'disabled', 'focused', 'guid', 'hidden', 'hovered', 'name', 'required', 'scale', 'theme', 'value'],
                outputs: ['calciteRadioButtonChange', 'calciteRadioButtonFocusedChange']
            },] },
];
/** @nocollapse */
CalciteRadioButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteRadioButton.ɵfac = function CalciteRadioButton_Factory(t) { return new (t || CalciteRadioButton)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteRadioButton.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteRadioButton, selectors: [["calcite-radio-button"]], inputs: { checked: "checked", disabled: "disabled", focused: "focused", guid: "guid", hidden: "hidden", hovered: "hovered", name: "name", required: "required", scale: "scale", theme: "theme", value: "value" }, outputs: { calciteRadioButtonChange: "calciteRadioButtonChange", calciteRadioButtonFocusedChange: "calciteRadioButtonFocusedChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteRadioButton_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteRadioButton = __decorate([
    ProxyCmp({
        inputs: ['checked', 'disabled', 'focused', 'guid', 'hidden', 'hovered', 'name', 'required', 'scale', 'theme', 'value']
    })
], CalciteRadioButton);
export { CalciteRadioButton };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteRadioButton, [{
        type: Component,
        args: [{
                selector: 'calcite-radio-button',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['checked', 'disabled', 'focused', 'guid', 'hidden', 'hovered', 'name', 'required', 'scale', 'theme', 'value'],
                outputs: ['calciteRadioButtonChange', 'calciteRadioButtonFocusedChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Fires only when the radio button is checked.  This behavior is identical to the native HTML input element.
     * Since this event does not fire when the radio button is unchecked, it's not recommended to attach a listener for this event
     * directly on the element, but instead either attach it to a node that contains all of the radio buttons in the group
     * or use the calciteRadioButtonGroupChange event if using this with calcite-radio-button-group.
     * @type {?}
     */
    CalciteRadioButton.prototype.calciteRadioButtonChange;
    /**
     * Fires when the radio button is either focused or blurred.
     * @type {?}
     */
    CalciteRadioButton.prototype.calciteRadioButtonFocusedChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteRadioButton.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteRadioButton.prototype.z;
}
let CalciteRadioButtonGroup = class CalciteRadioButtonGroup {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteRadioButtonGroupChange']);
    }
};
CalciteRadioButtonGroup.decorators = [
    { type: Component, args: [{
                selector: 'calcite-radio-button-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'hidden', 'layout', 'name', 'required', 'scale', 'theme'],
                outputs: ['calciteRadioButtonGroupChange']
            },] },
];
/** @nocollapse */
CalciteRadioButtonGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteRadioButtonGroup.ɵfac = function CalciteRadioButtonGroup_Factory(t) { return new (t || CalciteRadioButtonGroup)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteRadioButtonGroup.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteRadioButtonGroup, selectors: [["calcite-radio-button-group"]], inputs: { disabled: "disabled", hidden: "hidden", layout: "layout", name: "name", required: "required", scale: "scale", theme: "theme" }, outputs: { calciteRadioButtonGroupChange: "calciteRadioButtonGroupChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteRadioButtonGroup_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteRadioButtonGroup = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'hidden', 'layout', 'name', 'required', 'scale', 'theme']
    })
], CalciteRadioButtonGroup);
export { CalciteRadioButtonGroup };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteRadioButtonGroup, [{
        type: Component,
        args: [{
                selector: 'calcite-radio-button-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'hidden', 'layout', 'name', 'required', 'scale', 'theme'],
                outputs: ['calciteRadioButtonGroupChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteRadioButtonGroup.prototype.calciteRadioButtonGroupChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteRadioButtonGroup.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteRadioButtonGroup.prototype.z;
}
let CalciteRadioGroup = class CalciteRadioGroup {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteRadioGroupChange']);
    }
};
CalciteRadioGroup.decorators = [
    { type: Component, args: [{
                selector: 'calcite-radio-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['appearance', 'disabled', 'layout', 'name', 'scale', 'selectedItem', 'theme', 'width'],
                outputs: ['calciteRadioGroupChange']
            },] },
];
/** @nocollapse */
CalciteRadioGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteRadioGroup.ɵfac = function CalciteRadioGroup_Factory(t) { return new (t || CalciteRadioGroup)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteRadioGroup.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteRadioGroup, selectors: [["calcite-radio-group"]], inputs: { appearance: "appearance", disabled: "disabled", layout: "layout", name: "name", scale: "scale", selectedItem: "selectedItem", theme: "theme", width: "width" }, outputs: { calciteRadioGroupChange: "calciteRadioGroupChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteRadioGroup_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteRadioGroup = __decorate([
    ProxyCmp({
        inputs: ['appearance', 'disabled', 'layout', 'name', 'scale', 'selectedItem', 'theme', 'width'],
        methods: ['setFocus']
    })
], CalciteRadioGroup);
export { CalciteRadioGroup };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteRadioGroup, [{
        type: Component,
        args: [{
                selector: 'calcite-radio-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['appearance', 'disabled', 'layout', 'name', 'scale', 'selectedItem', 'theme', 'width'],
                outputs: ['calciteRadioGroupChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteRadioGroup.prototype.calciteRadioGroupChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteRadioGroup.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteRadioGroup.prototype.z;
}
let CalciteRadioGroupItem = class CalciteRadioGroupItem {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteRadioGroupItemChange']);
    }
};
CalciteRadioGroupItem.decorators = [
    { type: Component, args: [{
                selector: 'calcite-radio-group-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['checked', 'icon', 'iconFlipRtl', 'iconPosition', 'value'],
                outputs: ['calciteRadioGroupItemChange']
            },] },
];
/** @nocollapse */
CalciteRadioGroupItem.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteRadioGroupItem.ɵfac = function CalciteRadioGroupItem_Factory(t) { return new (t || CalciteRadioGroupItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteRadioGroupItem.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteRadioGroupItem, selectors: [["calcite-radio-group-item"]], inputs: { checked: "checked", icon: "icon", iconFlipRtl: "iconFlipRtl", iconPosition: "iconPosition", value: "value" }, outputs: { calciteRadioGroupItemChange: "calciteRadioGroupItemChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteRadioGroupItem_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteRadioGroupItem = __decorate([
    ProxyCmp({
        inputs: ['checked', 'icon', 'iconFlipRtl', 'iconPosition', 'value']
    })
], CalciteRadioGroupItem);
export { CalciteRadioGroupItem };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteRadioGroupItem, [{
        type: Component,
        args: [{
                selector: 'calcite-radio-group-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['checked', 'icon', 'iconFlipRtl', 'iconPosition', 'value'],
                outputs: ['calciteRadioGroupItemChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteRadioGroupItem.prototype.calciteRadioGroupItemChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteRadioGroupItem.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteRadioGroupItem.prototype.z;
}
let CalciteRating = class CalciteRating {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteRatingChange']);
    }
};
CalciteRating.decorators = [
    { type: Component, args: [{
                selector: 'calcite-rating',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['average', 'count', 'disabled', 'displayValue', 'intlRating', 'intlStars', 'readOnly', 'scale', 'theme', 'value'],
                outputs: ['calciteRatingChange']
            },] },
];
/** @nocollapse */
CalciteRating.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteRating.ɵfac = function CalciteRating_Factory(t) { return new (t || CalciteRating)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteRating.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteRating, selectors: [["calcite-rating"]], inputs: { average: "average", count: "count", disabled: "disabled", displayValue: "displayValue", intlRating: "intlRating", intlStars: "intlStars", readOnly: "readOnly", scale: "scale", theme: "theme", value: "value" }, outputs: { calciteRatingChange: "calciteRatingChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteRating_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteRating = __decorate([
    ProxyCmp({
        inputs: ['average', 'count', 'disabled', 'displayValue', 'intlRating', 'intlStars', 'readOnly', 'scale', 'theme', 'value'],
        methods: ['setFocus']
    })
], CalciteRating);
export { CalciteRating };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteRating, [{
        type: Component,
        args: [{
                selector: 'calcite-rating',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['average', 'count', 'disabled', 'displayValue', 'intlRating', 'intlStars', 'readOnly', 'scale', 'theme', 'value'],
                outputs: ['calciteRatingChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteRating.prototype.calciteRatingChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteRating.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteRating.prototype.z;
}
let CalciteScrim = class CalciteScrim {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteScrim.decorators = [
    { type: Component, args: [{
                selector: 'calcite-scrim',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['intlLoading', 'loading', 'theme']
            },] },
];
/** @nocollapse */
CalciteScrim.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteScrim.ɵfac = function CalciteScrim_Factory(t) { return new (t || CalciteScrim)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteScrim.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteScrim, selectors: [["calcite-scrim"]], inputs: { intlLoading: "intlLoading", loading: "loading", theme: "theme" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteScrim_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteScrim = __decorate([
    ProxyCmp({
        inputs: ['intlLoading', 'loading', 'theme']
    })
], CalciteScrim);
export { CalciteScrim };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteScrim, [{
        type: Component,
        args: [{
                selector: 'calcite-scrim',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['intlLoading', 'loading', 'theme']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteScrim.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteScrim.prototype.z;
}
let CalciteSelect = class CalciteSelect {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteSelectChange']);
    }
};
CalciteSelect.decorators = [
    { type: Component, args: [{
                selector: 'calcite-select',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'label', 'scale', 'theme', 'width'],
                outputs: ['calciteSelectChange']
            },] },
];
/** @nocollapse */
CalciteSelect.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteSelect.ɵfac = function CalciteSelect_Factory(t) { return new (t || CalciteSelect)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteSelect.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteSelect, selectors: [["calcite-select"]], inputs: { disabled: "disabled", label: "label", scale: "scale", theme: "theme", width: "width" }, outputs: { calciteSelectChange: "calciteSelectChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteSelect_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteSelect = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'label', 'scale', 'theme', 'width'],
        methods: ['setFocus']
    })
], CalciteSelect);
export { CalciteSelect };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteSelect, [{
        type: Component,
        args: [{
                selector: 'calcite-select',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'label', 'scale', 'theme', 'width'],
                outputs: ['calciteSelectChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * This event will fire whenever the selected option changes.
     * @type {?}
     */
    CalciteSelect.prototype.calciteSelectChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteSelect.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteSelect.prototype.z;
}
let CalciteShell = class CalciteShell {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteShell.decorators = [
    { type: Component, args: [{
                selector: 'calcite-shell',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['theme']
            },] },
];
/** @nocollapse */
CalciteShell.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteShell.ɵfac = function CalciteShell_Factory(t) { return new (t || CalciteShell)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteShell.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteShell, selectors: [["calcite-shell"]], inputs: { theme: "theme" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteShell_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteShell = __decorate([
    ProxyCmp({
        inputs: ['theme']
    })
], CalciteShell);
export { CalciteShell };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteShell, [{
        type: Component,
        args: [{
                selector: 'calcite-shell',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['theme']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteShell.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteShell.prototype.z;
}
let CalciteShellCenterRow = class CalciteShellCenterRow {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteShellCenterRow.decorators = [
    { type: Component, args: [{
                selector: 'calcite-shell-center-row',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['detached', 'heightScale', 'position']
            },] },
];
/** @nocollapse */
CalciteShellCenterRow.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteShellCenterRow.ɵfac = function CalciteShellCenterRow_Factory(t) { return new (t || CalciteShellCenterRow)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteShellCenterRow.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteShellCenterRow, selectors: [["calcite-shell-center-row"]], inputs: { detached: "detached", heightScale: "heightScale", position: "position" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteShellCenterRow_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteShellCenterRow = __decorate([
    ProxyCmp({
        inputs: ['detached', 'heightScale', 'position']
    })
], CalciteShellCenterRow);
export { CalciteShellCenterRow };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteShellCenterRow, [{
        type: Component,
        args: [{
                selector: 'calcite-shell-center-row',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['detached', 'heightScale', 'position']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteShellCenterRow.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteShellCenterRow.prototype.z;
}
let CalciteShellPanel = class CalciteShellPanel {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteShellPanelToggle']);
    }
};
CalciteShellPanel.decorators = [
    { type: Component, args: [{
                selector: 'calcite-shell-panel',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['collapsed', 'detached', 'detachedHeightScale', 'position', 'widthScale'],
                outputs: ['calciteShellPanelToggle']
            },] },
];
/** @nocollapse */
CalciteShellPanel.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteShellPanel.ɵfac = function CalciteShellPanel_Factory(t) { return new (t || CalciteShellPanel)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteShellPanel.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteShellPanel, selectors: [["calcite-shell-panel"]], inputs: { collapsed: "collapsed", detached: "detached", detachedHeightScale: "detachedHeightScale", position: "position", widthScale: "widthScale" }, outputs: { calciteShellPanelToggle: "calciteShellPanelToggle" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteShellPanel_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteShellPanel = __decorate([
    ProxyCmp({
        inputs: ['collapsed', 'detached', 'detachedHeightScale', 'position', 'widthScale']
    })
], CalciteShellPanel);
export { CalciteShellPanel };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteShellPanel, [{
        type: Component,
        args: [{
                selector: 'calcite-shell-panel',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['collapsed', 'detached', 'detachedHeightScale', 'position', 'widthScale'],
                outputs: ['calciteShellPanelToggle']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted when collapse has been toggled.
     * @type {?}
     */
    CalciteShellPanel.prototype.calciteShellPanelToggle;
    /**
     * @type {?}
     * @protected
     */
    CalciteShellPanel.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteShellPanel.prototype.z;
}
let CalciteSlider = class CalciteSlider {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteSliderUpdate']);
    }
};
CalciteSlider.decorators = [
    { type: Component, args: [{
                selector: 'calcite-slider',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'hasHistogram', 'histogram', 'labelHandles', 'labelTicks', 'max', 'maxLabel', 'maxValue', 'min', 'minLabel', 'minValue', 'pageStep', 'precise', 'snap', 'step', 'theme', 'ticks', 'value'],
                outputs: ['calciteSliderUpdate']
            },] },
];
/** @nocollapse */
CalciteSlider.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteSlider.ɵfac = function CalciteSlider_Factory(t) { return new (t || CalciteSlider)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteSlider.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteSlider, selectors: [["calcite-slider"]], inputs: { disabled: "disabled", hasHistogram: "hasHistogram", histogram: "histogram", labelHandles: "labelHandles", labelTicks: "labelTicks", max: "max", maxLabel: "maxLabel", maxValue: "maxValue", min: "min", minLabel: "minLabel", minValue: "minValue", pageStep: "pageStep", precise: "precise", snap: "snap", step: "step", theme: "theme", ticks: "ticks", value: "value" }, outputs: { calciteSliderUpdate: "calciteSliderUpdate" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteSlider_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteSlider = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'hasHistogram', 'histogram', 'labelHandles', 'labelTicks', 'max', 'maxLabel', 'maxValue', 'min', 'minLabel', 'minValue', 'pageStep', 'precise', 'snap', 'step', 'theme', 'ticks', 'value'],
        methods: ['setFocus']
    })
], CalciteSlider);
export { CalciteSlider };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteSlider, [{
        type: Component,
        args: [{
                selector: 'calcite-slider',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'hasHistogram', 'histogram', 'labelHandles', 'labelTicks', 'max', 'maxLabel', 'maxValue', 'min', 'minLabel', 'minValue', 'pageStep', 'precise', 'snap', 'step', 'theme', 'ticks', 'value'],
                outputs: ['calciteSliderUpdate']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Fires on all updates to the slider.
     * :warning: Will be fired frequently during drag. If you are performing any
     * expensive operations consider using a debounce or throttle to avoid
     * locking up the main thread.
     * @type {?}
     */
    CalciteSlider.prototype.calciteSliderUpdate;
    /**
     * @type {?}
     * @protected
     */
    CalciteSlider.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteSlider.prototype.z;
}
let CalciteSortableList = class CalciteSortableList {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteListOrderChange']);
    }
};
CalciteSortableList.decorators = [
    { type: Component, args: [{
                selector: 'calcite-sortable-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'handleSelector', 'loading'],
                outputs: ['calciteListOrderChange']
            },] },
];
/** @nocollapse */
CalciteSortableList.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteSortableList.ɵfac = function CalciteSortableList_Factory(t) { return new (t || CalciteSortableList)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteSortableList.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteSortableList, selectors: [["calcite-sortable-list"]], inputs: { disabled: "disabled", handleSelector: "handleSelector", loading: "loading" }, outputs: { calciteListOrderChange: "calciteListOrderChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteSortableList_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteSortableList = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'handleSelector', 'loading']
    })
], CalciteSortableList);
export { CalciteSortableList };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteSortableList, [{
        type: Component,
        args: [{
                selector: 'calcite-sortable-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'handleSelector', 'loading'],
                outputs: ['calciteListOrderChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emmitted when the order of the list has changed. \@event calciteListOrderChange
     * @type {?}
     */
    CalciteSortableList.prototype.calciteListOrderChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteSortableList.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteSortableList.prototype.z;
}
let CalciteSplitButton = class CalciteSplitButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteSplitButtonPrimaryClick', 'calciteSplitButtonSecondaryClick']);
    }
};
CalciteSplitButton.decorators = [
    { type: Component, args: [{
                selector: 'calcite-split-button',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['appearance', 'color', 'disabled', 'dropdownIconType', 'dropdownLabel', 'loading', 'primaryIconEnd', 'primaryIconFlipRtl', 'primaryIconStart', 'primaryLabel', 'primaryText', 'scale', 'theme'],
                outputs: ['calciteSplitButtonPrimaryClick', 'calciteSplitButtonSecondaryClick']
            },] },
];
/** @nocollapse */
CalciteSplitButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteSplitButton.ɵfac = function CalciteSplitButton_Factory(t) { return new (t || CalciteSplitButton)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteSplitButton.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteSplitButton, selectors: [["calcite-split-button"]], inputs: { appearance: "appearance", color: "color", disabled: "disabled", dropdownIconType: "dropdownIconType", dropdownLabel: "dropdownLabel", loading: "loading", primaryIconEnd: "primaryIconEnd", primaryIconFlipRtl: "primaryIconFlipRtl", primaryIconStart: "primaryIconStart", primaryLabel: "primaryLabel", primaryText: "primaryText", scale: "scale", theme: "theme" }, outputs: { calciteSplitButtonPrimaryClick: "calciteSplitButtonPrimaryClick", calciteSplitButtonSecondaryClick: "calciteSplitButtonSecondaryClick" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteSplitButton_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteSplitButton = __decorate([
    ProxyCmp({
        inputs: ['appearance', 'color', 'disabled', 'dropdownIconType', 'dropdownLabel', 'loading', 'primaryIconEnd', 'primaryIconFlipRtl', 'primaryIconStart', 'primaryLabel', 'primaryText', 'scale', 'theme']
    })
], CalciteSplitButton);
export { CalciteSplitButton };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteSplitButton, [{
        type: Component,
        args: [{
                selector: 'calcite-split-button',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['appearance', 'color', 'disabled', 'dropdownIconType', 'dropdownLabel', 'loading', 'primaryIconEnd', 'primaryIconFlipRtl', 'primaryIconStart', 'primaryLabel', 'primaryText', 'scale', 'theme'],
                outputs: ['calciteSplitButtonPrimaryClick', 'calciteSplitButtonSecondaryClick']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * fired when the primary button is clicked
     * @type {?}
     */
    CalciteSplitButton.prototype.calciteSplitButtonPrimaryClick;
    /**
     * fired when the secondary button is clicked
     * @type {?}
     */
    CalciteSplitButton.prototype.calciteSplitButtonSecondaryClick;
    /**
     * @type {?}
     * @protected
     */
    CalciteSplitButton.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteSplitButton.prototype.z;
}
let CalciteStepper = class CalciteStepper {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteStepperItemChange']);
    }
};
CalciteStepper.decorators = [
    { type: Component, args: [{
                selector: 'calcite-stepper',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['icon', 'layout', 'numbered', 'scale', 'theme'],
                outputs: ['calciteStepperItemChange']
            },] },
];
/** @nocollapse */
CalciteStepper.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteStepper.ɵfac = function CalciteStepper_Factory(t) { return new (t || CalciteStepper)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteStepper.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteStepper, selectors: [["calcite-stepper"]], inputs: { icon: "icon", layout: "layout", numbered: "numbered", scale: "scale", theme: "theme" }, outputs: { calciteStepperItemChange: "calciteStepperItemChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteStepper_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteStepper = __decorate([
    ProxyCmp({
        inputs: ['icon', 'layout', 'numbered', 'scale', 'theme'],
        methods: ['nextStep', 'prevStep', 'goToStep', 'startStep', 'endStep']
    })
], CalciteStepper);
export { CalciteStepper };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteStepper, [{
        type: Component,
        args: [{
                selector: 'calcite-stepper',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['icon', 'layout', 'numbered', 'scale', 'theme'],
                outputs: ['calciteStepperItemChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteStepper.prototype.calciteStepperItemChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteStepper.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteStepper.prototype.z;
}
let CalciteStepperItem = class CalciteStepperItem {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteStepperItemKeyEvent', 'calciteStepperItemSelect', 'calciteStepperItemRegister']);
    }
};
CalciteStepperItem.decorators = [
    { type: Component, args: [{
                selector: 'calcite-stepper-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'complete', 'disabled', 'error', 'itemSubtitle', 'itemTitle'],
                outputs: ['calciteStepperItemKeyEvent', 'calciteStepperItemSelect', 'calciteStepperItemRegister']
            },] },
];
/** @nocollapse */
CalciteStepperItem.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteStepperItem.ɵfac = function CalciteStepperItem_Factory(t) { return new (t || CalciteStepperItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteStepperItem.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteStepperItem, selectors: [["calcite-stepper-item"]], inputs: { active: "active", complete: "complete", disabled: "disabled", error: "error", itemSubtitle: "itemSubtitle", itemTitle: "itemTitle" }, outputs: { calciteStepperItemKeyEvent: "calciteStepperItemKeyEvent", calciteStepperItemSelect: "calciteStepperItemSelect", calciteStepperItemRegister: "calciteStepperItemRegister" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteStepperItem_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteStepperItem = __decorate([
    ProxyCmp({
        inputs: ['active', 'complete', 'disabled', 'error', 'itemSubtitle', 'itemTitle']
    })
], CalciteStepperItem);
export { CalciteStepperItem };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteStepperItem, [{
        type: Component,
        args: [{
                selector: 'calcite-stepper-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'complete', 'disabled', 'error', 'itemSubtitle', 'itemTitle'],
                outputs: ['calciteStepperItemKeyEvent', 'calciteStepperItemSelect', 'calciteStepperItemRegister']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteStepperItem.prototype.calciteStepperItemKeyEvent;
    /**
     *
     * @type {?}
     */
    CalciteStepperItem.prototype.calciteStepperItemSelect;
    /**
     *
     * @type {?}
     */
    CalciteStepperItem.prototype.calciteStepperItemRegister;
    /**
     * @type {?}
     * @protected
     */
    CalciteStepperItem.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteStepperItem.prototype.z;
}
let CalciteSwitch = class CalciteSwitch {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteSwitchChange']);
    }
};
CalciteSwitch.decorators = [
    { type: Component, args: [{
                selector: 'calcite-switch',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'name', 'scale', 'switched', 'theme', 'value'],
                outputs: ['calciteSwitchChange']
            },] },
];
/** @nocollapse */
CalciteSwitch.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteSwitch.ɵfac = function CalciteSwitch_Factory(t) { return new (t || CalciteSwitch)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteSwitch.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteSwitch, selectors: [["calcite-switch"]], inputs: { disabled: "disabled", name: "name", scale: "scale", switched: "switched", theme: "theme", value: "value" }, outputs: { calciteSwitchChange: "calciteSwitchChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteSwitch_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteSwitch = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'name', 'scale', 'switched', 'theme', 'value']
    })
], CalciteSwitch);
export { CalciteSwitch };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteSwitch, [{
        type: Component,
        args: [{
                selector: 'calcite-switch',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'name', 'scale', 'switched', 'theme', 'value'],
                outputs: ['calciteSwitchChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteSwitch.prototype.calciteSwitchChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteSwitch.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteSwitch.prototype.z;
}
let CalciteTab = class CalciteTab {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteTab.decorators = [
    { type: Component, args: [{
                selector: 'calcite-tab',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'tab']
            },] },
];
/** @nocollapse */
CalciteTab.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteTab.ɵfac = function CalciteTab_Factory(t) { return new (t || CalciteTab)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteTab.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteTab, selectors: [["calcite-tab"]], inputs: { active: "active", tab: "tab" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteTab_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteTab = __decorate([
    ProxyCmp({
        inputs: ['active', 'tab'],
        methods: ['getTabIndex']
    })
], CalciteTab);
export { CalciteTab };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteTab, [{
        type: Component,
        args: [{
                selector: 'calcite-tab',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'tab']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteTab.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteTab.prototype.z;
}
let CalciteTabNav = class CalciteTabNav {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteTabChange']);
    }
};
CalciteTabNav.decorators = [
    { type: Component, args: [{
                selector: 'calcite-tab-nav',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['storageId', 'syncId'],
                outputs: ['calciteTabChange']
            },] },
];
/** @nocollapse */
CalciteTabNav.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteTabNav.ɵfac = function CalciteTabNav_Factory(t) { return new (t || CalciteTabNav)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteTabNav.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteTabNav, selectors: [["calcite-tab-nav"]], inputs: { storageId: "storageId", syncId: "syncId" }, outputs: { calciteTabChange: "calciteTabChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteTabNav_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteTabNav = __decorate([
    ProxyCmp({
        inputs: ['storageId', 'syncId']
    })
], CalciteTabNav);
export { CalciteTabNav };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteTabNav, [{
        type: Component,
        args: [{
                selector: 'calcite-tab-nav',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['storageId', 'syncId'],
                outputs: ['calciteTabChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted when the active tab changes
     * @type {?}
     */
    CalciteTabNav.prototype.calciteTabChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteTabNav.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteTabNav.prototype.z;
}
let CalciteTabTitle = class CalciteTabTitle {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteTabsActivate']);
    }
};
CalciteTabTitle.decorators = [
    { type: Component, args: [{
                selector: 'calcite-tab-title',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'disabled', 'iconEnd', 'iconFlipRtl', 'iconStart', 'tab'],
                outputs: ['calciteTabsActivate']
            },] },
];
/** @nocollapse */
CalciteTabTitle.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteTabTitle.ɵfac = function CalciteTabTitle_Factory(t) { return new (t || CalciteTabTitle)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteTabTitle.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteTabTitle, selectors: [["calcite-tab-title"]], inputs: { active: "active", disabled: "disabled", iconEnd: "iconEnd", iconFlipRtl: "iconFlipRtl", iconStart: "iconStart", tab: "tab" }, outputs: { calciteTabsActivate: "calciteTabsActivate" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteTabTitle_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteTabTitle = __decorate([
    ProxyCmp({
        inputs: ['active', 'disabled', 'iconEnd', 'iconFlipRtl', 'iconStart', 'tab'],
        methods: ['getTabIndex']
    })
], CalciteTabTitle);
export { CalciteTabTitle };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteTabTitle, [{
        type: Component,
        args: [{
                selector: 'calcite-tab-title',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'disabled', 'iconEnd', 'iconFlipRtl', 'iconStart', 'tab'],
                outputs: ['calciteTabsActivate']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Fires when a specific tab is activated. `event.details`: [TabChangeEventDetail](../../interfaces/TabChange.ts)
     * @type {?}
     */
    CalciteTabTitle.prototype.calciteTabsActivate;
    /**
     * @type {?}
     * @protected
     */
    CalciteTabTitle.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteTabTitle.prototype.z;
}
let CalciteTabs = class CalciteTabs {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteTabs.decorators = [
    { type: Component, args: [{
                selector: 'calcite-tabs',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['layout', 'position', 'theme']
            },] },
];
/** @nocollapse */
CalciteTabs.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteTabs.ɵfac = function CalciteTabs_Factory(t) { return new (t || CalciteTabs)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteTabs.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteTabs, selectors: [["calcite-tabs"]], inputs: { layout: "layout", position: "position", theme: "theme" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteTabs_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteTabs = __decorate([
    ProxyCmp({
        inputs: ['layout', 'position', 'theme']
    })
], CalciteTabs);
export { CalciteTabs };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteTabs, [{
        type: Component,
        args: [{
                selector: 'calcite-tabs',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['layout', 'position', 'theme']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteTabs.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteTabs.prototype.z;
}
let CalciteTile = class CalciteTile {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteTile.decorators = [
    { type: Component, args: [{
                selector: 'calcite-tile',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'description', 'embed', 'focused', 'heading', 'hidden', 'href', 'icon', 'theme']
            },] },
];
/** @nocollapse */
CalciteTile.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteTile.ɵfac = function CalciteTile_Factory(t) { return new (t || CalciteTile)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteTile.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteTile, selectors: [["calcite-tile"]], inputs: { active: "active", description: "description", embed: "embed", focused: "focused", heading: "heading", hidden: "hidden", href: "href", icon: "icon", theme: "theme" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteTile_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteTile = __decorate([
    ProxyCmp({
        inputs: ['active', 'description', 'embed', 'focused', 'heading', 'hidden', 'href', 'icon', 'theme']
    })
], CalciteTile);
export { CalciteTile };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteTile, [{
        type: Component,
        args: [{
                selector: 'calcite-tile',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['active', 'description', 'embed', 'focused', 'heading', 'hidden', 'href', 'icon', 'theme']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteTile.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteTile.prototype.z;
}
let CalciteTileSelect = class CalciteTileSelect {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteTileSelect.decorators = [
    { type: Component, args: [{
                selector: 'calcite-tile-select',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['checked', 'description', 'disabled', 'focused', 'heading', 'hidden', 'icon', 'name', 'showInput', 'theme', 'type', 'value', 'width']
            },] },
];
/** @nocollapse */
CalciteTileSelect.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteTileSelect.ɵfac = function CalciteTileSelect_Factory(t) { return new (t || CalciteTileSelect)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteTileSelect.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteTileSelect, selectors: [["calcite-tile-select"]], inputs: { checked: "checked", description: "description", disabled: "disabled", focused: "focused", heading: "heading", hidden: "hidden", icon: "icon", name: "name", showInput: "showInput", theme: "theme", type: "type", value: "value", width: "width" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteTileSelect_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteTileSelect = __decorate([
    ProxyCmp({
        inputs: ['checked', 'description', 'disabled', 'focused', 'heading', 'hidden', 'icon', 'name', 'showInput', 'theme', 'type', 'value', 'width']
    })
], CalciteTileSelect);
export { CalciteTileSelect };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteTileSelect, [{
        type: Component,
        args: [{
                selector: 'calcite-tile-select',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['checked', 'description', 'disabled', 'focused', 'heading', 'hidden', 'icon', 'name', 'showInput', 'theme', 'type', 'value', 'width']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteTileSelect.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteTileSelect.prototype.z;
}
let CalciteTileSelectGroup = class CalciteTileSelectGroup {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteTileSelectGroup.decorators = [
    { type: Component, args: [{
                selector: 'calcite-tile-select-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['layout']
            },] },
];
/** @nocollapse */
CalciteTileSelectGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteTileSelectGroup.ɵfac = function CalciteTileSelectGroup_Factory(t) { return new (t || CalciteTileSelectGroup)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteTileSelectGroup.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteTileSelectGroup, selectors: [["calcite-tile-select-group"]], inputs: { layout: "layout" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteTileSelectGroup_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteTileSelectGroup = __decorate([
    ProxyCmp({
        inputs: ['layout']
    })
], CalciteTileSelectGroup);
export { CalciteTileSelectGroup };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteTileSelectGroup, [{
        type: Component,
        args: [{
                selector: 'calcite-tile-select-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['layout']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteTileSelectGroup.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteTileSelectGroup.prototype.z;
}
let CalciteTip = class CalciteTip {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteTipDismiss']);
    }
};
CalciteTip.decorators = [
    { type: Component, args: [{
                selector: 'calcite-tip',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['dismissed', 'heading', 'intlClose', 'nonDismissible', 'selected', 'theme'],
                outputs: ['calciteTipDismiss']
            },] },
];
/** @nocollapse */
CalciteTip.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteTip.ɵfac = function CalciteTip_Factory(t) { return new (t || CalciteTip)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteTip.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteTip, selectors: [["calcite-tip"]], inputs: { dismissed: "dismissed", heading: "heading", intlClose: "intlClose", nonDismissible: "nonDismissible", selected: "selected", theme: "theme" }, outputs: { calciteTipDismiss: "calciteTipDismiss" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteTip_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteTip = __decorate([
    ProxyCmp({
        inputs: ['dismissed', 'heading', 'intlClose', 'nonDismissible', 'selected', 'theme']
    })
], CalciteTip);
export { CalciteTip };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteTip, [{
        type: Component,
        args: [{
                selector: 'calcite-tip',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['dismissed', 'heading', 'intlClose', 'nonDismissible', 'selected', 'theme'],
                outputs: ['calciteTipDismiss']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted when the component has been dismissed.
     * @type {?}
     */
    CalciteTip.prototype.calciteTipDismiss;
    /**
     * @type {?}
     * @protected
     */
    CalciteTip.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteTip.prototype.z;
}
let CalciteTipGroup = class CalciteTipGroup {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteTipGroup.decorators = [
    { type: Component, args: [{
                selector: 'calcite-tip-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['groupTitle']
            },] },
];
/** @nocollapse */
CalciteTipGroup.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteTipGroup.ɵfac = function CalciteTipGroup_Factory(t) { return new (t || CalciteTipGroup)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteTipGroup.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteTipGroup, selectors: [["calcite-tip-group"]], inputs: { groupTitle: "groupTitle" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteTipGroup_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteTipGroup = __decorate([
    ProxyCmp({
        inputs: ['groupTitle']
    })
], CalciteTipGroup);
export { CalciteTipGroup };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteTipGroup, [{
        type: Component,
        args: [{
                selector: 'calcite-tip-group',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['groupTitle']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteTipGroup.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteTipGroup.prototype.z;
}
let CalciteTipManager = class CalciteTipManager {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteTipManagerToggle']);
    }
};
CalciteTipManager.decorators = [
    { type: Component, args: [{
                selector: 'calcite-tip-manager',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['closed', 'intlClose', 'intlDefaultTitle', 'intlNext', 'intlPaginationLabel', 'intlPrevious', 'theme'],
                outputs: ['calciteTipManagerToggle']
            },] },
];
/** @nocollapse */
CalciteTipManager.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteTipManager.ɵfac = function CalciteTipManager_Factory(t) { return new (t || CalciteTipManager)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteTipManager.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteTipManager, selectors: [["calcite-tip-manager"]], inputs: { closed: "closed", intlClose: "intlClose", intlDefaultTitle: "intlDefaultTitle", intlNext: "intlNext", intlPaginationLabel: "intlPaginationLabel", intlPrevious: "intlPrevious", theme: "theme" }, outputs: { calciteTipManagerToggle: "calciteTipManagerToggle" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteTipManager_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteTipManager = __decorate([
    ProxyCmp({
        inputs: ['closed', 'intlClose', 'intlDefaultTitle', 'intlNext', 'intlPaginationLabel', 'intlPrevious', 'theme'],
        methods: ['nextTip', 'previousTip']
    })
], CalciteTipManager);
export { CalciteTipManager };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteTipManager, [{
        type: Component,
        args: [{
                selector: 'calcite-tip-manager',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['closed', 'intlClose', 'intlDefaultTitle', 'intlNext', 'intlPaginationLabel', 'intlPrevious', 'theme'],
                outputs: ['calciteTipManagerToggle']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted when the `calcite-tip-manager` has been toggled open or closed.
     * @type {?}
     */
    CalciteTipManager.prototype.calciteTipManagerToggle;
    /**
     * @type {?}
     * @protected
     */
    CalciteTipManager.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteTipManager.prototype.z;
}
let CalciteTooltip = class CalciteTooltip {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteTooltip.decorators = [
    { type: Component, args: [{
                selector: 'calcite-tooltip',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['label', 'offsetDistance', 'offsetSkidding', 'open', 'placement', 'referenceElement', 'theme']
            },] },
];
/** @nocollapse */
CalciteTooltip.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteTooltip.ɵfac = function CalciteTooltip_Factory(t) { return new (t || CalciteTooltip)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteTooltip.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteTooltip, selectors: [["calcite-tooltip"]], inputs: { label: "label", offsetDistance: "offsetDistance", offsetSkidding: "offsetSkidding", open: "open", placement: "placement", referenceElement: "referenceElement", theme: "theme" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteTooltip_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteTooltip = __decorate([
    ProxyCmp({
        inputs: ['label', 'offsetDistance', 'offsetSkidding', 'open', 'placement', 'referenceElement', 'theme'],
        methods: ['reposition']
    })
], CalciteTooltip);
export { CalciteTooltip };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteTooltip, [{
        type: Component,
        args: [{
                selector: 'calcite-tooltip',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['label', 'offsetDistance', 'offsetSkidding', 'open', 'placement', 'referenceElement', 'theme']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteTooltip.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteTooltip.prototype.z;
}
let CalciteTooltipManager = class CalciteTooltipManager {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
CalciteTooltipManager.decorators = [
    { type: Component, args: [{
                selector: 'calcite-tooltip-manager',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['selector']
            },] },
];
/** @nocollapse */
CalciteTooltipManager.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteTooltipManager.ɵfac = function CalciteTooltipManager_Factory(t) { return new (t || CalciteTooltipManager)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteTooltipManager.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteTooltipManager, selectors: [["calcite-tooltip-manager"]], inputs: { selector: "selector" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteTooltipManager_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteTooltipManager = __decorate([
    ProxyCmp({
        inputs: ['selector']
    })
], CalciteTooltipManager);
export { CalciteTooltipManager };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteTooltipManager, [{
        type: Component,
        args: [{
                selector: 'calcite-tooltip-manager',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['selector']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CalciteTooltipManager.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteTooltipManager.prototype.z;
}
let CalciteTree = class CalciteTree {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteTreeSelect']);
    }
};
CalciteTree.decorators = [
    { type: Component, args: [{
                selector: 'calcite-tree',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['lines', 'scale', 'selectionMode', 'theme'],
                outputs: ['calciteTreeSelect']
            },] },
];
/** @nocollapse */
CalciteTree.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteTree.ɵfac = function CalciteTree_Factory(t) { return new (t || CalciteTree)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteTree.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteTree, selectors: [["calcite-tree"]], inputs: { lines: "lines", scale: "scale", selectionMode: "selectionMode", theme: "theme" }, outputs: { calciteTreeSelect: "calciteTreeSelect" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteTree_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteTree = __decorate([
    ProxyCmp({
        inputs: ['lines', 'scale', 'selectionMode', 'theme']
    })
], CalciteTree);
export { CalciteTree };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteTree, [{
        type: Component,
        args: [{
                selector: 'calcite-tree',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['lines', 'scale', 'selectionMode', 'theme'],
                outputs: ['calciteTreeSelect']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteTree.prototype.calciteTreeSelect;
    /**
     * @type {?}
     * @protected
     */
    CalciteTree.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteTree.prototype.z;
}
let CalciteTreeItem = class CalciteTreeItem {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteTreeItemSelect']);
    }
};
CalciteTreeItem.decorators = [
    { type: Component, args: [{
                selector: 'calcite-tree-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['expanded', 'selected'],
                outputs: ['calciteTreeItemSelect']
            },] },
];
/** @nocollapse */
CalciteTreeItem.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteTreeItem.ɵfac = function CalciteTreeItem_Factory(t) { return new (t || CalciteTreeItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteTreeItem.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteTreeItem, selectors: [["calcite-tree-item"]], inputs: { expanded: "expanded", selected: "selected" }, outputs: { calciteTreeItemSelect: "calciteTreeItemSelect" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteTreeItem_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteTreeItem = __decorate([
    ProxyCmp({
        inputs: ['expanded', 'selected']
    })
], CalciteTreeItem);
export { CalciteTreeItem };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteTreeItem, [{
        type: Component,
        args: [{
                selector: 'calcite-tree-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['expanded', 'selected'],
                outputs: ['calciteTreeItemSelect']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     *
     * @type {?}
     */
    CalciteTreeItem.prototype.calciteTreeItemSelect;
    /**
     * @type {?}
     * @protected
     */
    CalciteTreeItem.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteTreeItem.prototype.z;
}
let CalciteValueList = class CalciteValueList {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteListChange', 'calciteListOrderChange']);
    }
};
CalciteValueList.decorators = [
    { type: Component, args: [{
                selector: 'calcite-value-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'dragEnabled', 'filterEnabled', 'filterPlaceholder', 'group', 'loading', 'multiple'],
                outputs: ['calciteListChange', 'calciteListOrderChange']
            },] },
];
/** @nocollapse */
CalciteValueList.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteValueList.ɵfac = function CalciteValueList_Factory(t) { return new (t || CalciteValueList)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteValueList.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteValueList, selectors: [["calcite-value-list"]], inputs: { disabled: "disabled", dragEnabled: "dragEnabled", filterEnabled: "filterEnabled", filterPlaceholder: "filterPlaceholder", group: "group", loading: "loading", multiple: "multiple" }, outputs: { calciteListChange: "calciteListChange", calciteListOrderChange: "calciteListOrderChange" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteValueList_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteValueList = __decorate([
    ProxyCmp({
        inputs: ['disabled', 'dragEnabled', 'filterEnabled', 'filterPlaceholder', 'group', 'loading', 'multiple'],
        methods: ['getSelectedItems', 'setFocus']
    })
], CalciteValueList);
export { CalciteValueList };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteValueList, [{
        type: Component,
        args: [{
                selector: 'calcite-value-list',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['disabled', 'dragEnabled', 'filterEnabled', 'filterPlaceholder', 'group', 'loading', 'multiple'],
                outputs: ['calciteListChange', 'calciteListOrderChange']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted when any of the item selections have changed. \@event calciteListChange
     * @type {?}
     */
    CalciteValueList.prototype.calciteListChange;
    /**
     * Emmitted when the order of the list has changed. \@event calciteListOrderChange
     * @type {?}
     */
    CalciteValueList.prototype.calciteListOrderChange;
    /**
     * @type {?}
     * @protected
     */
    CalciteValueList.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteValueList.prototype.z;
}
let CalciteValueListItem = class CalciteValueListItem {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['calciteListItemRemove']);
    }
};
CalciteValueListItem.decorators = [
    { type: Component, args: [{
                selector: 'calcite-value-list-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['description', 'disabled', 'icon', 'label', 'metadata', 'removable', 'selected', 'value'],
                outputs: ['calciteListItemRemove']
            },] },
];
/** @nocollapse */
CalciteValueListItem.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
/** @nocollapse */ CalciteValueListItem.ɵfac = function CalciteValueListItem_Factory(t) { return new (t || CalciteValueListItem)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
/** @nocollapse */ CalciteValueListItem.ɵcmp = i0.ɵɵdefineComponent({ type: CalciteValueListItem, selectors: [["calcite-value-list-item"]], inputs: { description: "description", disabled: "disabled", icon: "icon", label: "label", metadata: "metadata", removable: "removable", selected: "selected", value: "value" }, outputs: { calciteListItemRemove: "calciteListItemRemove" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function CalciteValueListItem_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
CalciteValueListItem = __decorate([
    ProxyCmp({
        inputs: ['description', 'disabled', 'icon', 'label', 'metadata', 'removable', 'selected', 'value'],
        methods: ['toggleSelected', 'setFocus']
    })
], CalciteValueListItem);
export { CalciteValueListItem };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CalciteValueListItem, [{
        type: Component,
        args: [{
                selector: 'calcite-value-list-item',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                inputs: ['description', 'disabled', 'icon', 'label', 'metadata', 'removable', 'selected', 'value'],
                outputs: ['calciteListItemRemove']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }]; }, null); })();
if (false) {
    /**
     * Emitted whenever the remove button is pressed. \@event calciteListItemRemove
     * @type {?}
     */
    CalciteValueListItem.prototype.calciteListItemRemove;
    /**
     * @type {?}
     * @protected
     */
    CalciteValueListItem.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    CalciteValueListItem.prototype.z;
}

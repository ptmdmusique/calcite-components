/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
export class SelectValueAccessor extends ValueAccessor {
    /**
     * @param {?} el
     */
    constructor(el) {
        super(el);
    }
}
SelectValueAccessor.decorators = [
    { type: Directive, args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'my-range, my-radio-group',
                host: {
                    '(myChange)': 'handleChangeEvent($event.target.value)'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: SelectValueAccessor,
                        multi: true
                    }
                ]
            },] },
];
/** @nocollapse */
SelectValueAccessor.ctorParameters = () => [
    { type: ElementRef }
];
/** @nocollapse */ SelectValueAccessor.ɵfac = function SelectValueAccessor_Factory(t) { return new (t || SelectValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
/** @nocollapse */ SelectValueAccessor.ɵdir = i0.ɵɵdefineDirective({ type: SelectValueAccessor, selectors: [["my-range"], ["my-radio-group"]], hostBindings: function SelectValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("myChange", function SelectValueAccessor_myChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.value); });
    } }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: SelectValueAccessor,
                multi: true
            }
        ]), i0.ɵɵInheritDefinitionFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectValueAccessor, [{
        type: Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'my-range, my-radio-group',
                host: {
                    '(myChange)': 'handleChangeEvent($event.target.value)'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: SelectValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();

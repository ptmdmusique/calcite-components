import { __extends } from "tslib";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
var NumericValueAccessor = /** @class */ (function (_super) {
    __extends(NumericValueAccessor, _super);
    function NumericValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    NumericValueAccessor.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        _super.prototype.registerOnChange.call(this, (/**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            fn(value === '' ? null : parseFloat(value));
        }));
    };
    NumericValueAccessor.decorators = [
        { type: Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'calcite-input[type=number]',
                    host: {
                        '(calciteInputInput)': 'handleChangeEvent($event.target.value)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: NumericValueAccessor,
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    NumericValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    /** @nocollapse */ NumericValueAccessor.ɵfac = function NumericValueAccessor_Factory(t) { return new (t || NumericValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ NumericValueAccessor.ɵdir = i0.ɵɵdefineDirective({ type: NumericValueAccessor, selectors: [["calcite-input", "type", "number"]], hostBindings: function NumericValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("calciteInputInput", function NumericValueAccessor_calciteInputInput_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.value); });
        } }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: NumericValueAccessor,
                    multi: true
                }
            ]), i0.ɵɵInheritDefinitionFeature] });
    return NumericValueAccessor;
}(ValueAccessor));
export { NumericValueAccessor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NumericValueAccessor, [{
        type: Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'calcite-input[type=number]',
                host: {
                    '(calciteInputInput)': 'handleChangeEvent($event.target.value)'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: NumericValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();

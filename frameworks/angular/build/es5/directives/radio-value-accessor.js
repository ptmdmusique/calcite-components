import { __extends } from "tslib";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
var RadioValueAccessor = /** @class */ (function (_super) {
    __extends(RadioValueAccessor, _super);
    function RadioValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    RadioValueAccessor.decorators = [
        { type: Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: 'calcite-radio-group-item',
                    host: {
                        '(calciteRadioGroupItemChange)': 'handleChangeEvent($event.target.checked)'
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: RadioValueAccessor,
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    RadioValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    /** @nocollapse */ RadioValueAccessor.ɵfac = function RadioValueAccessor_Factory(t) { return new (t || RadioValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ RadioValueAccessor.ɵdir = i0.ɵɵdefineDirective({ type: RadioValueAccessor, selectors: [["calcite-radio-group-item"]], hostBindings: function RadioValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("calciteRadioGroupItemChange", function RadioValueAccessor_calciteRadioGroupItemChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.checked); });
        } }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: RadioValueAccessor,
                    multi: true
                }
            ]), i0.ɵɵInheritDefinitionFeature] });
    return RadioValueAccessor;
}(ValueAccessor));
export { RadioValueAccessor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RadioValueAccessor, [{
        type: Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: 'calcite-radio-group-item',
                host: {
                    '(calciteRadioGroupItemChange)': 'handleChangeEvent($event.target.checked)'
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: RadioValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();

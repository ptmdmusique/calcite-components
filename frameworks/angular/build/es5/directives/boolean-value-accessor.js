import { __extends } from "tslib";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { ValueAccessor } from "./value-accessor";
import * as i0 from "@angular/core";
var BooleanValueAccessor = /** @class */ (function (_super) {
    __extends(BooleanValueAccessor, _super);
    function BooleanValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    BooleanValueAccessor.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.el.nativeElement.checked = this.lastValue = value == null ? false : value;
    };
    BooleanValueAccessor.decorators = [
        { type: Directive, args: [{
                    /* tslint:disable-next-line:directive-selector */
                    selector: "calcite-checkbox",
                    host: {
                        "(calciteCheckboxChange)": "handleChangeEvent($event.target.checked)"
                    },
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: BooleanValueAccessor,
                            multi: true
                        }
                    ]
                },] },
    ];
    /** @nocollapse */
    BooleanValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    /** @nocollapse */ BooleanValueAccessor.ɵfac = function BooleanValueAccessor_Factory(t) { return new (t || BooleanValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ BooleanValueAccessor.ɵdir = i0.ɵɵdefineDirective({ type: BooleanValueAccessor, selectors: [["calcite-checkbox"]], hostBindings: function BooleanValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("calciteCheckboxChange", function BooleanValueAccessor_calciteCheckboxChange_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.checked); });
        } }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: BooleanValueAccessor,
                    multi: true
                }
            ]), i0.ɵɵInheritDefinitionFeature] });
    return BooleanValueAccessor;
}(ValueAccessor));
export { BooleanValueAccessor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(BooleanValueAccessor, [{
        type: Directive,
        args: [{
                /* tslint:disable-next-line:directive-selector */
                selector: "calcite-checkbox",
                host: {
                    "(calciteCheckboxChange)": "handleChangeEvent($event.target.checked)"
                },
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: BooleanValueAccessor,
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();

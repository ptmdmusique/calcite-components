import { __extends } from "tslib";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValueAccessor } from './value-accessor';
import * as i0 from "@angular/core";
var TextValueAccessor = /** @class */ (function (_super) {
    __extends(TextValueAccessor, _super);
    function TextValueAccessor(el) {
        return _super.call(this, el) || this;
    }
    TextValueAccessor.decorators = [
        { type: Directive, args: [{
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
                },] },
    ];
    /** @nocollapse */
    TextValueAccessor.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    /** @nocollapse */ TextValueAccessor.ɵfac = function TextValueAccessor_Factory(t) { return new (t || TextValueAccessor)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    /** @nocollapse */ TextValueAccessor.ɵdir = i0.ɵɵdefineDirective({ type: TextValueAccessor, selectors: [["calcite-input", "type", "color"], ["calcite-input", "type", "date"], ["calcite-input", "type", "datetime-local"], ["calcite-input", "type", "email"], ["calcite-input", "type", "file"], ["calcite-input", "type", "image"], ["calcite-input", "type", "month"], ["calcite-input", "type", "password"], ["calcite-input", "type", "search"], ["calcite-input", "type", "tel"], ["calcite-input", "type", "text"], ["calcite-input", "type", "textarea"], ["calcite-input", "type", "time"], ["calcite-input", "type", "url"], ["calcite-input", "type", "week"]], hostBindings: function TextValueAccessor_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("calciteInputInput", function TextValueAccessor_calciteInputInput_HostBindingHandler($event) { return ctx.handleChangeEvent($event.target.value); });
        } }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: TextValueAccessor,
                    multi: true
                }
            ]), i0.ɵɵInheritDefinitionFeature] });
    return TextValueAccessor;
}(ValueAccessor));
export { TextValueAccessor };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextValueAccessor, [{
        type: Directive,
        args: [{
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
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, null); })();

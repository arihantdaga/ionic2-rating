import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ionic2Rating } from "./ionic2-rating";
import { IonicModule } from "@ionic/angular";
import * as i0 from "@angular/core";
var Ionic2RatingModule = /** @class */ (function () {
    function Ionic2RatingModule() {
    }
    Ionic2RatingModule.ɵfac = function Ionic2RatingModule_Factory(t) { return new (t || Ionic2RatingModule)(); };
    Ionic2RatingModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: Ionic2RatingModule });
    Ionic2RatingModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
            IonicModule] });
    return Ionic2RatingModule;
}());
export { Ionic2RatingModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Ionic2RatingModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    Ionic2Rating
                ],
                exports: [
                    Ionic2Rating
                ],
                imports: [
                    CommonModule,
                    IonicModule
                ],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(Ionic2RatingModule, { declarations: [Ionic2Rating], imports: [CommonModule,
        IonicModule], exports: [Ionic2Rating] }); })();
//# sourceMappingURL=ionic2-rating.module.js.map
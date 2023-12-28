import { Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ionic/angular";
function Ionic2Rating_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 2);
    i0.ɵɵlistener("click", function Ionic2Rating_li_1_Template_li_click_0_listener() { var restoredCtx = i0.ɵɵrestoreView(_r3); var starIndex_r1 = restoredCtx.$implicit; var ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.rate(starIndex_r1 + 1)); });
    i0.ɵɵelement(1, "ion-icon", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var starIndex_r1 = ctx.$implicit;
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", ctx_r0.getStarIconName(starIndex_r1));
} }
var noop = function () { };
export var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return Ionic2Rating; }),
    multi: true
};
var Ionic2Rating = /** @class */ (function () {
    function Ionic2Rating() {
        this._max = 5;
        this._readOnly = false;
        this._emptyStarIconName = 'star-outline';
        this._halfStarIconName = 'star-half';
        this._starIconName = 'star';
        this._nullable = false;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(Ionic2Rating.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (val) {
            var newValue = this.getNumberPropertyValue(val);
            if (newValue !== this._max) {
                this._max = newValue;
                this.createStarIndexes();
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (val) {
            this._readOnly = this.isTrueProperty(val);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "emptyStarIconName", {
        get: function () {
            return this._emptyStarIconName;
        },
        set: function (val) {
            this._emptyStarIconName = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "halfStarIconName", {
        get: function () {
            return this._halfStarIconName;
        },
        set: function (val) {
            this._halfStarIconName = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "starIconName", {
        get: function () {
            return this._starIconName;
        },
        set: function (val) {
            this._starIconName = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "nullable", {
        get: function () {
            return this._nullable;
        },
        set: function (val) {
            this._nullable = this.isTrueProperty(val);
        },
        enumerable: false,
        configurable: true
    });
    Ionic2Rating.prototype.ngOnInit = function () {
        // ngFor works with arrays only
        this.createStarIndexes();
    };
    Ionic2Rating.prototype.createStarIndexes = function () {
        this.starIndexes = Array(this.max).fill(1).map(function (x, i) { return i; });
    };
    Ionic2Rating.prototype.getStarIconName = function (starIndex) {
        if (this.value === undefined) {
            return this.emptyStarIconName;
        }
        if (this.value > starIndex) {
            if (this.value < starIndex + 1) {
                return this.halfStarIconName;
            }
            return this.starIconName;
        }
        return this.emptyStarIconName;
    };
    Object.defineProperty(Ionic2Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue) {
                this.innerValue = value;
                this.onChangeCallback(value);
            }
        },
        enumerable: false,
        configurable: true
    });
    Ionic2Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Ionic2Rating.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    Ionic2Rating.prototype.registerOnTouched = function () { };
    Ionic2Rating.prototype.onKeyDown = function (event) {
        if (/(37|38|39|40)/.test(event.which)) {
            event.preventDefault();
            event.stopPropagation();
            var newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
            return this.rate(newValue);
        }
    };
    Ionic2Rating.prototype.rate = function (value) {
        if (this.readOnly || value < 0 || value > this.max) {
            return;
        }
        if (value === this.value && this.nullable) {
            value = null;
        }
        this.value = value;
    };
    Ionic2Rating.prototype.isTrueProperty = function (val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on');
        }
        return !!val;
    };
    Ionic2Rating.prototype.getNumberPropertyValue = function (val) {
        if (typeof val === 'string') {
            return parseInt(val.trim());
        }
        return val;
    };
    Ionic2Rating.ɵfac = function Ionic2Rating_Factory(t) { return new (t || Ionic2Rating)(); };
    Ionic2Rating.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Ionic2Rating, selectors: [["rating"]], inputs: { max: "max", readOnly: "readOnly", emptyStarIconName: "emptyStarIconName", halfStarIconName: "halfStarIconName", starIconName: "starIconName", nullable: "nullable" }, features: [i0.ɵɵProvidersFeature([RATING_CONTROL_VALUE_ACCESSOR])], decls: 2, vars: 1, consts: [[1, "rating", 3, "keydown"], ["tappable", "", 3, "click", 4, "ngFor", "ngForOf"], ["tappable", "", 3, "click"], [3, "name"]], template: function Ionic2Rating_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 0);
            i0.ɵɵlistener("keydown", function Ionic2Rating_Template_ul_keydown_0_listener($event) { return ctx.onKeyDown($event); });
            i0.ɵɵtemplate(1, Ionic2Rating_li_1_Template, 2, 1, "li", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.starIndexes);
        } }, dependencies: [i1.NgForOf, i2.IonIcon], styles: ["\n    ul.rating li {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 10px;\n    }\n    ul.rating li i {\n      font-size: 30px;\n    }\n  "], encapsulation: 2 });
    return Ionic2Rating;
}());
export { Ionic2Rating };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Ionic2Rating, [{
        type: Component,
        args: [{ selector: 'rating', encapsulation: ViewEncapsulation.None, template: "\n    <ul class=\"rating\" (keydown)=\"onKeyDown($event)\">\n      <li *ngFor=\"let starIndex of starIndexes\" tappable (click)=\"rate(starIndex + 1)\">\n        <ion-icon [name]=\"getStarIconName(starIndex)\">\n        </ion-icon>\n      </li>\n    </ul>", providers: [RATING_CONTROL_VALUE_ACCESSOR], styles: ["\n    ul.rating li {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 10px;\n    }\n    ul.rating li i {\n      font-size: 30px;\n    }\n  "] }]
    }], null, { max: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], emptyStarIconName: [{
            type: Input
        }], halfStarIconName: [{
            type: Input
        }], starIconName: [{
            type: Input
        }], nullable: [{
            type: Input
        }] }); })();
//# sourceMappingURL=ionic2-rating.js.map
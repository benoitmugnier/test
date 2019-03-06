var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { AgmSnazzyInfoWindow } from './directives/snazzy-info-window';
var AgmSnazzyInfoWindowModule = /** @class */ (function () {
    function AgmSnazzyInfoWindowModule() {
    }
    AgmSnazzyInfoWindowModule = __decorate([
        NgModule({
            declarations: [AgmSnazzyInfoWindow],
            exports: [AgmSnazzyInfoWindow]
        })
    ], AgmSnazzyInfoWindowModule);
    return AgmSnazzyInfoWindowModule;
}());
export { AgmSnazzyInfoWindowModule };
//# sourceMappingURL=snazzy-info-window.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PowertrainModule = void 0;
var common_1 = require("@nestjs/common");
var powertrain_controller_1 = require("./powertrain.controller");
var powertrain_service_1 = require("./powertrain.service");
var PowertrainModule = /** @class */ (function () {
    function PowertrainModule() {
    }
    PowertrainModule = __decorate([
        (0, common_1.Module)({
            controllers: [powertrain_controller_1.PowertrainController],
            providers: [powertrain_service_1.PowertrainService]
        })
    ], PowertrainModule);
    return PowertrainModule;
}());
exports.PowertrainModule = PowertrainModule;

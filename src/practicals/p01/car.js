"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car() {
        this.brand = "";
        this.model = "";
    }
    Car.prototype.start = function () {
        console.log("".concat(this.brand, " ").concat(this.model, " is starting..."));
    };
    Car.prototype.accelerate = function () {
        console.log("".concat(this.brand, " ").concat(this.model, " is accelerating..."));
    };
    Car.prototype.brake = function () {
        console.log("".concat(this.brand, " ").concat(this.model, " is braking..."));
    };
    Car.prototype.stop = function () {
        console.log("".concat(this.brand, " ").concat(this.model, " is stopping..."));
    };
    return Car;
}());
exports.Car = Car;

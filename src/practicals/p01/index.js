"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car");
var car = new car_1.Car();
car.brand = "Toyota";
car.model = "Camry";
car.start();
// Toyota Camry is starting...
car.accelerate();
// Toyota Camry is accelerating...
car.brake();
// Toyota Camry is braking...
car.stop();
// Toyota Camry is stopping...

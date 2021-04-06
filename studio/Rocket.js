"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        /*if(typeof items==='undefined')
            return 0;
            else{
                items.forEach(element => {
            
                    sum += element.massKg;
                 });
                return sum;
            }*/
        var i = 0;
        for (i = 0; i < items.length; i++) {
            sum += items[i].massKg;
        }
        return sum;
    };
    Rocket.prototype.currentMassKg = function () {
        var sum1 = this.sumMass(this.astronauts);
        sum1 += this.sumMass(this.cargoItems);
        return sum1;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg)
            return true;
        else
            return false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            /*if(typeof this.cargoItems==='undefined')
            {
                this.cargoItems.unshift(cargo);
                return true;
            }
            else
            {*/
            this.cargoItems.push(cargo);
            return true;
            //}
        }
        else
            return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            /*if(typeof this.astronauts==='undefined')
            {
                this.astronauts[0]=astronaut;
                return true;
            }
            else
            {*/
            this.astronauts.push(astronaut);
            return true;
            //}
        }
        else
            return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;

import { Character } from "./character";

export class Warrior extends Character {
    weapon: string = "";

    constructor(name: string, weapon: string, health: number = 100) {
        super(name);
        this.weapon = weapon;
        this.health = health;
    }

    getWeapon() {
        return this.weapon;
    }

    receiveDamage(damage: number) {
        // Warrior reduces damage by 10%
        const reducedDamage = damage * 0.9;
        this.health -= reducedDamage;
    }
}

export class Character {
    name: string = "";
    health: number = 100;

    constructor(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
    getHealth() {
        return this.health;
    }
    receiveDamage(damage: number) {
        this.health -= damage;
    }
}

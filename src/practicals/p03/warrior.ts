import { Character } from "./character";

export class Warrior extends Character {
  // TODO: implement class properties, constructor with super(...), and methods
  weapon:string=""

  constructor(name:string,weapon:string,health:number=100){
    super()
    this.name=name
    this.weapon=weapon
    this.health=health
  }
  getWeapon(){
    return this.weapon
  }
  getHealth(): number {
    return this.health
  }
  receiveDamage(damage: number): void {
    const reducedDamage = damage * 0.9
    this.health -= reducedDamage
    console.log(`${this.name} received ${reducedDamage.toFixed(2)} damage after reduction. Remaining health: ${this.health.toFixed(2)}`)
  }
}

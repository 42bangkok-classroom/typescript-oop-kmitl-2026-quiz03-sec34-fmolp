export class Character {
    name:string=""
    health:number=100
    damageReduction:number=10

    getName(){
        return this.name
    }
    getHealth(){
        return this.health
    }
    receiveDamage(damage:number){
        this.health-=damage
        console.log(`${this.name} received ${damage} damage. Remaining health: ${this.health}`)
    }
}

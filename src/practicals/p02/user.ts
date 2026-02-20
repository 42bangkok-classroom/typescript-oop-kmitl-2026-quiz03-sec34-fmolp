export class User {
    firstName:string=""
    lastName:string=""
    private age:string=""
    static BIRTH_YEAR:number=2000

    setFirstName(firstName:string){
        this.firstName=firstName
    }
    setLastName(lastName:string){
        this.lastName=lastName
    }
    setAge(age:number){
        this.age=age.toString()
    }
    getAge(){
        return this.age
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

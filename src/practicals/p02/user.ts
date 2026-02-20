export class User {
    firstName:string=""
    lastName:string=""
    private age:number=0
    static BIRTH_YEAR:number=2000

    setFirstname(firstName:string){
        this.firstName=firstName
    }
    setLastname(lastName:string){
        this.lastName=lastName
    }
    setAge(age:number){
        this.age=age
    }
    getAge(){
        return this.age
    }
    getFullName(){
        if (this.firstName && this.lastName) {
            return `${this.firstName} ${this.lastName}`;
        } else if (this.firstName) {
            return this.firstName;
        } else if (this.lastName) {
            return this.lastName;
        } else {
            return "";
        }
    }
}

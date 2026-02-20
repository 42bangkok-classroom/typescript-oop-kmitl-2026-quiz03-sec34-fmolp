import { User } from "./user";

const user = new User();

user.setFirstname("John");
user.setLastname("Doe");
user.setAge(25);

console.log(user.getFullName());
// John Doe

console.log(user.getAge());
// 25

console.log(User.BIRTH_YEAR);
// 2000

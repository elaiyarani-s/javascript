class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
        console.warn('Changed the name')
    }
}

const p1 = new Person('John', 'Doe');

console.log(p1.fullName);
p1.fullName = "Bob Bobson";
console.log(p1.fullName);
class Rectangle{
    constructor(width,height,color){
        this.width = width;
        this.height=height;
        this.color=color;
    }

    calcArea(){
        return this.width * this.height;
    }

}

let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

class Person{
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }

}

let newperson = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
console.log(newperson.toString());

function getPerson() {
    const person = [
        new Person('Maria', 'Petterson', 22, 'mp@gmail.com'),
        new Person('Lexicon'),
        new Person('Stefan', 'Larsson', 25),
        new Person('Peter', 'Jansson', 24, 'g.ptr@live.com')
    ];
    return person;
}

// const people = getPerson();

// people.forEach(person => {
//     console.log(person.toString());
// });

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(value){
        this.radius = value / 2;
    }

    area(){
        return Math.PI * this.radius ** 2;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);

c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(pt1, pt2){
        const dx = pt1.x - pt2.x;
        const dy = pt1.y - pt2.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
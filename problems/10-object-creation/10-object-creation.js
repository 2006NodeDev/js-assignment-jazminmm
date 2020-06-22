/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//object literal
var bunny1 = {name: "Rex", age:"5"};
console.log(bunny1);

//object constructor function
//a blueprint for creating many objects of the same "type"
function bunny2(name, age){
    this.name = name;
    this.age = age;
}

let Mimi = new bunny2('Mimi', 3);
console.log(Mimi);
// to add new property
// mimi.color = "white";

//es6 class
//use the word class to create a class and add constructor() method
class bunny3{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
let Fresita = new bunny3 ('Fresita', 2);
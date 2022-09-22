//Const: é tipo que não pode ser alterado

const carId = 100;
console.log(carId);

//Var: é uma inferencia que indentifica o tipo
var secNumber = 500;
console.log(secNumber);

//Function
function sendCars(...carIds) {
    carIds.forEach(id => console.log(id));
}
sendCars('Monday', 1, 2, 3);

//Let: é tipo de variavel que pode ser alterada

let numbers = [888, 999, 1111];
let [num1, num2, ...theRest] = numbers;
console.log(num1, num2, theRest);

let car1 ={id: 1000, style: 'Corolla'};
let id, style;
({ id, style } = car1);
console.log(id, style);

function printNameCars(car1, car2, car3) {
    console.log(car1, car2, car3);
}

let carCodes = [1, 2, 3];
printNameCars(...carCodes);

//typeof: pode retornar um tipo de variavel ou uma função
typeof(carCodes);

//Conversão em Javascript
console.log(Number.parseInt('55ABC'));
console.log(Number.parseFloat('55.88ABC'));

//Lopping
for(let i=0; i < 10; i++){    
    if(i === 7)
       continue;
       //break;
    console.log(i);
} 

//Operators: é necessario usar === para fazer as validaçoes em JS
//&& and || or, === Equals
let variavel = 123;
console.log(id !== "123");

let ano = 1990;
console.log(ano++);

let ano2 = "-1967";
console.log(-ano2);

if (5 === 5 && 6 === 6) {
    console.log(true);
} else{
    console.log(false);
}

let userSettings = {name: 'Alex' };
let defaultSettings = {name: 'Sid' };
console.log(userSettings || defaultSettings);

//Relational Operators: > maior, < menor,  >= or <=
let s1 = 'Zoo';
let s2 = 'Gym';
if (s1.toUpperCase() < s2.toUpperCase()) {
    console.log(true);
}else{
    console.log(false);
}

//Conditional Operator
console.log(5 > 44 ? 'yes' : 'no');

//Assignment Operators: +=, -=, /=, *=, %=, <<=  e >>=
let Assignment = 1999;
Assignment <<=1;
console.log(Assignment);

//Function Scope example
function startCar(carId) {
    let message = 'Starting...'
    let startFn = function turnKey(){
        console.log(message);
    };
    startFn();
}

startCar(1990);

//Learning about Block Scope
if ('P' === 'P') {
    var texto = 'Equal';
    console.log(texto);
}

//Learning about IIFE's 
let app = (function() {
    let carId = 8788;
    console.log('In fucntion');
    console.log(carId);
    return {};
})();
console.log(app);

//Learning about Closure 
let app2 = (function () {
    let carId = 9899;
    console.log(carId);
    let getId = function () {
        return carId;
    };
    return{
        getId: getId
    };
})();
console.log(app2.getId());

//Learning about this
let o = {
    carId: 3212312,
    getId: function(prefix) {
        console.log(this);
        return prefix + this.carId;
    }
};

//Learning method apply()
let newCar = { carId:989898 };
console.log(o.getId.apply(newCar, ['ID: ']));

//Learning method bind()
let p = {
    carId: 3212312,
    getId: function() {        
        return this.carId;
    }
};

let newFn = p.getId.bind(newCar);
console.log(newFn());


//Learning Testing prefix
let getId = (prefix, suffix) => prefix + 123 + suffix;    
console.log( getId('ID ', '!') );

//Learning Default Parameteres
let trackCar = function(carId, city='NY'){
    console.log(`Tracking ${carId} in ${city}.`);
};
console.log( trackCar(123) );
console.log( trackCar(123, 'Chigago') );

function Car(id) {
    this.carId = id;
    this.start = function(){
        console.log('start: ' + this.carId);
    };
}

let vehicle = new Car(123);
vehicle.start();


//Learning prototypes
String.prototype.hello = function() {
    return this.toString + 'Hello';
};
console.log('foo'.hello());

//Learning JSON
let jsonIn = `
    [
        {"carId" : 123},
        {"carId" : 456},
        {"carId" : 789}
    ]
`;
let carIds = JSON.parse(jsonIn);
console.log(JSON.stringify(carIds));

//Learning Array Iteration
let arrayCarIds = [
    {carId: 123, style: 'sedan'},
    {carId: 456, style: 'convertible'},
    {carId:789, style: 'espace'}
];

arrayCarIds.forEach(car => console.log( car ));
arrayCarIds.forEach((car, index) => console.log( car, index));

let convertibles = arrayCarIds.filter(
    car => car.style === 'convertible'
);
console.log(convertibles);

let result = arrayCarIds.every(
    car => car.carId > 0
);
console.log(result);

let car2 = arrayCarIds.find(
    car => car2.carId > 500
);
console.log(car);
console.log('First push ');

//Learning about class and constructor
class Car{
    constructor(id){
        this.id = id;
    }
    //Method
    identify(suffix){
        return `Car Id: ${this.id} ${suffix}`;
    }
}
let car = new Car(123);
car.id = 456;
console.log(car.id);
console.log(car.identify('!!!'));

//Class
class Vehicle{
    constructor(){
        this.type = 'car';
    }
    start(){
        return `Starting: ${this.type}`
    } 
}
//Extends
class Car extends Vehicle{
    start(){
        return 'In Car start ' + super.start();
    }
}
let car = new Car();
console.log(car.type);

//Import: we used import a module on the project
import { Car } from "./models/car";
let car = new Car(123);
console.log(car.id);

console.log(innerWidth);

//Timers
let intervalId = setInterval( function() {
    console.log('1 second passed');
}, 1000);

clearInterval(intervalId);

//Location
console.log(location.href);

//Methods of document
let text = document.getElementById('first');
console.log(text);

let texts = document.getElementsByClassName('p1');
console.log(texts);

let element = text;
element.textContent = 'example with manipulataion texts';
element.setAttribute('foo', 'fooValue');
element.classList.add('p2');
element.style.color = 'green';
console.log(element); 

//Error in JavaScript

//Try catch and finally
try {
    let car = newCar;
} catch (error) {
    console.log('error: ', error);
}
finally{
    console.log('this always executes');
}

//throw
try {
    throw Error('my custom error')
} catch (error) {
    console.log('error: ', error);
}
finally{
    console.log('this always executes');
}

//Promise
let promise = new Promise(
    function (resolve, reject) {
        setTimeout(reject, 100, 'someValue');
    }
);
promise.then(
    value => console.log('fulfilled: ' + value),
    error => console.log('rejected: ' + error)
);








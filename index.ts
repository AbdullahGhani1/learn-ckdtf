import PondDuck from './PondDuck';
import { DuckType, Duck } from './types';
import calculateTotal from './utils/calculator';
import { add, divide, multiply, subtract } from './utils/math';

const duckName: string = 'Daffy';
const duckAge: number = 3;

let duckColor: string = 'Black';

const ducks: string[] = ['Daffy'];

const duck: Duck = {
  name: 'Daffy',
  age: 3,
  type: 'Mallard',
  color: 'Black',
};

console.log(`${duckName} ${duckAge} ${duckColor} ${ducks}`);
duck.favouriteFood = 'Pizza';

console.log(duck);

const makeDuckQuack = (duck: Duck, times: number = 1): void => {
  const quackCount = times;
  for (let i = 0; i < quackCount; i++) {
    console.log(`${duck.name} says: Quack`);
  }
};

makeDuckQuack(duck, 2);

const donald = new PondDuck('Donald', 2, DuckType.MALLARD, 'Green', 'Bread');
donald.fly();
donald.land();
donald.land();

const duckPond: PondDuck[] = [];
const daffy = new PondDuck('Daffy', 2, DuckType.MUSCOVY, 'Black', 'corn');
const howard = new PondDuck('Howard', 2, DuckType.PEKIN, 'White', 'Wheat');

duckPond.push(daffy, donald, howard);

const makeAllDucksQuack = (ducks: PondDuck[], times: number = 1): void => {
  ducks.forEach((duck) => duck.quack(times));
  console.log(`${duck.name} says: Quack`);
};

makeAllDucksQuack(duckPond);

const num1: number = 10;
const num2: number = 5;

const arr: number[] = [10, 20, 30, 40];

const total = calculateTotal(arr);
console.log(`The total price is: ${total}`);

console.log(`The sum of 10 and 5 is: ${add(num1, num2)}`);
console.log(`The difference between 10 and 5 is: ${subtract(num1, num2)}`);

const multiplication = multiply(num1, num2);
const division = divide(num1, num2);

console.log(`The product of 20 and 4 is: ${multiplication}`);
console.log(`The quotient of 20 divided by 4 is: ${division}`);

try {
  const divideByZero = divide(num1, 0);
  console.log(`Result of dividing ${num1} by 0 is: ${divideByZero}`);
} catch (error: any) {
  console.log(`Error: ${error.message}`);
}

const duckName: string = 'Daffy';
const duckAge: number = 3;

let duckColor: string = 'Black';

const ducks: string[] = ['Daffy'];

type Duck = {
  name: string;
  age: number;
  type: string;
  color: string;
  favouriteFood?: string; // Optional property
};

const duck: Duck = {
  name: 'Daffy',
  age: 3,
  type: 'Mallard',
  color: 'Black',
};

duck.favouriteFood = 'Pizza';

console.log(duck);

const makeDuckQuack = (duck: Duck, times: number = 1): void => {
  const quackCount = times;
  for (let i = 0; i < quackCount; i++) {
    console.log(`${duck.name} says: Quack`);
  }
};

makeDuckQuack(duck, 2);

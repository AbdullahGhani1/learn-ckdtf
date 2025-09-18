const duckName: string = 'Daffy';
const duckAge: number = 3;

let duckColor: string = 'Black';

const ducks: string[] = ['Daffy'];

interface Duck {
  name: string;
  age: number;
  type: string;
  color: string;
}

const duck: Duck = {
  name: 'Daffy',
  age: 3,
  type: 'Mallard',
  color: 'Black',
};

console.log(duck.age);

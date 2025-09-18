export default class PondDuck {
  name: string;
  age: number;
  type: string;
  color: string;
  isFlying: boolean;
  favouriteFood?: string;

  constructor(name: string, age: number, type: string, color: string, favouriteFood?: string) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.type = type;
    this.isFlying = false;
    this.favouriteFood = favouriteFood;
  }
  quack(times: number = 1): void {
    console.log(`${this.name} says: Quack!`);
    for (let i = 0; i < times; i++) {
      console.log(`${this.name} the  ${this.color} ${this.type} duck says: Quack!`);
    }
  }

  fly(): void {
    if (!this.isFlying) {
      this.isFlying = true;
      console.log(`${this.name} starts flying!`);
    } else {
      console.log(`${this.name} is already flying!`);
    }
  }

  land(): void {
    if (this.isFlying) {
      this.isFlying = false;
      console.log(`${this.name} lands gracefully!`);
    } else {
      console.log(`${this.name} is already on the ground!`);
    }
  }
}

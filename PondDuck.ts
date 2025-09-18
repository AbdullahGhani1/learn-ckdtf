import { DuckColor, DuckType } from './types';

export default class PondDuck {
  name: string;
  age: number;
  type: DuckType;
  color: DuckColor;
  isFlying: boolean;
  favouriteFood?: string;

  constructor(name: string, age: number, type: DuckType, color: DuckColor, favouriteFood?: string) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.type = type;
    this.isFlying = false;
    this.favouriteFood = favouriteFood;
  }

  quack(times: number = 1): void {
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

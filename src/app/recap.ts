const username: string = 'betty';

const sum = (a: number, b: number) => {
  return a + b;
}

sum(1, 2);

/*class Person {
  private age: number;
  lastName: string;

  constructor(age: number, lastName: string) {
    this.age = age;
    this.lastName = lastName
  }
}*/

class Person {
  constructor(private age: number, public lastName: string){}
}

const betty = new Person(36, 'bty');

betty.lastName;

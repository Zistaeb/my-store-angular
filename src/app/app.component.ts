import { Component } from '@angular/core';
import {Product} from './product.model';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Beatriz';
  age = 23;
  img = 'https://image.shutterstock.com/image-photo/sleeping-beauty-princess-blonde-hair-260nw-2246498293.jpg';
  btnDisabled = true;
  person = {
    name: 'Bea',
    age: 23,
    avatar: 'https://image.shutterstock.com/image-photo/sleeping-beauty-princess-blonde-hair-260nw-2246498293.jpg'
  }

  names: string[] = ['Pocahontas', 'Mulan', 'Fatima'];
  newName = "";
  products: Product[] = [
    {
      name: "Cenicienta",
      price: 100,
      image: 'https://image.shutterstock.com/image-photo/oil-painting-artistic-image-wizard-260nw-2260855045.jpg',
      category: 'Princess'
  },
   {
    name: "Dragon",
    price: 150,
    image: 'https://image.shutterstock.com/image-photo/3d-image-dragon-flying-over-260nw-2247923841.jpg'
  },
  {
    name: "Jedy",
    price: 50,
    image: 'https://image.shutterstock.com/image-photo/portrait-alien-taken-150mm-f28-260nw-2237596761.jpg'
  },
  {
    name: "Mago",
    price: 160,
    image: 'https://image.shutterstock.com/image-photo/oil-painting-artistic-image-passive-260nw-2268560557.jpg'
  },
  {
    name: "Brujas",
    price: 80,
    image: 'https://image.shutterstock.com/image-photo/oil-painting-artistic-image-circle-260nw-2261175051.jpg'
  },
  {
    name: "Unicornio",
    price: 250,
    image: 'https://image.shutterstock.com/image-photo/artistic-image-unicorn-forest-260nw-2244823647.jpg'
  },

];

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}

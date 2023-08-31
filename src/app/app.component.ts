import { Component } from '@angular/core';

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
}

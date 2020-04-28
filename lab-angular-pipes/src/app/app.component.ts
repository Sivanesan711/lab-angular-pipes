import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';

  public person = {
    firstname: 'john',
    lastname: 'Doe'
  };

  blr = '';
  fcs = '';
  scl = '';
  name = '';
  number = 0;
  currentDate = 0;

  clickCounter = 0;
  dblclickCounter = 0;

  click(): void {
    this.clickCounter = 1;
  }

  dblclick(): void {
    this.dblclickCounter = 1;
  }


  blur(): void {
    console.log('Blur event is working.');
    this.blr = 'Blur event is working.';
  }

  focus(): void {
    console.log('Focus event is working.');
    this.fcs = 'Focus event is working.';
  }

  scroll(): void {
    console.log('Scroll is working.');
    this.scl = 'Scroll is working.';
  }

  pipes(names): void {
    this.name = names;
  }

  Number(currency: number): void {
    this.number = currency;
  }

  date(): void {
    this.currentDate = Date.now();
  }


  // tslint:disable-next-line:variable-name
  public pipeNum(number): void {
    this.number = number;
  }

  // tslint:disable-next-line:variable-name
  public pipePer(number): void {
    this.number = number;
  }

  public str(name): void {
    this.name = name;
  }

}

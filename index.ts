// Import stylesheets
import './style.css';

// Class Imports
import AClass from './a-class';
import BClass from './b-class';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

// function plus1Day(date: Date | null): boolean {
//   if (!date) return false;
//   const tomorrow = new Date();
//   tomorrow.setDate(date.getDate() + 1);
//   return date >= tomorrow;
// }

// const newDate = new Date();
// newDate.setDate(newDate.getDate() + 1);
// console.log(newDate);

class IndexClass {
  self: IndexClass = this;
  name: string = 'IndexClass';
  aObj: AClass;
  bObj: BClass;

  constructor() {
    this.aObj = new AClass();
    this.bObj = new BClass();
    this.aObj.logFunc.bind(this);
    this.aObj.logMethod.bind(this);
  }

  // logMethod() {
  //   // console.log('IndexClass logMethod self: ', this.self);
  //   this.aObj.logMethod();
  // }

  // logFunc = () => {
  //   this.aObj.logFunc();
  // };
}

const testObj = new IndexClass();

// testObj.aObj.logFunc()
// testObj.aObj.logMethod()

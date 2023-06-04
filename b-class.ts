export default class BClass {
  self: BClass = this;
  name: string = 'BClass';

  constructor() {}

  logMethod() {
    console.log('BClass logMethod self: ', this.self);
  }

  logFunc = () => {
    console.log('BClass logFunc self: ', this.self);
  };
}

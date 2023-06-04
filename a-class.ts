export default class AClass {
  self: AClass = this;
  name: string = 'AClass';

  constructor() {}

  logMethod() {
    console.log('AClass logMethod self: ', this.self);
  }

  logFunc = () => {
    console.log('AClass logFunc self: ', this.self);
  };
}

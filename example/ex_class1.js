class Person {

  constructor(id, name) {

    this._id = id; //backing field

    this._name = name;

  }

  //getter

  get id() {

    return this._id;

  }

  //setter

  set id(id) {

    this._id = id;

  }

  //method

  getPersonIdLength() {

    return this._id.length;

  }

}

let per1 = new Person('1234567', 'SomSri');

console.log(per1);

console.log(per1.getPersonIdLength());
class Person {
    
    constructor(id, name) {
      if (id.length != 13) this._id = 'unknown';
      else this._id = id;
      this._name = name;
  
    }
  
    //getter
  
    get id() {
      return this._id;
    }
  
    //setter
  
    set id(id) {
      this._id = id; //backing field
    }
  
    // //method
  
    getPerson() {
      return `person id = ${this._id}, person name= ${this._name}`;
    }
  }
  

  let per1 = new Person('1234567', 'SomSri');
  console.log(per1.getPerson());
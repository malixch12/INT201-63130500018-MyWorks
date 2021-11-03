let person = {}; //let person = new Object();

console.log(typeof person);

person.id = 12345678;

person.name = 'Somchai';

console.log(person);

person.email = 'somchai@gmail.com'; // สามารถเพิ่ม prop ให้ obj ผ่านการ . (dot) ได้เลย

console.log(person);

delete person.email; //สามารถลบได้ผ่านคำสั่ง delect ได้เลย

console.log(person);
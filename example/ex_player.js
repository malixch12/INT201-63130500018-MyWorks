// 2 obj if no name = unknow

class Players { //ชื่อคลาสพิมพ์ใหญ่

    constructor(name) {
        if (name) {
            this._name = name; // _ คือ attribute
        } else {
            this._name = "unknow";
        }

    }
    //getter

    get name() { // ชื่อ method ไม่ต้องมี _
        return this._name;

    }

    //setter

    set name(newname) {
        this._name = newname;
    }


}

let p1 = new Players();
let p2 = new Players('Ploy');
console.log(p1);
console.log(p2);
console.log(p2.name); //get name
console.log(p1.name='Winner'); //set name = obj.ชื่อเมดธอด=''
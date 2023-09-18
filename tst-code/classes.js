var object1 =  {value:10};
var object2 = object1;
var object3 = { value:10};

console.log(object1 === object2);
console.log(object1 === object3);

object1.value = 15;
console.log(object2.value);

console.log(this);

function b(){
    a = 1;
    console.log(this);
}

class Player {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    print(params) {
        console.log(this)
    }
}
class Wizard extends Player {
    constructor(name, type){
        super(name, type);
    }
    play() {
        console.log( ' ok im a ' + this.type);
    }
}
var payer = new Wizard('juan', 'healer');
var payer2 = new Wizard('Shelly', 'Dark magic');
payer.play();
payer2.play();
payer.print();
/*
    super = keyword usada para acessar o construtor da classe pai e outros
            métodos presente nele.
*/

class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speed(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}km`);
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.speed(this.runSpeed);
    }
}

class Fish extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.speed(this.swimSpeed);
    }
}

class Hawk extends Animal{

    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.speed(this.flySpeed);
    }
}

const rabbit = new Rabbit("Rabbit", 2, 8);
const fish = new Fish("Fish", 1, 12);
const hawk = new Hawk("Hawk", 3, 15);

rabbit.run();
fish.swim();
hawk.fly();
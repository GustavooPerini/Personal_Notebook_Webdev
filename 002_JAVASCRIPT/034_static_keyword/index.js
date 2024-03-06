/*
    static = é uma keyword que permite criar propriedades e funções dentro
             de uma classe, podendo ser acessada sem necessitar criar um objeto.

             propriedades e métodos static pertencem a classe, impossibilitando
             o acesso através de um objeto da classe.
*/

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}


// acessando as propriedades e funções sem criar um objeto:

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));


// outro exemplo

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    sayHello(){
        console.log(`Hi, my name is ${this.username}`);
    }

    static getUserCount(){
        console.log(`There are ${this.userCount} users registered`);
    }
}

const user1 = new User("Pedro");
const user2 = new User("João");
const user3 = new User("Thiago");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();
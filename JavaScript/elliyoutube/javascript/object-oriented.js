//class 나 object가 없다면 규모 있는 project를 못 만든다
//class는 fields와metods가 있다
// class person {
//     name;
//     age;    속성
//     speak(); 행동
// }

//객체지향을 잘하는건 객체로 잘 꾸밀 수 있는 거다.

//class : 틀을 말한다, template, declare once, no data in
//정의만 한다
//object : 틀을 통해 무언가 만들어 낸다.
//instance of a class, created many times, data in
//object는 메모리에 올라간다.

'use strict';

//1. Class 선언
class person {
    //constructor 생성자
    constructor(name, age) {
        //fields 전달받은 데이터를 할당한다
        this.name = name;
        this.age = age;
    }
}

//methods
speak(); {
    console.log('${this.name}: hello!'); // 이름을 출력
}

const ellie = new person('ellie', 20); //object로 만든다
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and setters 잘못된 값을 입력했을 때 그것을 반영 안되게 한다
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
// //get으로 값을 리턴하고, set으로 값을 설정한다
//      get age() {
//         return this._age;
//     }
// //값을 설정하기에 값을 받아와야 한다
//     set age(value) {
//         this._age = value < 0 ? 0 : value;
//     }

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);

//3.Fields (public, private) 최신 기술이라 아직 쓰이는 곳이 거의 없다
class Experiment {
    publicField =2;
    #privateField = 0; //class 내부에서만 보이고 변경가능하고, class 외부에서는 값을 변동 할 수 없다.
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods 쓰기에 무리다

//상속과 다양성
class shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log('drawing ${this.color) color of');
    }

    getArea() {
        return width * this.height;
    }
}

class Rectangle extends Shape {} //shape에서 선언한게 자동으로 포함한다
class Triangle extends shape {}
const Rectangle = new Rectangle(20, 20, 'blue');
Rectangle.draw();
console.log(Rectangle.getArea());
const Triangle = new Triangle(20, 20, 'blue');
Triangle.draw();
//상속되는 부분을 extends를 이용해서 계속해서 쓸 수 있다.

//6. Class checking: instanceof 왼쪽에있는 object가 오른쪽에 있는게 맞는지 확인하는 것이다
console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //f
console.log(triangle instanceof Triangle) //t
console.log(triangle instanceof shape); //t
console.log(triangle instanceof object); //t 모든건 object를 상속한 것이다

//Javascript reference 부분들을 찾아보면 좋다.


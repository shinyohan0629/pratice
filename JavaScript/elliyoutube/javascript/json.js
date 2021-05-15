//JSON

//1. Object to JSON
//stringfy (obj)
let json = JSON.stringify(ture);
console.log(ison);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log('${name} can jump!');
    },
};

let json = JSON.stringify(rabbit);
console.log(ison);

let json = JSON.stringify(rabbit, ["name"]); //내가 원하는 프로퍼티만 불러올 수 있다.
console.log(ison);

let json = JSON.stringify(rabbit, (key, value) => { //더 세밀하게 다루고 싶다면 callbackfuction으로 할 수 있다
    console.log('key: ${key}, valude: ${value}');
    return value;
});

console.log(ison);

//2. JSON to Object
//parse (json)
json = JSON.stringify(rabbit);
const obj = JSON.parse(json);
console.log(obj);
rabbit.jump();
// obj.jump();

rabbit.birthDate.getDate()
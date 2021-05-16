const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

function add(num, num2) {
    return num + num2;
}

const sum = add(3, 4);
console.log(sum);

function print() {
    console.log('print');
}

function surprise(operator) {
    const result = operator();
    console.log(result);
}

surprise(add);
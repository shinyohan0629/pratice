//비동그 프로그램에 대해서 한 번 보자!!

'use strict';
//JS는 동기적이다
//호스팅이 되고 나서 순서대로 동기적으로 실행된다
//hoisting : var, function declaration 선언들이 제일 위로 올라가서 실행된다
console.log('1');
setTimeout(() => console.log('2'), 1000); //1초 뒤 callback으로 실행 비동기적인 실행 방법
console.log('3');

//동기 callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('Hello'));

//비동기 callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback', 2000));

class UserStorage {
    loginUser(id, password, onSuccess, OnError) {
        setTimeout(() => {
            if (
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'acadmy')
            ) {
                onSuccess(id);
            } else {
                onemptied(new Error('not found'));
            }
        }, 2000)
    }

    getRoles(user, onSuccess, OnError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin'});
            } else {
                onerror(new Error('mp access'));
            }
        }, 1000);
    }
}

const UserStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
UserStorage.loginUser(
    id,
    password,
    (user) => {
        UserStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    'Hello ${userWithRole.name}, you have a ${userWithRole.role} role'
                    );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error)
    }
);
// Script vs typeScript

let userName: string = "임정섭";
let age: number = 20;
let isMarraige: boolean = true;


console.log(`debug >>>> typescript userName`, typeof userName)
console.log(`debug >>>> typescript age`, typeof age)
console.log(`debug >>>> typescript isMarraige`, typeof isMarraige)


// array

let ary: string[] = ["임정섭", "차현준", "박선아"];
console.log(ary)
// 객체 타입을 선언하고 변수의 타입으로 사용해야 함.
// -> interface

interface User {
    email: string;
    password: string;
    address?: string;
}

const user: User = {
    email: 'ahalgrgar1@naver.com',
    password: '123456789'

}

console.log(`debug >>>> user`, user);

let userAry: User[] = [
    {
        email: 'ahalgrgar1@naver.com',
        password: '123456789'

    },
    {
        email: 'ahalgrgar1@naver.com',
        password: '123456789',
        address: 'seoul'
    }
]

console.log(`debug >>>> user`, userAry);

// 함수
function showMessage(name: string): string {
    return `${name}님 환영합니다.`;
}
showMessage('hoyoon');

//union type
let statuss: string | number;
statuss = 'success';
statuss = 404;
console.log(`debug >>>> union`, statuss)

"use strict";
// Script vs typeScript
let userName = "임정섭";
let age = 20;
let isMarraige = true;
console.log(`debug >>>> typescript userName`, typeof userName);
console.log(`debug >>>> typescript age`, typeof age);
console.log(`debug >>>> typescript isMarraige`, typeof isMarraige);
// array
let ary = ["임정섭", "차현준", "박선아"];
const user = {
    email: 'ahalgrgar1@naver.com',
    password: '123456789'
};
console.log(`debug >>>> user`, user);
let userAry = [
    {
        email: 'ahalgrgar1@naver.com',
        password: '123456789'
    },
    {
        email: 'ahalgrgar1@naver.com',
        password: '123456789',
        address: 'seoul'
    }
];
console.log(`debug >>>> user`, userAry);
// 함수
function showMessage(name) {
    return `${name}님 환영합니다.`;
}
showMessage('hoyoon');
//union type
let statuss;
statuss = 'success';
statuss = 404;
console.log(`debug >>>> union`, status);

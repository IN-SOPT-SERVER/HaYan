// var 를 사용해보자!
var myName = "얀하조";
console.log(`${myName} is wrong name!`);

var myName ="조하얀"; //재선언 가능
console.log(`My name is ${myName}`);

myName = "하얀";
console.log(`${myName}!`); //재할당 가능

// let 을 사용해보자!
let part = "Server";
console.log(`Let's go ${part}`);
part = "SERVERRRR";
console.log(`Let's go ${part}`);

// let myName = "ddd"; -> 오류 발생 
//재할당은 가능하지만 재선언은 불가능

const school ="SOPT";
school = "STOP"; //재할당 불가(오류 발생)
console.log(`school ${school}`); 

//const school = "sopt"; //재선언 불가


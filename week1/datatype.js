//string
var myName ="조하얀";
console.log(`${myName} 입니다.`)

//symbol
const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol('foo');
const sym4 = Symbol('foo');

console.log(sym1 === sym1);  // true

console.log(sym1 === sym2);  // false
console.log(sym3 === sym4);  // false

//object
const user = {
    email: "hyanj14@gmail.com",
    name: "조하얀",
    favorite: ["초밥", "샤브샤브", "햄버거"],
    introduce: function(){
        console.log(`${this.name}입니다. ${this.favorite} 좋아`);
    },
    getFavoriteFoods: function(){
        this.favorite.forEach((food)=>{
            console.log(`${food} 맛있어`);
        });
    }
};

//array
const arr1 = ["Hi", 10, true];
const arr2 = Array(1, null, "우와!", false, { sopt: "Server" });

arr1.map((item)=>console.log("item1: ", item));
arr2.map((item)=>console.log("item2: ", item));

//function
//* 함수 선언식 (호이스팅의 영향을 받습니다.)
function sum(a, b) {
    return a + b;
}

//* 함수 표현식 (호이스팅의 영향을 받지 않습니다.)
const sum = (a, b) => {
    return a + b;
};

//로직이 한 줄인 경우 return 생략 가능
const add = (a, b) => a + b; 
const hello = name => console.log(`${name}, hello!`) //매개변수 하나일 때 소괄호 생략 가능
const info = (name, age) => ({name, age})
const condition: boolean = false;

//최초 생성 시점 (Promise객체 생성)
const promise = new Promise((resolve, reject)=>{
    if(condition){
        resolve("우와 Promise다!");
    }else{
        reject(new Error("비동기 처리 도중 실패!")); //에러 객체 생성
    }
});

//비동기 처리 성공(then), 비동기 처리 실패(catch)
promise
    .then((resolvedData): void => console.log(resolvedData))
    .catch((error): void => console.log(error.message)); //error를 받고 error.message만 출력

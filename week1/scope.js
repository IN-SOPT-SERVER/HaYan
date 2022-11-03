if(true){
    var x = "var";
    console.log(x);
}
console.log("x: ", x);
//var는 Function Scope 가지기 때문에 block {} 의 영향을 받지 않음

if(true){
    let y = "let";
    console.log(y);
}
//console.log("y: ",y); //오류 발생
//let과 const는 Block Scope를 가져 특정 block에서 선언한 변수들은 외부에서 접근 불가능

function func(){
    if(true){
        var test = "var";
        console.log("test: ", test);
    }
    console.log("test: ", test);
}
func();
console.log("test: ", test); //오류
//function scope를 벗어난 곳에서는 접근할 수 없음
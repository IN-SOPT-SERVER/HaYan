//--타입
const isLinked: boolean = true
console.log(`${typeof isLinked}, ${isLinked}`)

const str: string = 'hello'
console.log(`${typeof str}, ${str}`)

const num: number = 3
console.log(`${typeof num}, ${num}`)

const sum: number = 'sum number' //오류

let numbers: number[] =[1,2,3];
//number 요소를 가진 배열임

let strings: Array<string> = ['h', 'a'] //두번째 방법

const objArray1: Object[] = [
    {item1: 'oh'},
    {item2: 'wow'}
]

const objArray2: object[] = [
    {item1: 'oh'},
    {item2: 'wow'}
]
//Object와 object는 다르다. object가 좀 더 엄격한 타입

const foo1 = (a: Object): void => {
    console.log(a)
}

const foo2 = (a:object): void => {
    console.log(a)
}

foo1('boom')
foo2('boom') //string 쓸 수 없음

//--함수 타입 표현
//함수는 반환 타입 명시. 반환 없을 경우 void
const fun = (name: string): void => {
    console.log(`${name}아 안녕`)
}

const sum1 = (a:number ,b:number):number=> a+b;

const sum2 = (a:number ,b:number):number=>{
    return a+b;
}

//--null, undefined 타입 표현
//자신 이외의 값을 할당할 수 없음
const a: null = null;

let oops: null = 2; //오류. null타입에 2 할당할 수 없음

let b: undefined = undefined;

let c: undefined = null; //오류

//--타입 단언
// as
const test1:any = '안녕' //any:아무런 타입이 들어갈 수 있음. 뭔지 모름
const nameLength: number = (test1 as string).length //string인 걸 우리는 정확히 알고있음
console.log(`${typeof nameLength}, ${nameLength}`);
//우리는 아는데 얘가 모를때

//angle-bracket
const test2: any ="아안녕"
const nameLength2: number = (<string>test2).length //바로 string으로 사용가능
console.log(`${typeof nameLength2}, ${nameLength2}`);
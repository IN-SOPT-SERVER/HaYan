// promise-chaining.ts

//* 아침에 힘겹게 일어나는 여러분을 표현한 함수
//me는 callback함수와 time을 받음
const me = (callback: () => void, time: number) => {
    setTimeout(callback, time); //몇초동안 대기 후 수행할지
  };
  
//* 기상(wakeUp 함수에 타입 지정)
const wakeUp = (): Promise<string> => { 
    return new Promise((resolve, reject)=>{ //promise는 me함수를 호출
        me(()=>{
            console.log("[현재] 일어남");
            resolve("일어남");
        }, 2000); //첫번째인자는 callback, 두번째인자는 초
    });
};

//* 화장실 감
const goBathRoom = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
        console.log("[현재] 화장실로 이동함");
        resolve(`${now} -> 화장실로 이동함`);
        }, 1000);
    });
};
  
//* 칫솔과 치약을 준비함
const ready = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
        console.log("[현재] 칫솔과 치약을 준비함");
        resolve(`${now} -> 칫솔과 치약을 준비함`);
        }, 1000);
    });
};

//* 양치함
const startChikaChika = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
        console.log("[현재] 양치함");
        resolve(`${now} -> 양치함`);
        }, 1000);
    });
};

//* 나 자신에게 칭찬함
const goodJob = (now: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        me(() => {
        console.log("[현재] 나 자신에게 칭찬중");
        resolve(`${now} -> 칭찬중`);
        }, 1000);
    });
};

//then으로 chaining 할 수 있음
wakeUp()
    .then((now) => goBathRoom(now))
    .then((now) => ready(now))
    .then((now) => startChikaChika(now))
    .then((now) => goodJob(now))
    .then((now) => console.log(`\n${now}`)); //계속 쌓아온게 찍힘

//resolve 된 것이 쌓임
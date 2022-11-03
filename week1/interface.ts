interface SOPT{
    name: string;
    age: number;
    isSOPT: boolean;
    favoriteFood ?: string; //선택적 키워드. 사람마다 있을 수 있고 없을 수 있음
    //favoriteFood: string
}

const info: SOPT = { //SOPT라는 인터페이스 타입을 지정
    name: '조하얀',
    age: 20,
    isSOPT: true
    //favoriteFood: '초밥'
}

const infos: SOPT[] = [{
    name: 'dd',
    age : 20,
    isSOPT: true
},{
    name: 'zz',
    age : 23,
    isSOPT: true
},{
    name: 'gg',
    age : 25,
    isSOPT: false
}];


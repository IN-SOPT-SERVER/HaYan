//2. 파트원 소개 배열에 타입으로 지정할 인터페이스 생성 및 타입 지정
interface Member{
    name: string;
    age: number;
    address: string;
    favorite: string;
    mbti?: string;
}

//1. 서버 파트원 2-3명 소개하는 객체 만들기
const members: Member[] = [
    {
        name: "박현정",
        age: 24,
        address: "부천",
        favorite: "회",
        mbti: "ESFJ"
    },{
        name: "이서우",
        age: 24,
        address: "영등포구",
        favorite: "버블티"
    },{
        name: "조하얀",
        age: 24,
        address: "용산구",
        favorite: "초밥",
        mbti:"INTP"
    }
];

//3. 소개글 출력
members.map((member)=>console.log(`파트원의 이름은 ${member.name} 이고 나이는 ${member.age}이며 ${member.address}에 살고 있습니다. ${member.favorite}을(를) 좋아합니다.`));
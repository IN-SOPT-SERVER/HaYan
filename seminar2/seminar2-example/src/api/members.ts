// src/api/members.ts

import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

interface Member{
    name: string;
    age: number;
    address: string;
    favorite: string;
    mbti?: string;
}

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

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "members 조회 성공",
    data: members,
  });
});

module.exports = router;
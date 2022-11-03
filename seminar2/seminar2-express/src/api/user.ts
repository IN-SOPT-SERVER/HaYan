// src/api/user.ts

import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴! 코드에서 사용하기 위함

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => { //get 요청 들어왔을때의 라우팅
    const user = "하이";

  return res.status(200).json({ //response 던져줌. response바디에 json내보냄
    status: 200,
    message: "유저 조회 성공",
    data: user,
  });
});
//추후에 이런 json을 주고 받을 것

module.exports = router; //밖으로 내보냄
//어디에서든지 사용할 수 있도록 모듈화
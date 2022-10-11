// src/api/index.ts

import express, { Router } from "express";

const router: Router = express.Router(); // express 라우팅 시스템을 받아올거!

router.use("/user", require("./user")); //첫 인자의 path를 라우터로 지정, 두번째 인자의 라우터 사용할 것

module.exports = router; // 모듈로 반환
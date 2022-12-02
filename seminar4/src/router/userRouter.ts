import { Router } from "express";
import { userController } from "../controller";

const router: Router = Router();

router.get("/:userId", userController.getUserById);

//* 유저 생성 - POST api/user
router.post('/', userController.createUser);

//* 전체 유저 조회 - GET api/user
router.get('/', userController.getAllUser);

//* 유저 정보 업데이트 - PATCH api/user/:userId (부분적 수정, 어떤 유저를 변경)
router.patch('/:userId', userController.updateUser);

//* 유저 삭제 - DELETE api/user/:userId
router.delete('/:userId', userController.deleteUser);

export default router;

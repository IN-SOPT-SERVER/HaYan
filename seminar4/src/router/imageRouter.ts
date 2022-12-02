import { Router } from "express";
import { imageController } from "../controller";
import { upload } from "../middlewares"; //upload 미들웨어
//원래는 ../middlewares/upload 이런식으로 쓰는데 파일 많아질수록 길어지는것 방지하기 위해 default로 export

const router: Router = Router();

router.post("/", upload.single("file"), imageController.uploadImage);
//multer에서 제공하는 기본 메소드 사용할 수 있음(single-단일파일 가져옴, cf.여러개는 array)
//파일이 넘어가는 필드 이름을 single 메소드의 인자로 넣어줌

export default router;

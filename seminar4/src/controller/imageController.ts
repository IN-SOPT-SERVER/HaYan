import { Request, Response } from "express";
import { rm, sc } from "../constants";
import { fail, success } from "../constants/response";
import { imageService } from "../service";

//* 이미지 업로드 API
const uploadImage = async (req: Request, res: Response) => {
  //express에서 제공하는 타입: Express.MulterS3.File
  const image: Express.MulterS3.File = req.file as Express.MulterS3.File; //타입 단언
  const { location } = image; //이미지의 위치(cf. originalname 사용하여 이름을 가져올 수 있다.)

  if (!location) {
    return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_IMAGE));
  }

  //파일 보내줌
  const data = await imageService.uploadImage(location);
  //data DTO 형태로 떨어짐

  //데이터가 안넘어왔을 때
  if (!data) {
    return res
      .status(sc.BAD_REQUEST)
      .send(fail(sc.BAD_REQUEST, rm.CREATE_IMAGE_FAIL));
  }
  return res
    .status(sc.CREATED)
    .send(success(sc.CREATED, rm.CREATE_IMAGE_SUCCESS, data));
};

const imageController = {
  uploadImage,
};

export default imageController;

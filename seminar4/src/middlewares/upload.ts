import multer from "multer";
import multerS3 from "multer-s3";
import config from "../config";
import s3 from "../config/s3Config"; // s3객체 가져옴

//? 미들웨어로 사용할 multer 모듈
const upload = multer({
  //? 실질적인 storage 는 multerS3 이용해 aws s3 로 설정
  storage: multerS3({
    // 옵션찾아서 커스텀
    s3: s3,
    bucket: config.bucketName, //? s3 bucket name 지정
    contentType: multerS3.AUTO_CONTENT_TYPE, //? mimetype 은 자동으로 설정 (파일 타입을 자동으로 설정. 이걸 안쓰면 새탭에서 보는게 아니라 다운이 됨)
    acl: "public-read", // Access control for the file

    //? key는 파일 이름을 지정. 버킷 내 같은 이름의 파일은 같은 파일로 인식하기 때문에 Unique하도록!
    key: function (req: Express.Request, file: Express.MulterS3.File, cb) {
      cb(null, `${Date.now()}_${file.originalname}`); //해당 이름으로 s3 버킷에 저장, 이후 url을 string으로 던져줌
    },
  }),
});

export default upload; //업로드 미들웨어 만들어서 사용하겠다
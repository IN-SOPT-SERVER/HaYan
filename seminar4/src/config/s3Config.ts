// src/config/s3Config.ts

import { S3Client } from "@aws-sdk/client-s3";
import config from ".";

const s3: S3Client = new S3Client({
  //s3라는 객체를 만들건데, 모듈 내 메소드들을 사용할 수 있게함
  region: "us-east-1",
  credentials: {
    accessKeyId: config.s3AccessKey, //config로 접근해서 가져옴
    secretAccessKey: config.s3SecretKey,
  },
});

export default s3;

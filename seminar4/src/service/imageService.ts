import { ImageCreateResponseDTO } from "../interfaces/image/ImageCreateResponseDTO";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//* 이미지 업로드
const uploadImage = async (
  location: string //multer로부터 받은 s3 url
): Promise<ImageCreateResponseDTO> => {
  const data = await prisma.image.create({
    //이미지 테이블에 저장
    data: {
      image: location,
    },
  });

  const result: ImageCreateResponseDTO = {
    id: data.id,
    image: data.image as string, //타입 단언(무조건 넘어오는 걸 알고있기 때문에 null경우가 생기지 않음)
  };

  return result;
};

const imageService = {
  uploadImage,
};

export default imageService;

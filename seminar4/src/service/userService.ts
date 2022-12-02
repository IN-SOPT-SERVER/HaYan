import { PrismaClient } from "@prisma/client"; //prisma client를 통해 CRUD 쿼리를 사용할 수 있음
const prisma = new PrismaClient(); //import해온 prisma client를 하나 생성해서 사용할 수 있게끔 prisma라는 변수명으로 미리 마련해둔 것
//해당 prisma 변수명을 통해 기능들을 사용할 수 있음

//service의 역할: 컨트롤러에서 받은 요청에 맞는 데이터를 데이터베이스에서 꺼내와서 다시 컨트롤러에게 전달
//* 유저 생성
const createUser = async(name: string, email:string, age:number) => {
  
  const data = await prisma.user.create({ //두번째 위치에 테이블이름 씀. user테이블에 create를 할 것이다
    data: {
      userName: name, //(컨트롤러에서 매개변수로 받은 이름이 name이고 table에는 userName일때 이렇게 적어서 넣어줄 수 있음)
      age,
      email
    }
  }); //prisma는 이 data 내용을 가지고 DB에 create해줌

  return data;
};
//* 유저 전체 조회
const getAllUser = async() => {
  const data = await prisma.user.findMany(); //findMany: 다 가져옴
  return data;
};
//* 유저 정보 업데이트
const updateUser = async(userId:number, name:string) => {
  const data = await prisma.user.update({ //대량의 데이터 업데이트면 updateMany
    //어느 유저 업데이트 할지 where로 필터
    where:{
      id: userId
    },
    data:{
      userName: name
    }
  });
  return data;
};
//* 유저 삭제
const deleteUser = async(userId: number) => {
  await prisma.user.delete({ //하나 삭제
    where:{
      id: userId,
    },
  });
};

//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({ //id는 PK이므로 유니크함. 유니크한거 찾음
    where: {
      id: userId, //id가 userId인 애를 찾음
    },
  });

  return user;
};

const userService = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
};

export default userService;

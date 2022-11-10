import { Request, Response } from "express";
import { userService } from "../service";

//* 유저 생성
// (창고 문지기 역할) client의 request를 받아야 하고, response도 있어야 함
const createUser = async(req:Request, res: Response) => {
  //사용예시) 회원가입 - 필요한 정보를 받아 저장
  //request의 JSON파일 body에서 정보 가져옴
  //선언하는 변수명과 JSON파일의 필드명이 같으면 다음과 같이 한번에 여러개를 꺼내올 수 있음(변수가 많아질수록 효율적인 코드)
  const { userName, email, age } = req.body //비구조화 할당: name, email, age 변수 생성할건데 body에 똑같은 이름 있으니 가져와 할당하는 것

  //3개 중에 하나라도 빠지면 유저 생성 불가
  if(!userName || !email || !age) return res.status(400).json({status:400, message: "유저 생성 실패"});

	//일꾼(service)에게 넘겨줌. 여기서 코드 짜지 않음(DB 생성하는 작업은 service가 하게됨)
	const data = await userService.createUser(userName, email, age); //세개 넘겨주고 넘어오는 데이터는 data에 저장

  //예외처리
	if(!data){
		return res.status(400).json({status:400, message: "유저 생성 실패"});
	}
	return res.status(200).json({status:200, message: "유저 생성 성공", data}); //data도 같이 넘겨줌
};

//* 유저 전체 조회
const getAllUser = async(req:Request, res: Response) => {
  const data = await userService.getAllUser(); //바로 서비스

  //204는 no content, 200은 성공
  return res.status(200).json({status:200, message: "유저 전체 조회 성공", data}); 
};

//* 유저 정보 업데이트 - 이름 변경
const updateUser = async(req:Request, res: Response) => {
  const {name} = req.body;
  const {userId} = req.params;

  if(!name) return res.status(400).json({status:400, message: "유저 업데이트 실패"});

  const updatedUser = await userService.updateUser(+userId, name);
  return res.status(200).json({status:200, message: "유저 업데이트 조회 성공", updatedUser}); 
};

//* 유저 삭제
const deleteUser = async(req:Request, res: Response) => {
  const { userId } = req.params;

  //아예 통신이 안되는거니까 굳이 userId값 잘 들어왔는지 확인할 필요 없음
  await userService.deleteUser(+userId);
  res.status(200).json({status:200, message: "유저 삭제 성공" }); 

};

const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params; //params로 받아오는 건 string으로 넘어옴

  const data = await userService.getUserById(+userId); //userId를 보냄. +쓰면 number로 변경됨. 또는 직접 Number()로 형변환 해도 됨

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

// 하나의 덩어리로 묶어줌
const userController = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
};

// 만든 덩어리를 import해서 쓸 수 있게 내보냄
export default userController;

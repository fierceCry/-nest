import { PickType } from "@nestjs/swagger";
import { Users } from "src/entities/Users";

export class JoinRequserDto extends PickType(Users, [
  "email", 
  "nickname", 
  "password",
  ] as const){
}
// PickType는 swagger에 있는 함수로써 Users(다른클래스 가능)에 있는 칼럼들을 적용시킬수있다

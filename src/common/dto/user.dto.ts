import { JoinRequserDto } from "src/users/dto/join.requser.dto";
import { ApiProperty } from "@nestjs/swagger";

export class UserDto extends JoinRequserDto{
  @ApiProperty({
    required : true,
    example : 1,
    description : "아이디",
  })
  id: number;
}
import { ApiProperty } from "@nestjs/swagger";

export class JoinRequserDto{

  @ApiProperty({
    example : 'Nest@gmail.com',
    description : "이메일",
    required: true
  })
  public email: string;

  @ApiProperty({
    example : "김만규",
    description : "닉네임",
    required: true
  })
  public nickname: string;

  @ApiProperty({
    example : "nodejsbook",
    description : "비밀번호",
    required: true
  })
  public password: string;
}
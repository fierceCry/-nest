import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class JoinRequserDto {

  @IsEmail()
  @ApiProperty({
    example: 'Nest@gmail.com',
    description: "이메일",
    required: true
  })
  public email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "김만규",
    description: "닉네임",
    required: true
  })
  public nickname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "nodejsbook",
    description: "비밀번호",
    required: true
  })
  public password: string;
}

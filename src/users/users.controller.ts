import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { JoinRequserDto } from "./dto/join.requser.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserDto } from "src/common/dto/user.dto";

@ApiTags("USER")
@Controller("api/users")
export class UsersController {
  constructor(private userService: UsersService){
  }

  @ApiResponse({
    status: 200,
    description: "성공",
    type: UserDto
  })
  @ApiOperation({
    summary : "유저 정보 조회"
  })
  @Get()
  getUser(@Req() req){
  }

  @ApiOperation({
    summary : "회원가입"
  })
  @Post()
  async join(@Body() data: JoinRequserDto){
    await this.userService.join(data.email, data.nickname, data.password);
  }

  @ApiOperation({
    summary : "로그인"
  })
  @Post("login")
  logIn(){

  }
  @ApiOperation({
    summary : "로그아웃"
  })
  @Post("logout")
  logOut(){

  }
}
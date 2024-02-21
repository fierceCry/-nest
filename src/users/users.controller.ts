import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JoinRequserDto } from "./dto/join.requser.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserDto } from "src/common/dto/user.dto";
import { LocalAuthGuard } from "src/auth/loca-auth.guard";
import { LoggedInGuard } from "src/auth/logged-in.guard";
import { NotLoggedInGuard } from "src/auth/not-logged-in.guard";
import { User } from "src/common/decorators/user.decorator";

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
  getUser(@User() user){
    return user || false;
  }

  @UseGuards(new NotLoggedInGuard())
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
  @UseGuards(LocalAuthGuard)
  @Post("login")
  logIn(){
    
  }
 
  @UseGuards(new LoggedInGuard())
  @ApiOperation({
    summary : "로그아웃"
  })
  @Post("logout")
  logOut(){

  }
}
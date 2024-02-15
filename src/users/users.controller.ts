import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { JoinRequserDto } from './dto/join.requser.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/common/dto/user.dto';

@ApiTags("USER")
@Controller('api/users')
export class UsersController {
  constructor(private userService: UsersService){
  }

  @Get()
  getUser(@Req() req){
    return req.user;
  }

  @Post()
  postUsers(@Body() data: JoinRequserDto){
    this.userService.postUsers(data.email, data.nickname, data.password);
  }


  @Post("login")
  logIn(){

  }

  @Post("logout")
  logOut(){

  }
}
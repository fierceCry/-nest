import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("CHANNELS")
@Controller("api/workspaces/:url/channels")
export class ChannelsController {

  @Get()
  getAllChannels(){
    
  }

  @Post()
  createChannels(){
    
  }

  @Get(":name")
  getSpecificChannel(){

  }

  @Get(":name/chats")
  getChat(@Query() query ,@Param() param){
    console.log(query.perPage)
    console.log(param.url)
  }

  @Post(":name/chats")
  postChat(@Body() body){
    
  }

  @Get(":name/members")
  getAllMembers(){

  }

  @Get(":name/members")
  inviteMembers(){
    
  }
}

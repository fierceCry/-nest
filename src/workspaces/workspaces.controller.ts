import { Controller, Delete, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("WORKSPACE")
@Controller("api/workspaces")
export class WorkspacesController {
  @Get()
  getMyWorkspaces(){
    
  }

  @Post()
  createWorkspace(){
    
  }

  @Get(":url/members")
  getAllMembersFromWorkspace(){

  }

  @Get(":url/members")
  inviteMembersWorkspace(){

  }

  @Post(":url/members/:id")
  getMemberInfoWorkspace(){

  }

  @Delete(":url/members/:id")
  getMemberOutfoWorkspace(){
    
  }
}

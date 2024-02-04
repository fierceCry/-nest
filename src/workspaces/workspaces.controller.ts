import { Controller, Get, Post } from '@nestjs/common';

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
}

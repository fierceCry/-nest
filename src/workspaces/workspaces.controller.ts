import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { WorkspacesService } from "./workspaces.service"
import { Users } from "src/entities/Users";
import { User } from "src/common/decorators/user.decorator";
import { CreateWorkspaceDto } from "./dto/workspaces.dto";

@ApiTags("WORKSPACE")
@Controller("api/workspaces")
export class WorkspacesController {
  constructor(private workspacesService: WorkspacesService) {}

  @Get()
  getMyWorkspaces(@User() user: Users){
    return this.workspacesService.findMyWorkspaces(user.id)
  }

  @ApiOperation({ summary: '워크스페이스 만들기' })
  @Post()
  async createWorkspace(@User() user: Users, @Body() body: CreateWorkspaceDto) {
    return this.workspacesService.createWorkspace(
      body.workspace,
      body.url,
      user.id,
    );
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

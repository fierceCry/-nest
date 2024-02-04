import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganModule, MorganInterceptor } from "nest-morgan";
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { ChannelsModule } from './channels/channels.module';
import { DmsModule } from './dms/dms.module';

@Module({
  imports: [ConfigModule.forRoot( {isGlobal : true}), MorganModule, UsersModule, WorkspacesModule, ChannelsModule, DmsModule],
  controllers: [AppController],
  providers: [AppService, {provide: APP_INTERCEPTOR, useClass: MorganInterceptor("combined")}],
})
export class AppModule {}

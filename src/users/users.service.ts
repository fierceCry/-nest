import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/entities/Users";
import { Repository } from "typeorm";
import bcrypt from "bcrypt";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  getUser() {}

  async join(email: string, nickname: string, password: string) {
    const user = await this.usersRepository.findOne({ where: { email } });
    if(user){
      throw new ConflictException("이미 존재하는 사용자입니다");
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword)
    await this.usersRepository.save({
      email,
      nickname,
      password : hashedPassword
    })
  }
}

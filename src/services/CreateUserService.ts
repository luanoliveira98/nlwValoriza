import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUsersService {

  async execute({ name, email, admin } : IUserRequest) {
    if(!email)  throw new Error('Email incorrect');

    const usersRepositories = getCustomRepository(UserRepositories);

    const userAlreadyExists = await usersRepositories.findOne({ email });
    if(userAlreadyExists)  throw new Error('User already exists');

    const user = usersRepositories.create({ name, email, admin });
    await usersRepositories.save(user);
    return user;
  }

}

export { CreateUsersService }
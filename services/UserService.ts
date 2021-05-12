import UserRepository from "../repositories/UserRepository.ts"
import { IUser } from "../types.ts"

class UserService {
  readonly UserRepository = new UserRepository()

  getUsers = async () => {
    return await this.UserRepository.find()
  }

  createUser = async = (user: IUser) => {
    return await this.UserRepository.insertOne(user)
  }
}

export default UserService

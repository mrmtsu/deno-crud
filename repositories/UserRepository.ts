import db from '../db/mongo.ts';
import { IUser } from '../types.ts';

class UserRepository {
  readonly userCollection = db.userCollection('users')

  async find() {
    const users = await this.userCollection.find()
    return users
  }

  async insertOne(user: IUser) {
    const { $oid } = await this.userCollection.insertOne(user)
    return $oid
  }
}

export default UserRepository

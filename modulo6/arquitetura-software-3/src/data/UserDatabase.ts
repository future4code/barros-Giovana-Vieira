import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  TABLE_NAME = "LABEFLIX_USER"

  async create(user: User): Promise<void> {
    await UserDatabase.connection.insert(user)
      .into(this.TABLE_NAME);
  }

  getAllUsers = async (): Promise<User[]> =>{
    return await UserDatabase.connection(this.TABLE_NAME).select("*")
  }
}

import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  TABLE_NAME = "LABEFLIX_USER"

  async create({ id, name, email, password }: any): Promise<void> {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(this.TABLE_NAME);
  }

  getAllUsers = async () =>{
    return await UserDatabase.connection(this.TABLE_NAME).select("*")
  }
}

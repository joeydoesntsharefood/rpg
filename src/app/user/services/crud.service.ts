import { AppDataSource } from "../../../configs/db";
import { IUser, User } from "../entities/user.entitie";

const service = {
  create: async ({ email, name }: IUser) => {
    try {
      const repository = AppDataSource.getRepository(User);

      const existingUser = await repository.findOne({ where: { email } });

      if (existingUser) 
        throw new Error("Já existe um usuário com o mesmo e-mail");

      const data = new User(email, name);

      await repository.save(data);
      
      return {
        success: true,
        data,
      }
    } catch (e) {
      console.error("[USER | crud.service] - Create");
      console.error(e);

      return { 
        success: false,
        e,
      }
    }
  }
};

export default service;
// import { UserRepository } from "../../repositories/UsersRepository";
// import { CreateUserUseCase } from "./CreateUserUseCase";

import { UsersRepository } from "../../typeorm/UsersRepository";
import { CreateUserController } from "./create-user.controller";
import { CreateUserUseCase } from "./create-user.use-case";


// export default (): CreateUserController => {

//     // const usersRepository = new UserRepository();

//     // const createUserUseCase = new CreateUserUseCase(
//     //     usersRepository
//     // )

//     const createUserController = new CreateUserController(
//         createUserUseCase
//     )

//     return createUserController;
// }

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository)
export const createUserController = new CreateUserController(createUserUseCase)


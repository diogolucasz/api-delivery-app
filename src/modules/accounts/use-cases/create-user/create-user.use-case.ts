
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "./create-user.dto";

export class CreateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ) { }

    async execute(data: ICreateUserDTO) {

        const usersAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if (usersAlreadyExists) {
            throw new Error('Uses already exists');
        }

        await this.usersRepository.create(data);

    }
}
import { ICreateUserDTO } from "../../dto/create-user-dto";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class CreateUserUseCase {

    private usersRepository;

    constructor(
        usersRepository: IUsersRepository
    ) {
        this.usersRepository= usersRepository;
    }

    async execute(data:ICreateUserDTO) {
        
        const usersAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if(usersAlreadyExists){
            throw new Error('Uses already exists');
        }

        const user = new User(data);

        await this.usersRepository.save(user);
    }
}
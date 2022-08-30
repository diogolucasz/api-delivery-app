import { InMemoryUserRepository } from "../../repositories/in-memory/in-memory-users-repository";
import { ICreateUserDTO } from "./create-user.dto";
import { CreateUserUseCase } from "./create-user.use-case";

let createUserUseCase: CreateUserUseCase;
let inMemoryUserRepository: InMemoryUserRepository;

describe("Create User", () => {

    beforeEach(() => {
        inMemoryUserRepository = new InMemoryUserRepository();
        createUserUseCase = new CreateUserUseCase(inMemoryUserRepository);
    })

    it("should be able to create a new user", async () => {

        const user: ICreateUserDTO = {
            email: 'diogolucas@mail.com',
            password: 'password',
            name: 'Diogo'
        }

        await createUserUseCase.execute(user);

        const userCreated = await inMemoryUserRepository.findByName(user.name);

        console.log(userCreated);

        expect(userCreated).toHaveProperty("id")
    });

    //it("should not be able to create a new user with a email thats already in use")
})
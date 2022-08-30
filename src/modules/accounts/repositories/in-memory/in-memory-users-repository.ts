import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class InMemoryUserRepository implements IUsersRepository {

    public users: User[] = [];

    async create({ email, name, password }: User): Promise<void> {

        const user = new User();

        Object.assign(user, {
            email, name, password
        })

        this.users.push(user)
    }

    async findByName(name: string): Promise<User | null> {
        const user = this.users.find(user => user.name === name)

        if (!user) {
            return null!;
        }

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email)

        if (!user) {
            return null!;
        }

        return user;
    }

    async findByID(id: string): Promise<User> {
        const user = this.users.find(user => user.id === id)

        if (!user) {
            return null!;
        }

        return user;
    }
}
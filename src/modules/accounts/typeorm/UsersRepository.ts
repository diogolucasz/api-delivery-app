import { User } from "../entities/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

export class UsersRepository implements IUsersRepository{
    
    findByName(name: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    findByID(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    create(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    findByEmail(string: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    
    save(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
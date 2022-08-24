import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(string: string):Promise<User>;
    save(user:User): Promise<void>;
}
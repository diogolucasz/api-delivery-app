import { User } from "../entities/User";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User | null>;
    findByID(id: string): Promise<User | null>;
    findByName(name: string): Promise<User | null>;
    create(user: User): Promise<void>;
}
import { User } from "src/entities/users.entity";
import { Repository } from "typeorm";
import { UserDTO } from "src/users/dtos/userDto";
export declare class UsersRepository {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    getUsers(): Promise<Omit<User, 'password'>[]>;
    getUser(id: string): Promise<Omit<User, 'password'>>;
    getUserWithOrders(userId: string): Promise<User>;
    getUserByEmail(email: string): Promise<User | null>;
    addUser(user: UserDTO): Promise<User>;
    updateUser(id: string, user: Partial<UserDTO>): Promise<User>;
    deleteUser(id: string): Promise<string>;
    findOne(options: any): Promise<User | null>;
    save(user: Partial<User>): Promise<User>;
}

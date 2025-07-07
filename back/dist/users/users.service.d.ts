import { UsersRepository } from "./users.repository";
import { UserDTO } from "./dtos/userDto";
import { User } from "src/entities/users.entity";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UsersRepository);
    getUsers(): Promise<Omit<User, 'password'>[]>;
    getUserById(id: string): Promise<Omit<User, 'password'>>;
    getUserWithOrders(userId: string): Promise<User>;
    addUser(user: UserDTO): Promise<Omit<User, 'password'>>;
    updateUser(id: string, updateUser: Partial<UserDTO>): Promise<Omit<User, 'password'>>;
    deleteUser(id: string): Promise<string>;
}

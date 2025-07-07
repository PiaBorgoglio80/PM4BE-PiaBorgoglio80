import { UserService } from "./users.service";
import { UpdateUserDTO } from "./dtos/UpdateUserDto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(page?: string, limit?: string): Promise<Record<string, any>>;
    getUserWithOrders(userId: string): Promise<Record<string, any>>;
    updateUser(id: string, updatedUser: UpdateUserDTO): Promise<Record<string, any>>;
    deleteUser(id: string): Promise<string>;
}

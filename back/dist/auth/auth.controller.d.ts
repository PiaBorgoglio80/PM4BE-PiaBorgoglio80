import { AuthService } from "./auth.service";
import { LoginUserDto } from "src/users/dtos/loginUserDto";
import { UserDTO } from "src/users/dtos/userDto";
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAuth(): Promise<string>;
    signIn(credentials: LoginUserDto): Promise<{
        token: string;
        message: string;
    }>;
    signUp(user: UserDTO): Promise<{
        id: string;
        name: string;
        email: string;
        phone: number;
        country: string;
        city: string;
        address: string;
        isAdmin: boolean;
        birthday: Date;
        orders: import("../entities/orders.entity").Order[];
    }>;
}

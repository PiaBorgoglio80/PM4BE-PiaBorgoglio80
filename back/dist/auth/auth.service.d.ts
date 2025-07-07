import { User } from "src/entities/users.entity";
import { LoginUserDto } from "src/users/dtos/loginUserDto";
import { UsersRepository } from "src/users/users.repository";
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersRepository;
    private readonly jwtService;
    constructor(usersRepository: UsersRepository, jwtService: JwtService);
    getHello(): string;
    validateUser({ email, password }: LoginUserDto): Promise<User>;
    login(user: User): Promise<{
        access_token: string;
    }>;
    signIn(email: string, password: string): Promise<{
        token: string;
        message: string;
    }>;
    signUp(user: any): Promise<{
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

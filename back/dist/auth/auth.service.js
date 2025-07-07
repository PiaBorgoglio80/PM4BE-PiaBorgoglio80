"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../users/users.repository");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const roles_enum_1 = require("../roles.enum");
let AuthService = class AuthService {
    usersRepository;
    jwtService;
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    getHello() {
        return 'Hello Auth';
    }
    async validateUser({ email, password }) {
        const user = await this.usersRepository.getUserByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('Credenciales invalidas');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException('Credenciales invalidas');
        }
        return user;
    }
    async login(user) {
        const userRole = user.isAdmin ? roles_enum_1.Role.Admin : roles_enum_1.Role.User;
        const payload = {
            id: user.id,
            email: user.email,
            role: userRole,
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async signIn(email, password) {
        const user = await this.usersRepository.findOne({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new common_1.BadRequestException('Credentials invalid');
        }
        const userRole = user.isAdmin
            ? roles_enum_1.Role.Admin
            : roles_enum_1.Role.User;
        const userPaylod = {
            id: user.id,
            email: user.email,
            role: userRole,
        };
        const token = this.jwtService.sign(userPaylod);
        return {
            token,
            message: 'Sesion iniciada exitosamete',
        };
    }
    ;
    async signUp(user) {
        const { email, password } = user;
        const foundUser = await this.usersRepository.findOne({ where: { email } });
        if (foundUser) {
            throw new common_1.BadRequestException('El usuario ya existe');
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        if (!hashedPassword) {
            throw new common_1.BadRequestException('Hubo un error guardando la contraseña');
        }
        user.birthday = new Date(user.birthday);
        const newUser = await this.usersRepository.save({
            ...user,
            password: hashedPassword,
            isAdmin: false,
        });
        const { password: newUserPassword, ...userWithoutPass } = newUser;
        return userWithoutPass;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
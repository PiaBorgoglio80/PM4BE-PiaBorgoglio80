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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../entities/users.entity");
const typeorm_2 = require("typeorm");
let UsersRepository = class UsersRepository {
    usersRepository;
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async getUsers() {
        const users = await this.usersRepository.find();
        return users.map(({ password, ...userWithoutPass }) => userWithoutPass);
    }
    async getUser(id) {
        const user = await this.usersRepository.findOne({
            where: { id },
            relations: {
                orders: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    async getUserWithOrders(userId) {
        const user = await this.usersRepository.findOne({
            where: { id: userId },
            relations: ['orders'],
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async getUserByEmail(email) {
        const user = await this.usersRepository.findOne({
            where: { email }
        });
        return user;
    }
    async addUser(user) {
        const newUser = this.usersRepository.create(user);
        return await this.usersRepository.save(newUser);
    }
    async updateUser(id, user) {
        const existingUser = await this.usersRepository.findOneBy({ id });
        if (!existingUser) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        const updatedUser = this.usersRepository.merge(existingUser, user);
        return await this.usersRepository.save(updatedUser);
    }
    async deleteUser(id) {
        const result = await this.usersRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return id;
    }
    async findOne(options) {
        return this.usersRepository.findOne(options);
    }
    async save(user) {
        return this.usersRepository.save(user);
    }
};
exports.UsersRepository = UsersRepository;
exports.UsersRepository = UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersRepository);
//# sourceMappingURL=users.repository.js.map
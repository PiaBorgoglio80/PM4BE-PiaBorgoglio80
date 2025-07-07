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
exports.OrdersRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const orders_entity_1 = require("../entities/orders.entity");
const users_entity_1 = require("../entities/users.entity");
const products_entity_1 = require("../entities/products.entity");
const ordersDetails_entity_1 = require("../entities/ordersDetails.entity");
const class_validator_1 = require("class-validator");
let OrdersRepository = class OrdersRepository {
    ordersRepo;
    usersRepo;
    productsRepo;
    orderDetailsRepo;
    constructor(ordersRepo, usersRepo, productsRepo, orderDetailsRepo) {
        this.ordersRepo = ordersRepo;
        this.usersRepo = usersRepo;
        this.productsRepo = productsRepo;
        this.orderDetailsRepo = orderDetailsRepo;
    }
    async addOrder(userId, productIds) {
        const user = await this.usersRepo.findOne({ where: { id: userId } });
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const invalidProductIds = productIds.filter(id => !(0, class_validator_1.isUUID)(id));
        if (invalidProductIds.length > 0) {
            throw new common_1.BadRequestException('Some product IDs are invalid');
        }
        const products = await this.productsRepo.findBy({
            id: (0, typeorm_2.In)(productIds),
        });
        if (products.length !== productIds.length) {
            throw new common_1.NotFoundException('Some products were not found');
        }
        let total = 0;
        for (const product of products) {
            if (product.stock <= 0) {
                throw new common_1.NotFoundException(`Product ${product.name} is out of stock`);
            }
            product.stock -= 1;
            total += Number(product.price);
        }
        await this.productsRepo.save(products);
        const newOrder = this.ordersRepo.create({
            user,
            date: new Date(),
        });
        const savedOrder = await this.ordersRepo.save(newOrder);
        const orderDetails = this.orderDetailsRepo.create({
            price: total,
            products,
            order: savedOrder,
        });
        const savedDetails = await this.orderDetailsRepo.save(orderDetails);
        savedOrder.orderDetails = savedDetails;
        await this.ordersRepo.save(savedOrder);
        return {
            orderId: savedOrder.id,
            total: savedDetails.price,
            detailId: savedDetails.id,
        };
    }
    async getOrder(orderId) {
        const order = await this.ordersRepo.findOne({
            where: { id: orderId },
            relations: {
                user: true,
                orderDetails: {
                    products: true,
                },
            },
        });
        if (!order)
            throw new common_1.NotFoundException('Order not found');
        const { password, ...sanitizedUser } = order.user;
        return {
            id: order.id,
            date: order.date,
            user: sanitizedUser,
            orderDetails: {
                id: order.orderDetails.id,
                price: order.orderDetails.price,
                products: order.orderDetails.products,
            },
        };
    }
};
exports.OrdersRepository = OrdersRepository;
exports.OrdersRepository = OrdersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(orders_entity_1.Order)),
    __param(1, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(products_entity_1.Product)),
    __param(3, (0, typeorm_1.InjectRepository)(ordersDetails_entity_1.OrderDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OrdersRepository);
//# sourceMappingURL=orders.repository.js.map
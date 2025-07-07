import { OrderDto } from "src/users/dtos/orderDto";
import { OrdersService } from "./orders.service";
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    addOrder(order: OrderDto): Promise<{
        orderId: string;
        total: number;
        detailId: string;
    }>;
    getOrder(orderId: string): Promise<{
        id: string;
        date: Date;
        user: {
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
        };
        orderDetails: {
            id: string;
            price: number;
            products: import("../entities/products.entity").Product[];
        };
    }>;
}

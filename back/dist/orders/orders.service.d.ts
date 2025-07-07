import { OrdersRepository } from './orders.repository';
import { Product } from 'src/entities/products.entity';
export declare class OrdersService {
    private readonly ordersRepo;
    constructor(ordersRepo: OrdersRepository);
    addOrder(userId: string, productIds: string[]): Promise<{
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
            products: Product[];
        };
    }>;
}

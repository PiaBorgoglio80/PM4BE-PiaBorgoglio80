import { Repository } from 'typeorm';
import { Order } from 'src/entities/orders.entity';
import { User } from 'src/entities/users.entity';
import { Product } from 'src/entities/products.entity';
import { OrderDetail } from 'src/entities/ordersDetails.entity';
export declare class OrdersRepository {
    private ordersRepo;
    private usersRepo;
    private productsRepo;
    private orderDetailsRepo;
    constructor(ordersRepo: Repository<Order>, usersRepo: Repository<User>, productsRepo: Repository<Product>, orderDetailsRepo: Repository<OrderDetail>);
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
            orders: Order[];
        };
        orderDetails: {
            id: string;
            price: number;
            products: Product[];
        };
    }>;
}

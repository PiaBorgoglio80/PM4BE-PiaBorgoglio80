import { User } from "./users.entity";
import { OrderDetail } from "./ordersDetails.entity";
export declare class Order {
    id: string;
    date: Date;
    orderDetails: OrderDetail;
    user: User;
}

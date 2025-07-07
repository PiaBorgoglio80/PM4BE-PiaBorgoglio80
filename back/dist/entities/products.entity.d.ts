import { Category } from "./categories.entity";
import { OrderDetail } from "./ordersDetails.entity";
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    imgUrl: string;
    category: Category;
    orderDetails: OrderDetail[];
}

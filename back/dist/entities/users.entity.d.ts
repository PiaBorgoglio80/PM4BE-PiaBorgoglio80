import { Order } from "./orders.entity";
export declare class User {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: number;
    country: string;
    city: string;
    address: string;
    isAdmin: boolean;
    birthday: Date;
    orders: Order[];
}

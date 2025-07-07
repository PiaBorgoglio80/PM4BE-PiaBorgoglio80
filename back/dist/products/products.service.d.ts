import { ProductsRepository } from "./products.repository";
import { ProductsDto } from "src/users/dtos/productDto";
export declare class ProductsService {
    private readonly productsRepository;
    constructor(productsRepository: ProductsRepository);
    getProducts(): Promise<import("../entities/products.entity").Product[]>;
    getProductById(id: string): Promise<import("../entities/products.entity").Product>;
    createProduct(product: ProductsDto): Promise<string>;
    modifyProductById(id: string, product: ProductsDto): Promise<string>;
    deleteProductById(id: string): Promise<string>;
    seedProducts(): Promise<string>;
}

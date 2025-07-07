import { Product } from "src/entities/products.entity";
import { Repository } from "typeorm";
import { Category } from "src/entities/categories.entity";
import { ProductsDto } from "src/users/dtos/productDto";
export declare class ProductsRepository {
    private readonly productsRepository;
    private readonly categoriesRepository;
    constructor(productsRepository: Repository<Product>, categoriesRepository: Repository<Category>);
    getProducts(): Promise<Product[]>;
    getProduct(id: string): Promise<Product>;
    addProduct(productDto: ProductsDto): Promise<string>;
    updateProduct(id: string, productDto: ProductsDto): Promise<string>;
    deleteProduct(id: string): Promise<string>;
    seedProducts(): Promise<string>;
}

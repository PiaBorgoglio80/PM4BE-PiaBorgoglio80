import { ProductsService } from "./products.service";
import { ProductsDto } from "src/users/dtos/productDto";
import { Product } from "src/entities/products.entity";
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    getProducts(): Promise<Product[]>;
    seedProducts(): Promise<string>;
    getProductsById(id: string): Promise<Product>;
    postProducts(product: ProductsDto): Promise<string>;
    updateProductsById(id: string, product: ProductsDto): Promise<string>;
    deleteProductsById(id: string): Promise<string>;
}

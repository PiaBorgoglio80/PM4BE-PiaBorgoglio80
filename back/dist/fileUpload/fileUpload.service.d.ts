import { Product } from "src/entities/products.entity";
import { Repository } from "typeorm";
import { FileUpLoadRepository } from "./fileUpload.repository";
export declare class FileUploadService {
    private readonly fileUploadRepository;
    private readonly productsRepository;
    constructor(fileUploadRepository: FileUpLoadRepository, productsRepository: Repository<Product>);
    uploadProductImage(file: Express.Multer.File, productId: string): Promise<Product | null>;
}

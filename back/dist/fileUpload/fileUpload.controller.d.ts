import { FileUploadService } from "./fileUpload.service";
export declare class FileUploadController {
    private readonly fileUploadService;
    constructor(fileUploadService: FileUploadService);
    uploadProductImage(productId: string, file: Express.Multer.File): Promise<import("../entities/products.entity").Product | null>;
}

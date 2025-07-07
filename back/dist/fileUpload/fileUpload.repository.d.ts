import { UploadApiResponse } from "cloudinary";
export declare class FileUpLoadRepository {
    uploadImage(file: Express.Multer.File): Promise<UploadApiResponse>;
}

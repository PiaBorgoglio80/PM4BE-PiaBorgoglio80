"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_entity_1 = require("../entities/products.entity");
const typeorm_2 = require("typeorm");
const fileUpload_repository_1 = require("./fileUpload.repository");
let FileUploadService = class FileUploadService {
    fileUploadRepository;
    productsRepository;
    constructor(fileUploadRepository, productsRepository) {
        this.fileUploadRepository = fileUploadRepository;
        this.productsRepository = productsRepository;
    }
    async uploadProductImage(file, productId) {
        const product = await this.productsRepository.findOneBy({ id: productId });
        if (!product) {
            throw new common_1.NotFoundException('Product noy found');
        }
        const uploadedImage = await this.fileUploadRepository.uploadImage(file);
        console.log(uploadedImage);
        await this.productsRepository.update(product.id, {
            imgUrl: uploadedImage.secure_url,
        });
        const updateProduct = await this.productsRepository.findOneBy({
            id: productId
        });
        return updateProduct;
    }
};
exports.FileUploadService = FileUploadService;
exports.FileUploadService = FileUploadService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(products_entity_1.Product)),
    __metadata("design:paramtypes", [fileUpload_repository_1.FileUpLoadRepository,
        typeorm_2.Repository])
], FileUploadService);
//# sourceMappingURL=fileUpload.service.js.map
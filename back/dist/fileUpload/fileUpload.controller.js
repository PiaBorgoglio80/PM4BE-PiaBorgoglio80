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
exports.FileUploadController = void 0;
const common_1 = require("@nestjs/common");
const fileUpload_service_1 = require("./fileUpload.service");
const platform_express_1 = require("@nestjs/platform-express");
let FileUploadController = class FileUploadController {
    fileUploadService;
    constructor(fileUploadService) {
        this.fileUploadService = fileUploadService;
    }
    async uploadProductImage(productId, file) {
        return this.fileUploadService.uploadProductImage(file, productId);
    }
};
exports.FileUploadController = FileUploadController;
__decorate([
    (0, common_1.Post)('uploadImage/:productId'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Param)('productId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.FileTypeValidator({ fileType: /^image\/(jpeg|png|webp)$/ }),
            new common_1.MaxFileSizeValidator({
                maxSize: 200000,
                message: "Archivo demasiado grande"
            })
        ],
    }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FileUploadController.prototype, "uploadProductImage", null);
exports.FileUploadController = FileUploadController = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [fileUpload_service_1.FileUploadService])
], FileUploadController);
//# sourceMappingURL=fileUpload.controller.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class ProductsDto {
    name;
    description;
    price;
    stock;
    imgUrl;
    categoryId;
}
exports.ProductsDto = ProductsDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Nombre del producto", example: "Remera Adidas" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProductsDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Descripción del producto", example: "Remera deportiva de algodón" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProductsDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Precio del producto", example: 4999 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ProductsDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Stock disponible del producto", example: 50 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ProductsDto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "URL de la imagen del producto", example: "https://mi-tienda.com/imagenes/remera.jpg", required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductsDto.prototype, "imgUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "ID de la categoría del producto", example: "1ecf835c-dbb9-4038-9d80-9eacf2cd9574" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ProductsDto.prototype, "categoryId", void 0);
//# sourceMappingURL=productDto.js.map
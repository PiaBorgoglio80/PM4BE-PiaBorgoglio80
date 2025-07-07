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
exports.OrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class OrderDto {
    userId;
    productIds;
}
exports.OrderDto = OrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "ID del usuario que realiza la orden",
        example: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], OrderDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "IDs de los productos que se están ordenando",
        type: [String],
        example: [
            "a8a110d5-fc49-43c5-bf49-76d3e3b3c0b8",
            "bbf442d1-5f55-4a9c-9bb1-ccf71d5a5e6c"
        ],
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1),
    (0, class_validator_1.IsUUID)("all", { each: true }),
    __metadata("design:type", Array)
], OrderDto.prototype, "productIds", void 0);
//# sourceMappingURL=orderDto.js.map
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
exports.UserDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const matchPassword_1 = require("../../decorators/matchPassword");
class UserDTO {
    name;
    email;
    password;
    confirmPassword;
    address;
    phone;
    country;
    city;
    birthday;
}
exports.UserDTO = UserDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Nombre completo del usuario", example: "Juan Pérez" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(80),
    __metadata("design:type", String)
], UserDTO.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Correo electrónico del usuario", example: "mail@mail.com" }),
    (0, class_validator_1.IsEmail)({}, { message: 'El correo electrónico no tiene un formato válido' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: "Contraseña segura (mínimo 8 caracteres, una mayúscula, una minúscula, un número y un símbolo)",
        example: "Password123!"
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,15}$/, { message: "La contraseña debe tener entre 8 y 15 caracteres, una mayúscula, una minúscula, un número y un símbolo." }),
    __metadata("design:type", String)
], UserDTO.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Confirmación de la contraseña", example: "Password123!" }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Validate)(matchPassword_1.MatchPassword, ['password']),
    __metadata("design:type", String)
], UserDTO.prototype, "confirmPassword", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Dirección del usuario", example: "Calle Falsa 123" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(3, 80),
    __metadata("design:type", String)
], UserDTO.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Número de teléfono del usuario", example: 1123456789 }),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({}, { message: 'El teléfono debe ser un número' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UserDTO.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "País del usuario", example: "Argentina" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(5, 20),
    __metadata("design:type", String)
], UserDTO.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Ciudad del usuario", example: "Buenos Aires" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(5, 20),
    __metadata("design:type", String)
], UserDTO.prototype, "city", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Fecha de nacimiento", example: "1991-07-12" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], UserDTO.prototype, "birthday", void 0);
//# sourceMappingURL=userDto.js.map
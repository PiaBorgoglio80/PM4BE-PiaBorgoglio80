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
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const preload_1 = require("../data/preload");
const products_entity_1 = require("../entities/products.entity");
const typeorm_2 = require("typeorm");
const categories_entity_1 = require("../entities/categories.entity");
let ProductsRepository = class ProductsRepository {
    productsRepository;
    categoriesRepository;
    constructor(productsRepository, categoriesRepository) {
        this.productsRepository = productsRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async getProducts() {
        const products = await this.productsRepository.find();
        return products;
    }
    async getProduct(id) {
        const product = await this.productsRepository.findOneBy({ id });
        if (!product) {
            throw new common_1.NotFoundException('product not found');
        }
        return product;
    }
    async addProduct(productDto) {
        const category = await this.categoriesRepository.findOneBy({ id: productDto.categoryId });
        if (!category) {
            throw new common_1.NotFoundException('Categoría no encontrada');
        }
        const newProduct = this.productsRepository.create({
            ...productDto,
            category,
        });
        const savedProduct = await this.productsRepository.save(newProduct);
        return savedProduct.id;
    }
    async updateProduct(id, productDto) {
        const category = await this.categoriesRepository.findOneBy({ id: productDto.categoryId });
        if (!category) {
            throw new common_1.NotFoundException('Categoría no encontrada');
        }
        const updated = await this.productsRepository.preload({
            id,
            ...productDto,
            category,
        });
        if (!updated) {
            throw new common_1.NotFoundException('Product not found');
        }
        const saved = await this.productsRepository.save(updated);
        return saved.id;
    }
    async deleteProduct(id) {
        const product = await this.productsRepository.findOneBy({ id });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        await this.productsRepository.remove(product);
        return product.id;
    }
    async seedProducts() {
        const categories = await this.categoriesRepository.find();
        await Promise.all(preload_1.preload?.map(async (element) => {
            const productCategory = categories.find((category) => category.name == element.category);
            if (!productCategory)
                throw new common_1.NotFoundException('Category not found');
            const product = new products_entity_1.Product();
            product.name = element.name;
            product.description = element.description;
            product.price = element.price;
            product.stock = element.stock;
            product.category = productCategory;
            await this.productsRepository
                .createQueryBuilder()
                .insert()
                .into(products_entity_1.Product)
                .values(product)
                .orUpdate(['description', 'price', 'stock'], ['name'])
                .execute();
        }));
        return 'Products added';
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.Product)),
    __param(1, (0, typeorm_1.InjectRepository)(categories_entity_1.Category)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map
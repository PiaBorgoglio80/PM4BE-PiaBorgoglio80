import { Category } from "src/entities/categories.entity";
import { Repository } from "typeorm";
export declare class CategoriesRepository {
    private readonly categoriesRepository;
    constructor(categoriesRepository: Repository<Category>);
    getCategories(): Promise<Category[]>;
    addCategories(): Promise<string>;
}

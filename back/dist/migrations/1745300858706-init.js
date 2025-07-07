"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1745300858706 = void 0;
const typeorm_1 = require("typeorm");
class Init1745300858706 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'categories',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                }
            ],
        }));
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'products',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'price',
                    type: 'float',
                },
                {
                    name: 'categoryId',
                    type: 'int',
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                }
            ],
        }));
        await queryRunner.createForeignKey('products', new typeorm_1.TableForeignKey({
            columnNames: ['categoryId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categories',
            onDelete: 'CASCADE',
        }));
    }
    async down(queryRunner) {
        const table = await queryRunner.getTable('products');
        if (table) {
            const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('categoryId') !== -1);
            if (foreignKey) {
                await queryRunner.dropForeignKey('products', foreignKey);
            }
            await queryRunner.dropTable('products');
            await queryRunner.dropTable('categories');
        }
    }
}
exports.Init1745300858706 = Init1745300858706;
//# sourceMappingURL=1745300858706-init.js.map
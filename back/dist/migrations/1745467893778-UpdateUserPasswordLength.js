"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserPasswordLength1745467893778 = void 0;
class UpdateUserPasswordLength1745467893778 {
    name = 'UpdateUserPasswordLength1745467893778';
    async up(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "users"
            ALTER COLUMN "password" TYPE VARCHAR(100)
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            ALTER TABLE "users"
            ALTER COLUMN "password" TYPE VARCHAR(20)
        `);
    }
}
exports.UpdateUserPasswordLength1745467893778 = UpdateUserPasswordLength1745467893778;
//# sourceMappingURL=1745467893778-UpdateUserPasswordLength.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserEntityNullableFalse1747701275859 = void 0;
class UpdateUserEntityNullableFalse1747701275859 {
    name = 'UpdateUserEntityNullableFalse1747701275859';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "phone" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "country" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "city" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "address" SET NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "address" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "city" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "country" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "phone" DROP NOT NULL`);
    }
}
exports.UpdateUserEntityNullableFalse1747701275859 = UpdateUserEntityNullableFalse1747701275859;
//# sourceMappingURL=1747701275859-UpdateUserEntityNullableFalse.js.map
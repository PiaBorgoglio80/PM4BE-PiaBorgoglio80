"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewInit1745812733285 = void 0;
class NewInit1745812733285 {
    name = 'NewInit1745812733285';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" ADD "isAdmin" boolean NOT NULL DEFAULT false`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "isAdmin"`);
    }
}
exports.NewInit1745812733285 = NewInit1745812733285;
//# sourceMappingURL=1745812733285-newInit.js.map
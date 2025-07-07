"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionSource = void 0;
const config_1 = require("@nestjs/config");
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
const _1745467893778_UpdateUserPasswordLength_1 = require("../migrations/1745467893778-UpdateUserPasswordLength");
const _1745812733285_newInit_1 = require("../migrations/1745812733285-newInit");
const _1747701275859_UpdateUserEntityNullableFalse_1 = require("../migrations/1747701275859-UpdateUserEntityNullableFalse");
(0, dotenv_1.config)({ path: '.env.development.local' });
const config = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    autoLoadEntities: true,
    synchronize: false,
    logging: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    migrations: [_1745467893778_UpdateUserPasswordLength_1.UpdateUserPasswordLength1745467893778, _1745812733285_newInit_1.NewInit1745812733285, _1747701275859_UpdateUserEntityNullableFalse_1.UpdateUserEntityNullableFalse1747701275859],
};
exports.default = (0, config_1.registerAs)('typeorm', () => config);
exports.connectionSource = new typeorm_1.DataSource(config);
//# sourceMappingURL=typeorm.js.map
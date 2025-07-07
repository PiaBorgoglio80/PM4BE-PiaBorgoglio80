"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const loggerGlobal_1 = require("./middleware/loggerGlobal");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_2.DocumentBuilder()
        .setTitle('Product Order Backend Application')
        .setDescription('Development done to accomplish the m4 homeork for soyHenr.com')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use(loggerGlobal_1.loggerGlobal);
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true, whitelist: true }));
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map
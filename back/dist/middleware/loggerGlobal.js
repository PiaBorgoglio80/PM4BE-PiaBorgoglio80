"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerGlobal = loggerGlobal;
function loggerGlobal(req, res, next) {
    console.log({
        ruta: req.path,
        url: req.url,
        metodo: req.method,
        fechaHora: new Date().toISOString(),
    });
    next();
}
//# sourceMappingURL=loggerGlobal.js.map
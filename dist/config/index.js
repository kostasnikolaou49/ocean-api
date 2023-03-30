"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    version: process.env.APP_VERSION || '1.0',
    env: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT, 10) || 4000,
});
//# sourceMappingURL=index.js.map
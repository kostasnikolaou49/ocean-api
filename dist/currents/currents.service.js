"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const FACTOR = 1.94;
let ProjectsService = class ProjectsService {
    async getCurrents() {
        const uData = await fs_1.promises.readFile(`${process.cwd()}/data/u.txt`, 'utf8');
        const vData = await fs_1.promises.readFile(`${process.cwd()}/data/v.txt`, 'utf8');
        const knotsU = uData.split('\r\n').map((row) => row.split('\t'));
        const knotsV = vData.split('\r\n').map((row) => row.split('\t'));
        const currents = knotsU.map((row, rowIndex) => row.map((cell, cellIndex) => {
            const u = parseFloat(cell) || 0;
            const v = parseFloat(knotsV[rowIndex][cellIndex]) || 0;
            const intensity = (u * u + v * v) * FACTOR;
            return { u, v, intensity };
        }));
        return currents;
    }
};
ProjectsService = __decorate([
    (0, common_1.Injectable)()
], ProjectsService);
exports.ProjectsService = ProjectsService;
//# sourceMappingURL=currents.service.js.map
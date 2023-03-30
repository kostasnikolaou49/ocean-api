import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';

import { Current } from 'src/types/current.type';

const FACTOR = 1.94;

@Injectable()
export class ProjectsService {
  async getCurrents(): Promise<Current[][]> {
    const uData = await fs.readFile(`${process.cwd()}/data/u.txt`, 'utf8');
    const vData = await fs.readFile(`${process.cwd()}/data/v.txt`, 'utf8');

    const knotsU = uData.split('\r\n').map((row) => row.split('\t'));
    const knotsV = vData.split('\r\n').map((row) => row.split('\t'));

    const currents = knotsU.map((row, rowIndex) =>
      row.map((cell, cellIndex) => {
        const u = parseFloat(cell) || 0;
        const v = parseFloat(knotsV[rowIndex][cellIndex]) || 0;
        const intensity = (u * u + v * v) * FACTOR;
        return { u, v, intensity };
      }),
    );

    return currents;
  }
}

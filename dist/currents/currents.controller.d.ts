import { ProjectsService } from './currents.service';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    getCurrents(): Promise<import("../types/current.type").Current[][]>;
}

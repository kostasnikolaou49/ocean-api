import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './currents.service';

@Controller('currents')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async getCurrents() {
    return this.projectsService.getCurrents();
  }
}

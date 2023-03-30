import { Module } from '@nestjs/common';
import { ProjectsController } from './currents.controller';
import { ProjectsService } from './currents.service';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}

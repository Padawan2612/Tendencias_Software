import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskControllerController } from './task-controller/task-controller.controller';
import { TaskServiceService } from './task-service/task-service.service';
import { Task } from './task.entity';
import { ExampleServiceService } from './example-service/example-service.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  controllers: [TaskControllerController],
  providers: [TaskServiceService, ExampleServiceService],
})
export class TaskModule {}

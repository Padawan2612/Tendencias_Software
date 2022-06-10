import { Module } from '@nestjs/common';
import { ExampleServiceService } from './example-service/example-service.service';
import { ExampleControllerController } from './example-controller/example-controller.controller';

@Module({
  providers: [ExampleServiceService],
  controllers: [ExampleControllerController]
})
export class ExampleModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TestModule } from './test/test.module';
import { NullModule } from './null/null.module';
import { ExampleModule } from './example/example.module';

@Module({
  imports: [TaskModule, TestModule, NullModule, ExampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

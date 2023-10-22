import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuestionModule } from './modules/question/question.module';

@Module({
  imports: [QuizModule, QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

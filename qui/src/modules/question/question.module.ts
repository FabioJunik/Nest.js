import { Module } from '@nestjs/common';
import { Question } from './entities/question.entity';
import { QuestionController } from './question.controller';
import { CreateQuestionUseCase } from './use-cases/create-question.usecase';
import { QuestionPrismaRepository } from './repositories/implementations/question-prisma.repository';
import { FindAllQuestionUseCase } from './use-cases/find-all-questions.usecase';

@Module({
  imports: [Question],
  controllers: [QuestionController],
  providers: [
    QuestionPrismaRepository,
    CreateQuestionUseCase,
    FindAllQuestionUseCase,
    {
      provide: 'IQuestionRepository',
      useExisting: QuestionPrismaRepository,
    },
  ],
})
export class QuestionModule {}

import { Module } from '@nestjs/common';
import { Question } from './entities/question.entity';
import { QuestionController } from './question.controller';
import { CreateQuestionUseCase } from './use-cases/create-question.usecase';
import { QuestionPrismaRepository } from './repositories/implementations/question-prisma.repository';
import { FindAllQuestionUseCase } from './use-cases/find-all-questions.usecase';
import { FindOneQuestionUseCase } from './use-cases/find-one-questions.usecase';

@Module({
  imports: [Question],
  controllers: [QuestionController],
  providers: [
    QuestionPrismaRepository,
    CreateQuestionUseCase,
    FindAllQuestionUseCase,
    FindOneQuestionUseCase,
    {
      provide: 'IQuestionRepository',
      useExisting: QuestionPrismaRepository,
    },
  ],
})
export class QuestionModule {}

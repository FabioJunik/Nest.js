import { Module } from '@nestjs/common';
import { Question } from './entities/question.entity';
import { QuestionController } from './question.controller';
import { CreateQuestionUseCase } from './use-cases/create-question.usecase';
import { QuestionPrismaRepository } from './repositories/implementations/question-prisma.repository';

@Module({
  imports: [Question],
  controllers: [QuestionController],
  providers: [
    QuestionPrismaRepository,
    CreateQuestionUseCase,
    {
      provide: 'IQuestionRepository',
      useExisting: QuestionPrismaRepository,
    },
  ],
})
export class QuestionModule {}

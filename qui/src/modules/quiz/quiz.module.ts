import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { CreateQuizUseCase } from './use-cases/create-quiz.usecase';
import { QuizPrismaRepository } from './repositories/implementations/quiz-prisma.repository';
import { Quiz } from './entities/quiz.entity';
import { FindAllQuizUseCase } from './use-cases/find-all-quiz.usecase';
import { FindOneQuizUseCase } from './use-cases/find-one-quiz.usecase';
import { UpdateQuizUseCase } from './use-cases/update-quiz.usecase';
import { DeleteQuizUseCase } from './use-cases/delete-quiz.usecase';

@Module({
  imports: [Quiz],
  controllers: [QuizController],
  providers: [
    QuizPrismaRepository,
    CreateQuizUseCase,
    FindAllQuizUseCase,
    FindOneQuizUseCase,
    UpdateQuizUseCase,
    DeleteQuizUseCase,
    {
      provide: 'IQuizRepository',
      useExisting: QuizPrismaRepository,
    },
  ],
})
export class QuizModule {}

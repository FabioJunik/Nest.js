import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { CreateQuizUseCase } from './use-cases/create-quiz.usecase';
import { QuizPrismaRepository } from './repositories/implementations/quiz-prisma.repository';
import { Quiz } from './entities/quiz.entity';

@Module({
  imports: [Quiz],
  controllers: [QuizController],
  providers: [
    CreateQuizUseCase,
    QuizPrismaRepository,
    {
      provide: 'IQuizRepository',
      useExisting: QuizPrismaRepository,
    },
  ],
})
export class QuizModule {}

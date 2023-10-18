import { Inject, Injectable } from '@nestjs/common';
import { IQuizRepository } from '../repositories/IQuiz-repository';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class FindOneQuizUseCase {
  constructor(
    @Inject('IQuizRepository')
    private quizRepository: IQuizRepository,
  ) {}

  async execute(id: string): Promise<Quiz> {
    const quizOrNull = await this.quizRepository.findOne(id);

    return quizOrNull;
  }
}

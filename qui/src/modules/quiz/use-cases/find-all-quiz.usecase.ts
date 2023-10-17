import { Injectable, Inject } from '@nestjs/common';
import { IQuizRepository } from '../repositories/IQuiz-repository';

@Injectable()
export class FindAllQuizUseCase {
  constructor(
    @Inject('IQuizRepository')
    private quizRepository: IQuizRepository,
  ) {}

  async execute() {
    const allQuizs = await this.quizRepository.findAll();

    return allQuizs;
  }
}

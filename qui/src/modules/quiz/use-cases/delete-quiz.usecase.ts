import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { IQuizRepository } from '../repositories/IQuiz-repository';

@Injectable()
export class DeleteQuizUseCase {
  constructor(
    @Inject('IQuizRepository')
    private quizRepository: IQuizRepository,
  ) {}

  async execute(id: string) {
    const quizOrNull = await this.quizRepository.findOne(id);

    if (!quizOrNull) throw new NotFoundException('Quiz não encontrado !');

    await this.quizRepository.delete(id);
  }
}

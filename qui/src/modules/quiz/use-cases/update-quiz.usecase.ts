import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { IQuizRepository } from '../repositories/IQuiz-repository';
import { UpdateQuizDto } from '../dto/update-quiz.dto';

@Injectable()
export class UpdateQuizUseCase {
  constructor(
    @Inject('IQuizRepository')
    private quizRepository: IQuizRepository,
  ) {}

  async execute(id: string, data: UpdateQuizDto) {
    const quizOrNull = await this.quizRepository.findOne(id);

    if (quizOrNull) throw new NotFoundException('Quiz não encontrado !');

    await this.quizRepository.update(id, data);
  }
}

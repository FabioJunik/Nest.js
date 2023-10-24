import { Inject, Injectable } from '@nestjs/common';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { IQuizRepository } from '../repositories/IQuiz-repository';

@Injectable()
export class CreateQuizUseCase {
  constructor(
    @Inject('IQuizRepository')
    private quizRepository: IQuizRepository,
  ) {}

  async execute({ name }: CreateQuizDto) {
    await this.quizRepository.create({ name });
  }
}

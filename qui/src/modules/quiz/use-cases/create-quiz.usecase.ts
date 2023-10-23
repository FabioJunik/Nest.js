import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { IQuizRepository } from '../repositories/IQuiz-repository';

@Injectable()
export class CreateQuizUseCase {
  constructor(
    @Inject('IQuizRepository')
    private quizRepository: IQuizRepository,
  ) {}

  async execute({ name }: CreateQuizDto) {
    if (!name) throw new BadRequestException('O nome é obrigatorio !');

    await this.quizRepository.create({ name });
  }
}

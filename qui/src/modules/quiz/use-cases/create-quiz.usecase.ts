import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { IQuizRepository } from '../repositories/IQuiz-repository';
import { Quiz } from '../entities/quiz.entity';
import crypto from 'crypto';

@Injectable()
export class CreateQuizUseCase {
  constructor(
    @Inject('IQuizRepository')
    private quizRepository: IQuizRepository,
  ) {}

  async execute({ name }: CreateQuizDto) {
    const quizExists = await this.quizRepository.findByName(name);

    if (quizExists)
      throw new BadRequestException('Quiz já registado com esse nome');

    const quiz = new Quiz({ name });
    await this.quizRepository.create(quiz);
  }
}

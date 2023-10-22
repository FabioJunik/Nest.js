import { Inject, Injectable } from '@nestjs/common';
import { IQuestionRepository } from '../repositories/IQuestion.repository';
import { Question } from '../entities/question.entity';

@Injectable()
export class FindOneQuestionUseCase {
  constructor(
    @Inject('IQuestionRepository')
    private questionRepository: IQuestionRepository,
  ) {}
  async execute(id: string): Promise<Question> {
    const questions = await this.questionRepository.findOne(id);

    return questions;
  }
}

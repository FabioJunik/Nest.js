import { Inject, Injectable } from '@nestjs/common';
import { IQuestionRepository } from '../repositories/IQuestion.repository';
import { Question } from '../entities/question.entity';

@Injectable()
export class FindAllQuestionUseCase {
  constructor(
    @Inject('IQuestionRepository')
    private questionRepository: IQuestionRepository,
  ) {}
  async execute(): Promise<Question[]> {
    const questions = await this.questionRepository.findAll();

    return questions;
  }
}

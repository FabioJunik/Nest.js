import { Inject, Injectable } from '@nestjs/common';
import { IQuestionRepository } from '../repositories/IQuestion.repository';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Question } from '../entities/question.entity';

@Injectable()
export class CreateQuestionUseCase {
  constructor(
    @Inject('IQuestionRepository')
    private questionRepository: IQuestionRepository,
  ) {}

  async execute(data: CreateQuestionDto) {
    const question = new Question(data);
    await this.questionRepository.create(question);
  }
}

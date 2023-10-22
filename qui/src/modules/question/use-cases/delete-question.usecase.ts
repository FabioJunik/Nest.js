import { Inject, NotFoundException } from '@nestjs/common';
import { IQuestionRepository } from '../repositories/IQuestion.repository';

export class DeleteQuestionUseCase {
  constructor(
    @Inject('IQuestionRepository')
    private questionRepository: IQuestionRepository,
  ) {}

  async execute(id: string) {
    const questionOrNull = await this.questionRepository.findOne(id);

    if (!questionOrNull)
      throw new NotFoundException('Pergunta não encontrada !');

    await this.questionRepository.delete(id);
  }
}

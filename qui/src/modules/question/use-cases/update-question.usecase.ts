import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IQuestionRepository } from '../repositories/IQuestion.repository';
import { UpdateQuestionDto } from '../dto/update-Question.dto';

@Injectable()
export class UpdateQuestionUseCase {
  constructor(
    @Inject('IQuestionRepository')
    private questionRepository: IQuestionRepository,
  ) {}

  async execute(id: string, data: UpdateQuestionDto) {
    const questionOrNull = await this.questionRepository.findOne(id);

    if (!questionOrNull)
      throw new NotFoundException('Pergunta não encontrada !');

    await this.questionRepository.update(id, data);
  }
}

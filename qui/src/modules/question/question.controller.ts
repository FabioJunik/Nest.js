import { Body, Controller, Post } from '@nestjs/common';
import { CreateQuestionUseCase } from './use-cases/create-question.usecase';
import { CreateQuestionDto } from './dto/create-question.dto';

@Controller('question')
export class QuestionController {
  constructor(private createQuestionUseCase: CreateQuestionUseCase) {}
  @Post()
  create(@Body() data: CreateQuestionDto) {
    return this.createQuestionUseCase.execute(data);
  }
}

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateQuestionUseCase } from './use-cases/create-question.usecase';
import { CreateQuestionDto } from './dto/create-question.dto';
import { FindAllQuestionUseCase } from './use-cases/find-all-questions.usecase';
import { FindOneQuestionUseCase } from './use-cases/find-one-questions.usecase';

@Controller('question')
export class QuestionController {
  constructor(
    private createQuestionUseCase: CreateQuestionUseCase,
    private findAllQuestionUseCase: FindAllQuestionUseCase,
    private findOneQuestionUseCase: FindOneQuestionUseCase,
  ) {}

  @Post()
  create(@Body() data: CreateQuestionDto) {
    return this.createQuestionUseCase.execute(data);
  }

  @Get()
  findAll() {
    return this.findAllQuestionUseCase.execute();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.findOneQuestionUseCase.execute(id);
  }
}

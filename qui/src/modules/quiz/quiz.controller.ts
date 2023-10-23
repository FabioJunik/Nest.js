import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { CreateQuizUseCase } from './use-cases/create-quiz.usecase';
import { FindAllQuizUseCase } from './use-cases/find-all-quiz.usecase';
import { FindOneQuizUseCase } from './use-cases/find-one-quiz.usecase';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { UpdateQuizUseCase } from './use-cases/update-quiz.usecase';

@Controller('quiz')
export class QuizController {
  constructor(
    private readonly createQuizUseCase: CreateQuizUseCase,
    private readonly findAllQuizUseCase: FindAllQuizUseCase,
    private readonly findOneQuizUseCase: FindOneQuizUseCase,
    private readonly updateQuizUseCase: UpdateQuizUseCase,
  ) {}

  @Post()
  async create(@Body() createQuizDto: CreateQuizDto) {
    await this.createQuizUseCase.execute(createQuizDto);

    return {
      status: 200,
      message: 'Quiz criado com sucesso !',
    };
  }

  @Get()
  findAll() {
    return this.findAllQuizUseCase.execute();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findOneQuizUseCase.execute(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return this.updateQuizUseCase.execute(id, updateQuizDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.findOneQuizUseCase.execute(id);
  }
}

import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { CreateQuizUseCase } from './use-cases/create-quiz.usecase';
import { FindAllQuizUseCase } from './use-cases/find-all-quiz.usecase';

@Controller('quiz')
export class QuizController {
  constructor(
    private readonly createQuizUseCase: CreateQuizUseCase,
    private readonly findAllQuizUseCase: FindAllQuizUseCase,
  ) {}

  @Post()
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.createQuizUseCase.execute(createQuizDto);
  }

  @Get()
  findAll() {
    return this.findAllQuizUseCase.execute();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.quizService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
  //   return this.quizService.update(+id, updateQuizDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.quizService.remove(+id);
  // }
}

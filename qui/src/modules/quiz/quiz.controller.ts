import { Controller, Post, Body } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { CreateQuizUseCase } from './use-cases/create-quiz.usecase';

@Controller('quiz')
export class QuizController {
  constructor(private readonly createQuizUseCase: CreateQuizUseCase) {}

  @Post()
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.createQuizUseCase.execute(createQuizDto);
  }

  // @Get()
  // findAll() {
  //   return this.quizService.findAll();
  // }

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

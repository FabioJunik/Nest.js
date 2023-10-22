import { CreateQuestionDto } from 'src/modules/Question/dto/create-Question.dto';
import { UpdateQuestionDto } from 'src/modules/Question/dto/update-Question.dto';
import { Question } from 'src/modules/Question/entities/Question.entity';
import { IQuestionRepository } from '../IQuestion.repository';

export class QuestionPrismaRepository implements IQuestionRepository {
  async create(createQuestionDto: CreateQuestionDto): Promise<void> {
    console.log('Question CREATEDED');
  }
  async update(
    id: string,
    updateQuestionDto: UpdateQuestionDto,
  ): Promise<void> {
    console.log('Q UPDATEDED');
  }
  async findAll(): Promise<Question[]> {
    console.log('Question FIND ALL');
    return [];
  }
  async findOne(id: string): Promise<Question | null> {
    console.log('QUESTION FIND ONE');
    return null;
  }
  async delete(id: string): Promise<void> {
    console.log('QUESTION DELETE');
  }
}

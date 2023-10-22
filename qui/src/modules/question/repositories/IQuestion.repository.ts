import { CreateQuestionDto } from '../dto/create-question.dto';
import { UpdateQuestionDto } from '../dto/update-Question.dto';
import { Question } from '../entities/question.entity';

export interface IQuestionRepository {
  create(data: CreateQuestionDto): Promise<void>;
  update(id: string, data: UpdateQuestionDto): Promise<void>;
  findAll(): Promise<Question[]>;
  findOne(id: string): Promise<Question | null>;
  delete(id: string): Promise<void>;
}

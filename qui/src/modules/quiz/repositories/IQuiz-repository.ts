import { CreateQuizDto } from '../dto/create-quiz.dto';
import { UpdateQuizDto } from '../dto/update-quiz.dto';
import { Quiz } from '../entities/quiz.entity';

export interface IQuizRepository {
  create(createQuizDto: CreateQuizDto): Promise<void>;
  update(id: string, updateQuizDto: UpdateQuizDto): Promise<void>;
  findAll(): Promise<Quiz[]>;
  findOne(id: string): Promise<Quiz | null>;
  delete(id: string): Promise<void>;
}

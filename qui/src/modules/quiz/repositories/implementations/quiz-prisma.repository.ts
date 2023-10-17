import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from '../../dto/create-quiz.dto';
import { UpdateQuizDto } from '../../dto/update-quiz.dto';
import { Quiz } from '../../entities/quiz.entity';
import { IQuizRepository } from '../IQuiz-repository';

@Injectable()
export class QuizPrismaRepository implements IQuizRepository {
  async create(createQuizDto: CreateQuizDto): Promise<void> {
    console.log('Quiz created');
  }

  async findAll(): Promise<Quiz[]> {
    console.log('All Quiz found');
    return [];
  }

  async findOne(id: string): Promise<Quiz | null> {
    console.log(`This action returns a #${id} quiz`);
    return null;
  }

  async update(id: string, updateQuizDto: UpdateQuizDto): Promise<void> {
    console.log(`This action updates a #${id} quiz`);
  }

  async delete(id: string): Promise<void> {
    console.log(`This action removes a #${id} quiz`);
  }
}

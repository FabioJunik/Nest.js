import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from '../../dto/create-quiz.dto';
import { UpdateQuizDto } from '../../dto/update-quiz.dto';
import { Quiz } from '../../entities/quiz.entity';
import { IQuizRepository } from '../IQuiz-repository';
import { prisma } from 'src/prisma.service';

@Injectable()
export class QuizPrismaRepository implements IQuizRepository {
  async create(createQuizDto: CreateQuizDto): Promise<void> {
    await prisma.quiz.create({
      data: createQuizDto,
    });
  }

  async findAll(): Promise<Quiz[]> {
    const quizs = await prisma.quiz.findMany();
    return quizs;
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

  async findByName(name: string): Promise<Quiz | null> {
    const quiz = await prisma.quiz.findFirst({
      where: {
        name: {
          mode: 'insensitive',
          equals: name,
        },
      },
    });

    return quiz;
  }
}

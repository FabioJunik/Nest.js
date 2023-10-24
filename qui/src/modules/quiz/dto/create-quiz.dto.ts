import { IsNotEmpty } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'O nome do quiz não pode estar vazio !' })
  name: string;
}

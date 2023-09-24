import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { EmailUnico } from "../validacao/email-unico";

export class CriaUsuarioDTO {
    @IsNotEmpty({message: 'O nome não pode ser vazio'})
    @IsString({message: 'O nome precisa ser uma string'})
    nome: string;

    @IsEmail(undefined, {message: 'O e-mail informado é invalido'})
    @EmailUnico({message: 'Já existe um usuario com este email'})
    email: string;

    @MinLength(6, {message: 'A senha precisa ter pelo menos 6 caracteres'})
    senha: string;
}
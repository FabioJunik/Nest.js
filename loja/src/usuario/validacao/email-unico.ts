import { Injectable } from '@nestjs/common';
import { ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioRepository } from '../usuarioRepository';


@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnicoValidator implements ValidatorConstraintInterface {
    constructor(private usuarioRepository: UsuarioRepository) {}
    
    async validate (value: string) {
        const possivelUsuario = await this.usuarioRepository.encontraPeloEmail(value)
        return !possivelUsuario
    }
}

export function EmailUnico (opcoesDeValidacao: ValidationOptions) {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailUnicoValidator,        
        })
    }
}
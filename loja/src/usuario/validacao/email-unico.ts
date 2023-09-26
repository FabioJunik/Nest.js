import { Injectable } from '@nestjs/common';
import { ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioService } from '../usuario.service';


@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnicoValidator implements ValidatorConstraintInterface {
    constructor(private usuarioRepository: UsuarioService) {}
    
    async validate (value: string) {
        const possivelUsuario = await this.usuarioRepository.buscaPorEmail(value)
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
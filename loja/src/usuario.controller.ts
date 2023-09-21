import { Controller, Post } from "@nestjs/common";

@Controller('/usuarios')
export class UsuarioComtroller {
    
    @Post()
    async criarUsuario() {
        return 'Usuario criado !'
    }
}
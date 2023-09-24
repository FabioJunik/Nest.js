import { Injectable } from "@nestjs/common"
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto"

@Injectable()
export class UsuarioRepository {
    private usuarios = []

    async salvar(dadosUsuaio: CriaUsuarioDTO) {
        this.usuarios.push(dadosUsuaio)
        console.log(dadosUsuaio)
    }

    async listar() {
        return this.usuarios
    }

    async encontraPeloEmail(email: string) {
        const possivelUsuario = this.usuarios.find(_ =>_.email === email )
        return possivelUsuario   
    }
}
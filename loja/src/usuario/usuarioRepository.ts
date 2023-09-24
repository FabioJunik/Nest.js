import { Injectable } from "@nestjs/common"
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto"
import { UsuarioEntity } from "./usuario.entity"

@Injectable()
export class UsuarioRepository {
    private usuarios:UsuarioEntity[] = []

    async salvar(dadosUsuaio: CriaUsuarioDTO) {
        this.usuarios.push(dadosUsuaio)
    }

    async listar() {
        return this.usuarios
    }

    async encontraPeloEmail(email: string) {
        const possivelUsuario = this.usuarios.find(_ =>_.email === email )
        return possivelUsuario   
    }
}
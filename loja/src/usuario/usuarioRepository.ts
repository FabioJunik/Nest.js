import { Injectable } from "@nestjs/common"

@Injectable()
export class UsuarioRepository {
    private usuarios = []

    async salvar(dadosUsuaio) {
        this.usuarios.push(dadosUsuaio)
        console.log(dadosUsuaio)
    }

    async listar() {
        return this.usuarios
    }
}
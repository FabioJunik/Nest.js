import { Injectable } from "@nestjs/common"
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto"
import { UsuarioEntity } from "./usuario.entity"

@Injectable()
export class UsuarioRepository {
    private usuarios:UsuarioEntity[] = []

    async salvar(dadosUsuaio: UsuarioEntity) {
        this.usuarios.push(dadosUsuaio)
    }

    async listar() {
        return this.usuarios
    }

    async encontraPeloEmail(email: string) {
        const possivelUsuario = this.usuarios.find(_ =>_.email === email )
        return possivelUsuario   
    }

    private buscaPorId(id: string) {
        const possivelUsuario = this.usuarios.find(
          (usuarioSalvo) => usuarioSalvo.id === id,
        );
    
        if (!possivelUsuario) {
          throw new Error('Usuário não existe');
        }
    
        return possivelUsuario;
      }

    async atualizar(id: string, dadosUsuaio: Partial<UsuarioEntity>) {
        const usuario = this.buscaPorId(id);
        
        Object.entries(dadosUsuaio).forEach(([chave, valor]) => {
            if(chave === 'id') return
            usuario[chave] = valor
        })

        return usuario
    }

    async remove(id: string) {
        const usuario = this.buscaPorId(id);
        this.usuarios = this.usuarios.filter((_) => _.id !== id);
        return usuario;
    }
}
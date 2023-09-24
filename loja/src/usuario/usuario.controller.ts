import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioRepository } from "./usuarioRepository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { AtualizaUsuarioDTO } from "./dto/AtualizaUsuario.dto";
import { ListaUsuarioDTO } from "./dto/ListaUsuario.dto";

@Controller('/usuarios')
export class UsuarioController {
    constructor(private usuarioRepository: UsuarioRepository) {}

    @Post()
    async criarUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
        const usuarioEntity = new UsuarioEntity();
        
        usuarioEntity.nome = dadosUsuario.nome;
        usuarioEntity.email = dadosUsuario.email;
        usuarioEntity.senha = dadosUsuario.senha;

        this.usuarioRepository.salvar(usuarioEntity)
    }

    @Get()
    async listarUsuarios(){
        const usuariosSalvos = await this.usuarioRepository.listar();
        const usuariosLista = usuariosSalvos.map(
          (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome),
        );
    
        return usuariosLista;
        }

    @Put('/:id')
    async atualizarUsuario(@Param('id') id:string, @Body() dadosUsuaio: AtualizaUsuarioDTO){
        
        const usuarioAtualizado = await this.usuarioRepository.atualizar(id, dadosUsuaio)

        return {
            usuario: usuarioAtualizado,
            messagem: 'usuário atualizado com sucesso',
          };
    }

    @Delete(':id')
    async removeUsuario(@Param('id') id:string) {
        await this.usuarioRepository.remove(id)
    }
}
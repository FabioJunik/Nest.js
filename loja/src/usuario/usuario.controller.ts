import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuarioRepository";
import { CriaUsuarioDTO } from "./dto/CriaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";

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
        return this.usuarioRepository.listar()
    }
}
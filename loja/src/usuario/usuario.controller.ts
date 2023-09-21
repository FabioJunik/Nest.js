import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsuarioRepository } from "./usuarioRepository";

@Controller('/usuarios')
export class UsuarioController {
    constructor(private usuarioRepository: UsuarioRepository) {}

    @Post()
    async criarUsuario(@Body() dadosUsuario) {
        this.usuarioRepository.salvar(dadosUsuario)
    }

    @Get()
    async listarUsuarios(){
        return this.usuarioRepository.listar()
    }
}
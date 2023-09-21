import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuarioRepository";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository]
})

export class UsuarioModule {}
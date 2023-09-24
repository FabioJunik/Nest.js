import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioRepository } from "./usuarioRepository";
import { EmailUnicoValidator } from "./validacao/email-unico";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, EmailUnicoValidator],
})

export class UsuarioModule {}
import { Module } from '@nestjs/common';
import { UsuarioComtroller } from './usuario.controller';

@Module({
  imports: [],
  controllers: [UsuarioComtroller],
  providers: [],
})
export class AppModule {}

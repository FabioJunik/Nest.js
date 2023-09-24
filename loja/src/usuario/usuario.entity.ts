import {v4 as uuidV4} from 'uuid'

export class UsuarioEntity {
    readonly id?: string;
    nome: string;
    email: string;
    senha: string;

    constructor(){
        if(!this.id)
            this.id = uuidV4()
    }
  }
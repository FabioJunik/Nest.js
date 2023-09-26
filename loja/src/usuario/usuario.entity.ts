import { Column, CreateDateColumn, DeleteDateColumn, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import {v4 as uuidV4} from 'uuid'

export class UsuarioEntity {
    @PrimaryColumn('uuid')
    readonly id?: string;

    @Column({name: 'nome', length: 70, nullable: false})
    nome: string;

    @Column({name: 'email', length: 70, nullable: false})
    email: string;

    @Column({name: 'senha', length: 255, nullable: false})
    senha: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: string;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: string;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: string;

    constructor(){
        if(!this.id)
            this.id = uuidV4()
    }
  }
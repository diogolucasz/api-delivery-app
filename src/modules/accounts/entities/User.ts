
import { randomUUID } from "crypto";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
export class User {

    @PrimaryColumn()
    id?: string;

    @Column()
    public name!: string;

    @Column()
    public email!: string;

    @Column()
    public password!: string;

    @CreateDateColumn()
    public created_at?: Date;

    @CreateDateColumn()
    public updated_at?: Date;

    constructor() {
        if (!this.id) {
            this.id = randomUUID();
        }
    }
}
import { randomUUID } from "crypto";
import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";

@Entity("shippers")
export class Shipper {

    @PrimaryColumn()
    id?: string;

    @Column()
    public name!: string;

    @Column()
    public email!: string;

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
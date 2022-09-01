import { randomUUID } from "crypto";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("recipients")
export class Recipient {

    @PrimaryColumn()
    id?: string;

    @Column()
    public name!: string;

    @Column()
    public street!: string;

    @Column()
    public number!: number;

    @Column()
    public complement!: string

    @Column()
    public city!: string

    @Column()
    public district!: string

    @Column()
    public zip_code!: string

    constructor() {
        if (!this.id) {
            this.id = randomUUID();
        }
    }
}
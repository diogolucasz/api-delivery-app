import { Column, CreateDateColumn, PrimaryColumn } from "typeorm";

export class User {

    @PrimaryColumn()
    protected _id: string;

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

    constructor(props: Omit<User, '_id'>, id?: string) {
        //this._id = id ?? crypto.randomUUID()
        Object.assign(this, props)
        this._id = id ?? crypto.randomUUID()
    }
}
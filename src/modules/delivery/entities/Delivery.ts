import { Column, CreateDateColumn, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Recipient } from "./Recipient";
import { Shipper } from "./Shipper";

export class Delivery {

    @PrimaryColumn()
    id?: string;

    @ManyToOne(() => Recipient)
    @JoinColumn({ name: "recipient_id" })
    recipient!: Recipient

    @Column()
    recipient_id!: string;


    @ManyToOne(() => Shipper)
    @JoinColumn({ name: "shipper_id" })
    shipper!: Shipper

    @Column()
    shipper_id!: string

    
    @Column()
    signature_id!: string

    @Column()
    product!: string

    @CreateDateColumn()
    public canceled_at?: Date;

    @CreateDateColumn()
    public start_date?: Date;

    @CreateDateColumn()
    public end_date?: Date;

    @CreateDateColumn()
    public created_at?: Date;

    @CreateDateColumn()
    public updated_at?: Date;

}
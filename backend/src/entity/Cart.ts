import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Product } from "./Product"; 
import { Users } from "./Users";

@Entity({ name: "cart" })
export class Cart {

    @PrimaryGeneratedColumn()
    cartid: number;

    @Column({ nullable: true })
    quantity: number;

    @Column({ nullable: true })
    discount: number;

    @Column({ nullable: true })
    totalprice: number;

    @Column({ nullable: true })
    createat: Date;

    @ManyToOne(() => Users) 
    @JoinColumn({ name: "userid" }) 
    user: Users;
    product: Product;

}

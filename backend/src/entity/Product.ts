import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Category } from "./Category"; // Adjust the import path if necessary
import { Cart } from "./Cart";
import { Users } from "./Users";

@Entity({name : "product"})
export class Product {

    @PrimaryGeneratedColumn()
    pid: number;

    @Column({ nullable: true })
    pname: string;

    @Column({ nullable: true })
    pdetails: string;

    @Column({ nullable: true })
    cid: number;

    @Column({ nullable: true })
    price: number;

    @Column({ nullable: true })
    product_img: string;

    @Column({ nullable: true })
    createat: Date;


    @ManyToOne(() => Category)
    @JoinColumn({ name: "cid" })
    category: Category;
    cart: any;

}

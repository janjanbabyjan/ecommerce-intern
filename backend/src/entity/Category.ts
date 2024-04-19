import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name : "category"})
export class Category {

    @PrimaryGeneratedColumn()
    cid: number;

    @Column({ nullable: true })
    cname: string;

}

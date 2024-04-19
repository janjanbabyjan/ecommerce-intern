import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { UserAddress } from "./UserAddress"; 

@Entity({ name: "users" })
export class Users {

    @PrimaryGeneratedColumn()
    userid: number;

    @Column({ nullable: true })
    fname: string;

    @Column({ nullable: true })
    lname: string;

    @Column({ nullable: true })
    username: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    phone: string;

    @Column({ nullable: true, type: "bytea" })
    user_img: Buffer;

    @OneToOne(() => UserAddress, userAddress => userAddress.user, { cascade: true })
    @JoinColumn({ name: "address_id" })
    userAddress: UserAddress;


}

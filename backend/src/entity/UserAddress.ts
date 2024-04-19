import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Users } from "./Users";

@Entity({ name: "useraddress" }) // Set the name of the table
export class UserAddress {

    @PrimaryGeneratedColumn()
    address_id: number;

    @Column({ nullable: true })
    city: string;

    @Column({ nullable: true })
    country: string;

    @Column({ nullable: true })
    postal_code: number;
    
    @OneToOne(() => Users, user => user.userAddress)
    user: Users;

}

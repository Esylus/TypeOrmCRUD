import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

// extends BaseEntity so you can do User.findById in index.ts 

@Entity("Bob")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text", unique: true}) email: string;

    @Column({type: "boolean", default: false }) confirmed: boolean;

    @Column({ type: "varchar", length: "230"}) firstName: string;

    @Column("text") lastName: string;

    @Column("integer") age: number;

}

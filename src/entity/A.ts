import {
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { B } from "./B";

@Entity()
export class A {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(
        () => B,
        (b) => b.a,
        {
            cascade: true,
            eager: false,
        }
    )
    @JoinColumn()
    b: B;
}

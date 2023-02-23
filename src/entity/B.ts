import {
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { C } from "./C";
import { A } from "./A";

@Entity()
export class B {
    @PrimaryGeneratedColumn()
    id: number

    @OneToOne(
        () => C,
        (c) => c.b,
        {
            eager: true,
            cascade: true,
        }
    )
    @JoinColumn()
    c: C;

    @OneToOne(
        () => A,
        (a) => a.b,
        {
            eager: false,
        }
    )
    a: A;
}

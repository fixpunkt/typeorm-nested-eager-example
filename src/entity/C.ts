import {
    Entity,
    JoinColumn,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { B } from "./B";
import { D } from "./D";

@Entity()
export class C {
    @PrimaryGeneratedColumn()
    id: NumberConstructor

    @OneToOne(
        () => B,
        (b) => b.c,
    )
    b: B;

    @OneToOne(
        () => D,
        (d) => d.c,
        {
            eager: true,
            cascade: true,
        },
    )
    @JoinColumn()
    d: D;
}

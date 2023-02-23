import {
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { C } from "./C";

@Entity()
export class D {
    @PrimaryGeneratedColumn()
    id: NumberConstructor

    @OneToOne(
        () => C,
        (c) => c.d,
        {},
    )
    c: C;
}

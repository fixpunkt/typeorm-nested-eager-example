import { inspect } from "util";
import { AppDataSource } from "./data-source"
import { B } from "./entity/B";
import { C } from "./entity/C";
import { D } from "./entity/D";
import { A } from "./entity/A";

AppDataSource.initialize()
  .then(async () => {
    const a = new A();
    const b = new B();
    const c = new C();
    const d = new D();

    a.b = b;
    b.c = c;
    c.d = d;

    await AppDataSource.manager.save(a);
    console.log(inspect(a, false, 10, true));

    const aReloaded = await AppDataSource.manager.findOneOrFail(
      A,
      {
        where: { id: a.id },
        relations: [ 'b' ]
      },
    );
    console.log('C should be loaded in the following, otherwise this is a bug:')
    console.log(inspect(aReloaded, false, 10));

    // const aReloaded = await AppDataSource.manager.findOneOrFail(
    //   A,
    //   {
    //     where: { id: a.id },
    //     // relations: [ 'a' ]
    //   },
    // );
    // console.log(inspect(aReloaded, false, 10));

  })
  .catch((error) => console.log("Error: ", error))

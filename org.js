import { impulse } from "./impulse.js";
import { schub } from "./schub.js";
import { feuer } from "./feuer.js";
import { VOLTAGE } from "./VOLTAGE.js";
import { RUM } from "./RUM.js";
import { RUMumRUM } from "./RUMumRUM.js";
import { nc } from "./nc.js";
import { role } from "./role.js";

export function org(v) {
    return {
        impulse: impulse(v),
        schub: schub(v),
        feuer: feuer(v),
        voltage: VOLTAGE(v),
        rum: RUM(v),
        rumumrum: RUMumRUM(v),
        neutral: nc(v),
        role: role(v)
    };
}

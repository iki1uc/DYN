import { GEOP } from "./GEO.physik.js";
import { GEOG } from "./GEO.geo.js";

export function org(v) {
    return {
        impulse: impulse(v),
        schub: schub(v),
        feuer: feuer(v),
        voltage: VOLTAGE(v),
        rum: RUM(v),
        rumumrum: RUMumRUM(v),
        neutral: nc(v),
        role: role(v),

        geo_physik: GEOP.cube(v),   // NEU (Mini‑Fix 1)
        geo_geo: GEOG.all(v)        // NEU (Mini‑Fix 2)
    };
}

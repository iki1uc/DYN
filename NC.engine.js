// NC.engine.js – Neutral Controller für depth, GEO und roll

import { GEO } from "./geo.js";
import { ROLL } from "./roll.js";
import { d3d } from "./d3d.js";
import { d9d } from "./d9d.js";
import { d81d } from "./d81d.js";
import { wurzelMatic } from "./wurzel-matic.js";

export const NC = {

    // 1) GEO-Element auf eine Würfelseite anwenden
    geoOn(side, value) {
        return {
            nc: "geoOn",
            side,
            element: GEO.fire(value)   // FIRE als Standard-Impuls
        };
    },

    // 2) Würfel komplett mit GEO belegen
    geoCube(value) {
        return {
            nc: "geoCube",
            cube: {
                unter: GEO.fire(value),
                ueber: GEO.water(value),
                tief: GEO.ice(value),
                yx: GEO.overwater(value),
                xy: GEO.fireDone(value),
                qt: GEO.water(value),
                tq: GEO.ice(value)
            }
        };
    },

    // 3) depth-Bewegung (3D / 9D / 81D)
    move(dim, axis, value) {
        if (dim === 3)  return d3d(axis, value);
        if (dim === 9)  return d9d(axis, value);
        if (dim === 81) return d81d(axis, value);

        return { error: "unknown dimension" };
    },

    // 4) Hardware-Wurzel (SSE + MMX)
    root(op, a, b) {
        return wurzelMatic(op, a, b);
    },

    // 5) Voller NC‑Durchlauf (Pipeline)
    run(value) {
        return {
            nc: "run",
            geo: this.geoCube(value),
            move3: this.move(3, "x", value),
            move9: this.move(9, "xy", value),
            move81: this.move(81, "xyz", value),
            root: this.root("add", value, value)
        };
    }
};

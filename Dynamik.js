// Dynamik.js
export const Dynamik = {

    value: 0,

    update(v) {
        this.value = v;

        return {
            impulse: v * 1.0,
            schub: v * 1.2,
            feuer: v * 1.4,
            voltage: v * 1.6
        };
    }
};

import { org } from "./org.js";
import { reORG } from "./reORG.js";

export function Dynamik(v) {
    return reORG(org(v));
}

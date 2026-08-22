// attikulate.js – Ausdruck, Verdichtung, Artikulation

import { oma } from "./oma.js";
import { onkel } from "./onkel.js";
import { ME } from "./me.js";
import { OUR } from "./our.js";
import { U } from "./u.js";

export const attikulate = {

    // OMA → Ausdruck
    oma(level, v) {
        const dim = oma[level](v);
        return {
            speak: "OMA",
            form: level,
            ...dim
        };
    },

    // ONKEL → Ausdruck
    onkel(action, v) {
        const ord = onkel[action](v);
        return {
            speak: "ONKEL",
            form: action,
            ...ord
        };
    },

    // ME → Ausdruck
    me(state, v) {
        const me = ME(state, v);
        return {
            speak: "ME",
            form: state,
            ...me
        };
    },

    // OUR → Ausdruck
    our(state, v) {
        const our = OUR(state, v);
        return {
            speak: "OUR",
            form: state,
            ...our
        };
    },

    // U → Ausdruck
    u(type, v) {
        const uni = U(type, v);
        return {
            speak: "U",
            form: type,
            ...uni
        };
    }
};

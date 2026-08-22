// als.js – verbindet onkel + oma, aber trennt ihre Interessen

import { onkel } from "./onkel.js";
import { oma } from "./oma.js";

export const als = {

    // Oma: Dimensionen
    oma(level, v) {
        return oma[level](v);
    },

    // Onkel: Ordnung
    onkel(action, v) {
        return onkel[action](v);
    },

    // Beide: Oma → Onkel.watch
    sehen(level, v) {
        const dim = oma[level](v);
        return onkel.watch(dim);
    },

    // Beide: Oma → Onkel.protect
    schuetzen(level, v) {
        const dim = oma[level](v);
        return onkel.protect(dim);
    },

    // Beide: Oma → Onkel.order
    ordnen(level, v) {
        const dim = oma[level](v);
        return onkel.order(dim);
    }
};

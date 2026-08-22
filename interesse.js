// interesse.js – verbindet onkel + oma

import { onkel } from "./onkel.js";
import { oma } from "./oma.js";

export const interesse = {

    // Oma gibt die Dimension
    dim(v, level = "room") {
        return oma[level](v);
    },

    // Onkel gibt die Ordnung
    ord(v) {
        return onkel.order(v);
    },

    // Gemeinsame Sicht: Oma → Onkel
    view(v, level = "room") {
        const dimension = oma[level](v);
        return onkel.watch(dimension);
    },

    // Gemeinsamer Schutz: Oma → Onkel
    protect(v, level = "room") {
        const dimension = oma[level](v);
        return onkel.protect(dimension);
    }
};

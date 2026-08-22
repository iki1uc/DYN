// js.dimension.js – verbindet ME, OUR, U

import { ME } from "./me.js";
import { OUR } from "./our.js";
import { U } from "./u.js";

export const dimension = {

    me(state, v) {
        return ME(state, v);
    },

    our(state, v) {
        return OUR(state, v);
    },

    u(type, v) {
        return U(type, v);
    }
};

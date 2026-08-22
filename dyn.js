// dyn.js
export const dyn = {

    amplify(v, factor = 1) {
        return v * factor;
    },

    reduce(v, factor = 1) {
        return v / factor;
    }
};

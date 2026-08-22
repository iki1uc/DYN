// dyn.js – 3D + amplify/reduce (depth‑konform)

export const dyn = {

    amplify(v, factor = 1) {
        return {
            x: v * factor,
            y: v * factor,
            z: v * factor
        };
    },

    reduce(v, factor = 1) {
        return {
            x: v / factor,
            y: v / factor,
            z: v / factor
        };
    },

    base(v) {
        return {
            x: v,
            y: v,
            z: v
        };
    }
};

// dyn.js – depth 3D/6D Version

export const dyn = {

    // Original-Funktion: Verstärken
    amplify(v, factor = 1) {
        return {
            x: v * factor,
            y: v * factor,
            z: v * factor
        };
    },

    // Original-Funktion: Reduzieren
    reduce(v, factor = 1) {
        return {
            x: v / factor,
            y: v / factor,
            z: v / factor
        };
    },

    // 3D-Basiswert
    base(v) {
        return {
            x: v,
            y: v,
            z: v
        };
    },

    // 6D-Erweiterung (depth)
    six(v) {
        return {
            x: v,
            y: v,
            z: v,
            xy: v,
            yz: v,
            zx: v
        };
    }
};

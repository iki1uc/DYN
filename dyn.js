// dyn.js – depth 3D/6D Version ohne Ballast

export const dyn = {

    // Original-Funktion: Verstärken (bleibt erhalten)
    amplify(v, factor = 1) {
        const r = v * factor;
        return {
            x: r,
            y: r,
            z: r,
            xy: r,
            yz: r,
            zx: r
        };
    },

    // Original-Funktion: Reduzieren (bleibt erhalten)
    reduce(v, factor = 1) {
        const r = v / factor;
        return {
            x: r,
            y: r,
            z: r,
            xy: r,
            yz: r,
            zx: r
        };
    },

    // 3D-Basiswert (keine neue Logik)
    base(v) {
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

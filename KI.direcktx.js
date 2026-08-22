// KI.direcktx.js – A/B/D Achsen für D3D, OpenGL, Direcktx

export const KI_direcktx = {

    // A – D3D Achse
    A(axis, v) {
        return {
            axiom: "A",
            mode: "D3D",
            axis,
            value: v
        };
    },

    // B – OpenGL Achse
    B(axis, v) {
        return {
            axiom: "B",
            mode: "OpenGL",
            axis,
            value: v
        };
    },

    // D – Direcktx Achse
    D(axis, v) {
        return {
            axiom: "D",
            mode: "Direcktx",
            axis,
            value: v
        };
    }
};

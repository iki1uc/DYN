// als.js – OMA, ONKEL, ME, OUR, U in einem Modul

export const als = {

    // OMA – Tiefe, Dimension, Klarheit
    oma(level, v) {
        return {
            axis: "OMA",
            level,
            value: v
        };
    },

    // ONKEL – Ordnung, Schutz, Aufsicht
    onkel(action, v) {
        return {
            axis: "ONKEL",
            action,
            value: v
        };
    },

    // ME – Ich, Kern, Fokus
    me(state, v) {
        return {
            axis: "ME",
            state,
            value: v
        };
    },

    // OUR – Wir, Verbindung, Gemeinschaft
    our(state, v) {
        return {
            axis: "OUR",
            state,
            value: v
        };
    },

    // U – Universale Instanz, Rahmen, Alles
    u(type, v) {
        return {
            axis: "U",
            type,
            value: v
        };
    }
};

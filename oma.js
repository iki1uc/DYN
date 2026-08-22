// oma.js – depth Dimensionen, Qualität, Klarheit

export const oma = {

    // 1D – Room – Basis
    room(v) {
        return {
            dim: 1,
            name: "Room",
            info: "Basis",
            value: v
        };
    },

    // 2D – Suite – Erweiterung
    suite(v) {
        return {
            dim: 2,
            name: "Suite",
            info: "Erweiterung",
            value: v
        };
    },

    // 3D – Römer – Struktur
    roemer(v) {
        return {
            dim: 3,
            name: "Römer",
            info: "Struktur",
            value: v
        };
    },

    // 6D – Realität – Druck
    realitaet(v) {
        return {
            dim: 6,
            name: "Realität",
            info: "Druck",
            pressure: true,
            value: v
        };
    },

    // 9D – Willkommen – Klarheit
    willkommen(v) {
        return {
            dim: 9,
            name: "Willkommen",
            info: "Klarheit",
            clarity: true,
            value: v
        };
    },

    // Qualität 1 – Penny – A/B/C
    penny(v) {
        return {
            qual: 1,
            name: "Penny",
            info: "Basisqualität",
            value: v
        };
    },

    // Qualität 2 – Netto – Römer
    netto(v) {
        return {
            qual: 2,
            name: "Netto",
            info: "Römerqualität",
            value: v
        };
    },

    // Qualität 3 – Druck – Realität
    druck(v) {
        return {
            qual: 3,
            name: "Druck",
            info: "Realitätsdruck",
            pressure: true,
            value: v
        };
    },

    // Qualität 4 – Klarheit – Willkommen
    klarheit(v) {
        return {
            qual: 4,
            name: "Klarheit",
            info: "Willkommensklarheit",
            clarity: true,
            value: v
        };
    }
};

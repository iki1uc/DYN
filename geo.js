// geo.js – FIRE, WATER, ICE als depth-Achsen

export const GEO = {

    // FIRE – aktive Idee
    fire(v) {
        return {
            axis: "FIRE",
            state: "active",
            value: v
        };
    },

    // WATER – flüssige Idee
    water(v) {
        return {
            axis: "WATER",
            state: "fluid",
            value: v
        };
    },

    // ICE – gefrorene Idee
    ice(v) {
        return {
            axis: "ICE",
            state: "solid",
            value: v
        };
    },

    // OVERWATER – überflüssige Idee (Überschuss)
    overwater(v) {
        return {
            axis: "OVERWATER",
            state: "excess",
            value: v
        };
    },

    // FIRE (vollendet) – fertige Idee
    fireDone(v) {
        return {
            axis: "FIRE",
            state: "complete",
            value: v
        };
    },

    // GEO – Erde, die alles trägt
    all(fire, water, ice, overwater) {
        return {
            geo: "GEO",
            fire: this.fire(fire),
            water: this.water(water),
            ice: this.ice(ice),
            overwater: this.overwater(overwater)
        };
    }
};

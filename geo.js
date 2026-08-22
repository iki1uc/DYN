// geo.js – FIRE, WATER, ICE, OVERWATER, FIRE.DONE

export const GEO = {

    fire(v)      { return { axis: "FIRE", state: "active",   value: v }; },
    water(v)     { return { axis: "WATER", state: "fluid",    value: v }; },
    ice(v)       { return { axis: "ICE",  state: "solid",     value: v }; },
    overwater(v) { return { axis: "OVERWATER", state: "excess", value: v }; },
    fireDone(v)  { return { axis: "FIRE", state: "complete",  value: v }; },

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

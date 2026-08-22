// VOLTAGE.js
export const VOLTAGE = {

    level: 0,

    charge(v) {
        this.level = v * 1.75;
        return this.level;
    }
};


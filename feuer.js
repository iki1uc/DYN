// feuer.js
export const feuer = {

    value: 0,

    ignite(v) {
        this.value = v * 1.5;
        return this.value;
    }
};


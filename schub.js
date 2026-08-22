// schub.js
export const schub = {

    value: 0,

    boost(v) {
        this.value = v * 1.25;
        return this.value;
    }
};


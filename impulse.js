// impulse.js
export const impulse = {

    value: 0,

    push(v) {
        this.value = v;
        return this.value;
    }
};


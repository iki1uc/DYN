// role.js
export const role = {

    current: "neutral",

    set(v) {
        this.current = v > 0 ? "active" : "passive";
        return this.current;
    }
};


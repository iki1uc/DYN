// onkel.js – depth Aufsicht, Schutz, Ordnung

export const onkel = {

    // Der Onkel greift nicht ein – er beobachtet.
    watch(v) {
        return {
            status: "gesehen",
            value: v
        };
    },

    // Der Onkel schützt – ohne zu verändern.
    protect(v) {
        return {
            status: "geschützt",
            value: v
        };
    },

    // Der Onkel ordnet – ohne zu rechnen.
    order(obj) {
        return {
            status: "geordnet",
            clean: true,
            ...obj
        };
    }
};

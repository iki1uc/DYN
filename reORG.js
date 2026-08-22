export function reORG(obj) {
    return {
        clean: true,
        impulse: obj.impulse,
        schub: obj.schub,
        feuer: obj.feuer,
        voltage: obj.voltage,
        rum: obj.rum,
        rumumrum: obj.rumumrum,
        neutral: obj.neutral,
        role: obj.role,

        geo_physik: obj.geo_physik,   // NEU (Mini‑Fix 1)
        geo_geo: obj.geo_geo          // NEU (Mini‑Fix 2)
    };
}

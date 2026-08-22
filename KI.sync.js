// KI.sync.js – Synchronisation, Ausgleich, Harmonie

export function KI_sync(state, v) {
    return {
        axis: "SYNC",
        state,
        value: v
    };
}

export function wurzelMatic(op, a, b) {
    return {
        root: "SSE+MMX",
        op,
        result: op === "add" ? a + b :
                op === "mul" ? a * b :
                op === "shift" ? (a << b) :
                op === "move" ? b :
                null
    };
}

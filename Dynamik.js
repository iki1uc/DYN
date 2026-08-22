import { org } from "./org.js";
import { reORG } from "./reORG.js";

export function Dynamik(v) {
    return reORG(org(v));
}

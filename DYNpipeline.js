// DYNpipeline.js
export function DYNpipeline() {

    return `
        ┌──────────────┐
        │  Dynamik(v)  │
        └──────┬───────┘
               │
               ▼
        ┌──────────────┐
        │     ORG       │
        │ sammelt alles │
        └──────┬────────┘
               │
               ▼
        ┌──────────────┐
        │    REORG      │
        │ defragmentiert│
        └──────┬────────┘
               │
               ▼
        ┌──────────────┐
        │  Output clean │
        └──────────────┘
    `;
}

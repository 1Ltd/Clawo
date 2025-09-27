import { json } from "@sveltejs/kit";
import { version } from "@imput/version-info";
// packages/version-info/index.js
export async function GET() {
    return json({
        version,          // imported
        branch: 'main',   // optional hardcoded info
        commit: 'unknown',
        remote: 'origin'
    });
}

export const prerender = false;

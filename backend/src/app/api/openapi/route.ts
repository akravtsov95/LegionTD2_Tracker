import { readFile } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
    const p = join(process.cwd(), "..", "contracts", "openapi.yaml");
    const text = await readFile(p, "utf8");

    return new Response(text, {
        status: 200,
        headers: { "Content-Type": "application/yaml; charset=utf-8" }
    })
}
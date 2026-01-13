import { env } from "@/server/env"

export async function GET() {
    return Response.json(
        { status: "OK", hasToken: !!env.LEGION_TD_KEY },
        { status: 200}
    )
}
import { z } from "zod";

const EnvSchema = z.object({
    LEGION_TD_KEY: z.string(),
})

export const env = EnvSchema.parse({
    LEGION_TD_KEY: process.env.LEGION_TD_KEY,
})
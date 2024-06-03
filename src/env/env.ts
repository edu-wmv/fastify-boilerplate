import { z } from "zod";

const envSchema = z.object({
	PORT: z.number().default(3000),
	NODE_ENV: z
		.union([
			z.literal("development"),
			z.literal("production"),
			z.literal("test"),
		])
		.default("development"),
});

const env = envSchema.parse(process.env);

export type Env = z.infer<typeof envSchema>;
export default env;

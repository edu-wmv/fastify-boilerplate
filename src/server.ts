import env from "@env/env";
import app from "@/app";

app.get("/", async (request, reply) => {
	return { hello: "world" };
});

app
	.listen({
		host: "0.0.0.0",
		port: env.PORT,
	})
	.then(() => {
		console.log(`[ ⚡️] Server is running on http://localhost:${env.PORT}`);
	});

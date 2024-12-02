import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { AppDataSource } from "./utils/data-source";
import { CountryResolver } from "./resolvers/CountryResolvers";

const PORT: number = Number(process.env.BACKEND_PORT) || 3310;

async function startServerApollo() {
	try {
		await AppDataSource.initialize();
		// biome-ignore lint/suspicious/noConsoleLog: <explanation>
		console.log("📦 Base de données connectée");

		const schema = await buildSchema({
			resolvers: [CountryResolver],
		});

		const server = new ApolloServer({
			schema,
		});

		const { url } = await startStandaloneServer(server, {
			listen: { port: PORT },
		});

		// biome-ignore lint/suspicious/noConsoleLog: <explanation>
		console.log(`🚀 Serveur prêt à l'adresse : ${url}`);
	} catch (error) {
		console.error("❌ Erreur lors du démarrage du serveur :", error);
		process.exit(1);
	}
}

startServerApollo();

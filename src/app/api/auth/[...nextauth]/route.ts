// import { prisma } from "@/lib/prisma";
// import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
// import Email from "next-auth/providers/email";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const getEnv = (name: string): string => {
	const value = process.env[name];

	if (!value) throw new Error(`Missing environment variable: ${name}`);

	return value;
};

export const authOptions = {
	providers: [
		Github({
			clientId: getEnv("GITHUB_CLIENT_ID"),
			clientSecret: getEnv("GITHUB_CLIENT_SECRET"),
		}),
		Google({
			clientId: getEnv("GOOGLE_CLIENT_ID"),
			clientSecret: getEnv("GOOGLE_CLIENT_SECRET"),
		}),
		// Email({
		// 	server: getEnv("EMAIL_SERVER"),
		// 	from: getEnv("EMAIL_FROM"),
		// }),
	],
	// adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

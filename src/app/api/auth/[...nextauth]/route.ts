import NextAuth, { NextAuthOptions } from "next-auth";
import Email from "next-auth/providers/email";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from "@/lib/prisma";
import { createTransport } from "nodemailer";
import CustomMail from "@/constants/CustomMail";

const getEnv = (name: string): string => {
	const value = process.env[name];

	if (!value) throw new Error(`Missing environment variable: ${name}`);

	return value;
};

export const authOptions: NextAuthOptions = {
	pages:{
		signIn: "/login",
		error: "/login",
		verifyRequest: "/login/verification"
	},
	adapter: PrismaAdapter(prisma),
	session:{
		strategy: "jwt",
		maxAge: 30*24*60*60,
	},
	providers: [
		Github({
			clientId: getEnv("GITHUB_CLIENT_ID"),
			clientSecret: getEnv("GITHUB_CLIENT_SECRET"),
		}),
		Google({
			clientId: getEnv("GOOGLE_CLIENT_ID"),
			clientSecret: getEnv("GOOGLE_CLIENT_SECRET"),
		}),
		Email({
			server:{
				host: getEnv("EMAIL_SERVER_HOST"),
				port: Number(getEnv("EMAIL_SERVER_PORT")),
				auth:{
					user: getEnv("EMAIL_SERVER_USER"),
					pass: getEnv("EMAIL_SERVER_PASS"),
				}	
			},
			from: process.env.EMAIL_FROM,
			async sendVerificationRequest({
				identifier: email,
				url,
				provider: {server, from}
			}){
				const transport = createTransport(server)
				const result = await transport.sendMail({
					to: email,
					from,
					subject: `Sign in to MockView`,
					html: CustomMail(url)
				})
				const failed = result.rejected.concat(result.pending).filter(Boolean)
				if(failed.length){
					throw new Error(`Email (${failed.join(", ")}) could not be sent`)
				}
			}
		})
	],
	// adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

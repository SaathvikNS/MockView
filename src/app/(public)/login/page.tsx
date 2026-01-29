"use client";

import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const LoginPage = () => {
	const { data: session } = useSession();

	if (session) {
		redirect("/dashboard");
	}

	return (
		<div>
			<h2>Login</h2>
			<button
				onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
			>
				Continue with Google
			</button>
			<button
				onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
			>
				Continue with Github
			</button>
			{/* <button
				onClick={() => signIn("email", { callbackUrl: "/dashboard" })}
			>
				Continue with Email
			</button> */}
		</div>
	);
};

export default LoginPage;

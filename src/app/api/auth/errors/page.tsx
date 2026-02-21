import { useSearchParams } from "next/navigation";
import React from "react";

const Errors = () => {
	const searchParams = useSearchParams();
	const error = searchParams.get("error");
	const loginErrors = [
		"CredentialsSignin", // Invalid credentials
		"AccessDenied", // signIn callback returned false
		"OAuthSignin", // Failed to start OAuth
		"OAuthCallback", // OAuth callback failed
		"Verification", // Expired/invalid magic link
	];
	const signupErrors = [
		"OAuthAccountNotLinked", // Email exists with different provider
		"OAuthCreateAccount", // Failed creating user
		"OAuthLinkAccount", // Failed linking provider
		"EmailSignin", // Failed sending magic link
		"Configuration", // Provider misconfigured
	];

	return (
		<div className="h-dvh w-dvw flex justify-center items-center">
			Error occured: {error}
		</div>
	);
};

export default Errors;

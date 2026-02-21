"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { PrivacyPolicy, TermsOfService } from "@/constants/SignUpRequirements";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type RulesType = {
	title: string;
	content: string;
};

const mapAuthError = (error: string): string => {
	switch (error) {
		case "OAuthAccountNotLinked":
			return "This email is already linked to another provider. Please use the original provider to login.";
		case "EmailSignin":
			return "Could not send email. Please try again.";
		case "Verification":
			return "Magic link expired. Request a new one.";
		case "AccessDenied":
			return "Access denied.";
		case "CredentialsSignin":
			return "Invalid credentials.";
		default:
			return "Authentication failed. Please try again.";
	}
};

const LogInPage = () => {
	const { data: session } = useSession();
	const [email, setEmail] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [checked, setChecked] = useState(false);
	const [selected, setSelected] = useState<RulesType | null>(null);
	const [loading, setLoading] = useState(false);
	const searchParams = useSearchParams();
	const urlError = searchParams.get("error");

	const authError = urlError ? mapAuthError(urlError) : "";

	if (session) {
		redirect("/dashboard");
	}

	const validateEmail = (value: string) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(value);
	};

	const handleSubmit = async () => {
		setLoading(!loading);
		const trimmed = email.trim();

		if (!trimmed) {
			setError("Please enter email");
			setLoading(!loading);
			return;
		}

		if (!validateEmail(trimmed)) {
			setError("Enter a valid email");
			setLoading(!loading);

			return;
		}

		setError("");
		setLoading(!loading);
		await signIn("email", { email: trimmed, callbackUrl: "/dashboard" });
	};

	return (
		<div className="min-h-screen bg-background flex items-center justify-center px-4">
			{authError && (
				<Alert
					variant={"destructive"}
					className="absolute w-full max-w-md top-10"
				>
					<AlertCircle />
					<AlertTitle
						className="font-extrabold
					"
					>
						{urlError}
					</AlertTitle>
					<AlertDescription>{authError}</AlertDescription>
				</Alert>
			)}
			<Dialog>
				<div className="w-full max-w-md">
					<div className="text-center mb-8">
						<Link
							href="/"
							className="text-2xl font-bold text-foreground"
						>
							Mock <span className="text-primary">View</span>
						</Link>
						<h1 className="text-2xl font-bold mt-6 text-foreground">
							Login / Create your account
						</h1>
						<p className="text-muted-foreground mt-1">
							Start practicing in 2 minutes
						</p>
					</div>

					<div className="bg-card rounded-xl border border-border p-8 shadow-sm">
						<form
							className="space-y-4"
							onSubmit={(e) => e.preventDefault()}
						>
							<div className="space-y-2">
								<Label htmlFor="email" className="mb-3">
									Email
								</Label>
								<div className="text-destructive text-sm mb-0 px-2">
									{error && error}
								</div>
								<div className="relative">
									<Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
									<Input
										id="email"
										type="email"
										placeholder="you@example.com"
										className="pl-10"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
							</div>

							<div className="flex items-start gap-2">
								<Checkbox
									id="terms"
									className="mt-0.5 cursor-pointer"
									defaultChecked={checked}
									onCheckedChange={() => setChecked(!checked)}
								/>
								<Label
									htmlFor="terms"
									className="text-xs md:text-sm font-normal leading-snug"
								>
									I agree to the{" "}
									<span>
										<DialogTrigger
											onClick={() =>
												setSelected(TermsOfService)
											}
											className="text-primary hover:underline hover:cursor-pointer"
										>
											Terms of Service
										</DialogTrigger>
									</span>
									and{" "}
									<span>
										<DialogTrigger
											onClick={() =>
												setSelected(PrivacyPolicy)
											}
											className="text-primary hover:underline hover:cursor-pointer"
										>
											Privacy Policy
										</DialogTrigger>
									</span>
								</Label>
							</div>

							<Tooltip>
								<TooltipTrigger className="w-full h-full">
									<div>
										<Button
											type="submit"
											className="w-full cursor-pointer"
											size="lg"
											disabled={!checked || loading}
											onClick={() => handleSubmit()}
										>
											Continue with Email
										</Button>
									</div>
								</TooltipTrigger>
								{!checked && (
									<TooltipContent side="bottom">
										Please agree to the terms of service and
										privacy policy before continuing
									</TooltipContent>
								)}
							</Tooltip>
						</form>

						<div className="relative my-6">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-border" />
							</div>
							<div className="relative flex justify-center text-xs">
								<span className="bg-card px-3 text-muted-foreground">
									or
								</span>
							</div>
						</div>

						<Button
							variant="outline"
							className="w-full my-3"
							size="lg"
							onClick={() =>
								signIn("google", { callbackUrl: "/dashboard" })
							}
						>
							<FcGoogle />
							Continue with Google
						</Button>
						<Button
							variant="outline"
							className="w-full my-3"
							size="lg"
							onClick={() =>
								signIn("github", { callbackUrl: "/dashboard" })
							}
						>
							<FaGithub />
							Continue with Github
						</Button>
					</div>
				</div>
				<DialogContent showCloseButton={false}>
					<DialogHeader>
						<DialogTitle className="text-lg md:text-xl font-bold text-primary text-center">
							{selected?.title}
						</DialogTitle>
					</DialogHeader>
					<div
						className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4 border-t-2 pt-5"
						dangerouslySetInnerHTML={{
							__html: selected?.content || "",
						}}
					/>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default LogInPage;

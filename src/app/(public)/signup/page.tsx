"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import React, { useState } from "react";

const SignUpPage = () => {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="min-h-screen bg-background flex items-center justify-center px-4">
			<div className="w-full max-w-md">
				<div className="text-center mb-8">
					<Link
						href="/"
						className="text-2xl font-bold text-foreground"
					>
						Mock <span className="text-primary">View</span>
					</Link>
					<h1 className="text-2xl font-bold mt-6 text-foreground">
						Create your account
					</h1>
					<p className="text-muted-foreground mt-1">
						Start practicing in 2 minutes—no credit card required
					</p>
				</div>

				<div className="bg-card rounded-xl border border-border p-8 shadow-sm">
					<form
						className="space-y-4"
						onSubmit={(e) => e.preventDefault()}
					>
						<div className="space-y-2">
							<Label htmlFor="name">Full Name</Label>
							<div className="relative">
								<User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<Input
									id="name"
									placeholder="John Doe"
									className="pl-10"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<Label htmlFor="email">Email</Label>
							<div className="relative">
								<Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<Input
									id="email"
									type="email"
									placeholder="you@example.com"
									className="pl-10"
								/>
							</div>
						</div>

						<div className="space-y-2">
							<Label htmlFor="password">Password</Label>
							<div className="relative">
								<Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
								<Input
									id="password"
									type={showPassword ? "text" : "password"}
									placeholder="Create a strong password"
									className="pl-10 pr-10"
								/>
								<button
									type="button"
									className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
									onClick={() =>
										setShowPassword(!showPassword)
									}
								>
									{showPassword ? (
										<EyeOff className="h-4 w-4" />
									) : (
										<Eye className="h-4 w-4" />
									)}
								</button>
							</div>
							<p className="text-xs text-muted-foreground">
								• At least 8 characters
							</p>
						</div>

						<div className="flex items-start gap-2">
							<Checkbox id="terms" className="mt-0.5" />
							<Label
								htmlFor="terms"
								className="text-sm font-normal leading-snug"
							>
								I agree to the{" "}
								<a
									href="#"
									className="text-primary hover:underline"
								>
									Terms of Service
								</a>{" "}
								and{" "}
								<a
									href="#"
									className="text-primary hover:underline"
								>
									Privacy Policy
								</a>
							</Label>
						</div>

						<Button type="submit" className="w-full" size="lg">
							Create Account
						</Button>
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

					<Button variant="outline" className="w-full" size="lg">
						<FcGoogle />
						Continue with Google
					</Button>
				</div>

				<p className="text-center text-sm text-muted-foreground mt-6">
					Already have an account?{" "}
					<Link
						href="/login"
						className="text-primary hover:underline font-medium"
					>
						Sign in
					</Link>
				</p>
			</div>
		</div>
	);
};

export default SignUpPage;

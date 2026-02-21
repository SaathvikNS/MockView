"use client";

import Link from "next/link";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
import { PrivacyPolicy, TermsOfService } from "@/constants/SignUpRequirements";
import { DialogTitle } from "@radix-ui/react-dialog";

type RulesType = {
	title: string;
	content: string;
};

const Footer = () => {
	const [selected, setSelected] = useState<RulesType | null>(null);

	return (
		<footer className="border-t border-border py-12 px-4">
			<Dialog>
				<div className="container mx-auto">
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
						<div>
							<Link
								href="/"
								className="text-lg font-bold text-foreground"
							>
								Mock <span className="text-primary">View</span>
							</Link>
							<p className="text-sm text-muted-foreground mt-2">
								AI-powered interview practice
							</p>
						</div>
						<div>
							<h4 className="font-semibold text-foreground mb-3 text-sm">
								Product
							</h4>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li>
									<a
										href="#features"
										className="hover:text-foreground transition-colors"
									>
										Features
									</a>
								</li>
								{/* TODO: Pricing in footer to be implemented */}
								<li>
									<a
										href="#"
										className="hover:text-foreground transition-colors"
									>
										Pricing
									</a>
								</li>
								{/* TODO: deom from footer to be implemented */}
								<li>
									<a
										href="#"
										className="hover:text-foreground transition-colors"
									>
										Demo
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold text-foreground mb-3 text-sm">
								Legal
							</h4>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li>
									<a className="hover:text-foreground transition-colors">
										<DialogTrigger
											onClick={() =>
												setSelected(PrivacyPolicy)
											}
											className="cursor-pointer"
										>
											Privacy
										</DialogTrigger>
									</a>
								</li>
								<li>
									<a className="hover:text-foreground transition-colors">
										<DialogTrigger
											onClick={() =>
												setSelected(TermsOfService)
											}
											className="cursor-pointer"
										>
											Terms
										</DialogTrigger>
									</a>
								</li>
								{/* TODO: contact from footer yet to be implemented */}
								<li>
									<a
										href="#"
										className="hover:text-foreground transition-colors"
									>
										Contact
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold text-foreground mb-3 text-sm">
								Social
							</h4>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li>
									<a
										href="https://github.com/SaathvikNS/MockView"
										target="blank"
										className="hover:text-foreground transition-colors"
									>
										GitHub
									</a>
								</li>
								<li>
									<a
										href=""
										className="hover:text-foreground transition-colors"
									>
										Twitter
									</a>
								</li>
								<li>
									<a
										href=""
										className="hover:text-foreground transition-colors"
									>
										LinkedIn
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground tracking-wider">
						© 2026 MockView • By SNS
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
		</footer>
	);
};

export default Footer;

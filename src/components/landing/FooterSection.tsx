import Link from "next/link";

const Footer = () => (
	<footer className="border-t border-border py-12 px-4">
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
						<li>
							<a
								href="#"
								className="hover:text-foreground transition-colors"
							>
								Pricing
							</a>
						</li>
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
							<a
								href="#"
								className="hover:text-foreground transition-colors"
							>
								Privacy
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-foreground transition-colors"
							>
								Terms
							</a>
						</li>
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
								href="#"
								className="hover:text-foreground transition-colors"
							>
								GitHub
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-foreground transition-colors"
							>
								Twitter
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:text-foreground transition-colors"
							>
								LinkedIn
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
				© 2026 MockView • Built by SNS
			</div>
		</div>
	</footer>
);

export default Footer;

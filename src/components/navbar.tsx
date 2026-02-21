"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ui/ThemeToggle";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
			<div className="container mx-auto px-4 h-16 flex items-center justify-between">
				<Link href="/" className="text-xl font-bold text-foreground">
					Mock <span className="text-primary">View</span>
				</Link>

				<div className="hidden md:flex items-center gap-8">
					<a
						href="#features"
						className="text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						Features
					</a>
					<a
						href="#how-it-works"
						className="text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						How It Works
					</a>
					<a
						href="#demo"
						className="text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						Demo
					</a>
				</div>

				<div className="hidden md:flex items-center gap-3">
					<ThemeToggle />
					<Button asChild>
						<Link href="/login">Get Started Free</Link>
					</Button>
				</div>

				<Popover open={isOpen} onOpenChange={setIsOpen}>
					<PopoverTrigger className="md:hidden text-foreground">
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</PopoverTrigger>
					<PopoverContent align="end" className="w-full">
						<div className="md:hidden bg-background border-b border-border px-4 py-4 space-y-3">
							<a
								href="#features"
								className="block text-sm text-muted-foreground hover:text-foreground"
							>
								Features
							</a>
							<a
								href="#how-it-works"
								className="block text-sm text-muted-foreground hover:text-foreground"
							>
								How It Works
							</a>
							<a
								href="#demo"
								className="block text-sm text-muted-foreground hover:text-foreground"
							>
								Demo
							</a>
							<div className="flex items-center gap-3 pt-3">
								<ThemeToggle />
								<Button asChild className="flex-1">
									<Link href="/login">Get Started Free</Link>
								</Button>
							</div>
						</div>
					</PopoverContent>
				</Popover>
			</div>
		</nav>
	);
};

export default Navbar;

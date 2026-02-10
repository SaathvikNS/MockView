"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Check, Play } from "lucide-react";
import CustomCardSwap from "../CustomCardSwap";

const HeroSection = () => {
	return (
		<section className="pt-28 pb-20 px-4">
			<div className="container mx-auto">
				<div className="grid lg:grid-cols-7 items-center">
					<div className="lg:col-span-3 space-y-8">
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground">
							Nail Your Next Interview
							<p className="text-gradient">
								With AI-Powered Practice
							</p>
						</h1>
						<p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
							Get personalized feedback on your interview answers.{" "}
							<br />
							Practice like a pro, interview with confidence.
						</p>
						<div className="flex flex-wrap gap-4">
							<Button size="lg" asChild>
								<Link href="/signup">
									Start Practicing Free{" "}
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button size="lg" variant="outline">
								<Play className="mr-2 h-4 w-4" /> Watch Demo
							</Button>
						</div>
						<div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
							<span className="flex items-center gap-1.5">
								<Check className="h-4 w-4 text-accent" /> Free
								Practice Session
							</span>
							<span className="flex items-center gap-1.5">
								<Check className="h-4 w-4 text-accent" />
								Personal performace analysis
							</span>
							<span className="flex items-center gap-1.5">
								<Check className="h-4 w-4 text-accent" /> 500+
								interview practice
							</span>
						</div>
					</div>
					<div className="lg:col-span-4">
						<div className="relative">
							<div className="absolute inset-0 gradient-primary rounded-2xl blur-3xl opacity-20" />
							<div
								className="flex flex-col justify-center overflow-y-hidden pointer-events-none 
										sm:h-[calc((100vw * 15)/16)]
										lg:h-[80vh] lg:w-[50vw]"
							>
								<CustomCardSwap />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;

"use client";

import { motion } from "framer-motion";
import FadeContent from "./FadeContent";
import Image from "next/image";

const steps = [
	{
		title: "Paste the Job Description",
		description:
			"Copy the job posting you're applying for. Our AI analyzes the required skills and responsibilities.",
	},
	{
		title: "Get AI-Generated Questions",
		description:
			"Receive 5 tailored interview questions: technical challenges, behavioral scenarios, and role-fit questions.",
	},
	{
		title: "Record & Get Instant Feedback",
		description:
			"Answer via audio or text. Get detailed analysis on what you covered, what you missed, and how to improve.",
	},
];

export default function HowItWorksStepper() {
	return (
		<section
			className="relative mx-auto px-6 py-15 flex flex-col items-center
                                        bg-[radial-gradient(circle_300px_at_0%_50%,var(--color-blue-950),var(--color-gray-900))] from-primary
                                        sm:bg-[radial-gradient(circle_325px_at_0%_50%,var(--color-blue-950),var(--color-gray-900))] 
                                        md:bg-[radial-gradient(circle_0px_at_30%_55%,var(--color-blue-950),var(--color-gray-900))] "
		>
			{/* Heading */}
			<FadeContent
				duration={3}
				className="mb-20 text-center text-2xl font-bold sm:text-3xl text-accent"
			>
				Your Interview Prep in just
				<p
					className="block text-primary
                                        sm:inline"
				>
					{" "}
					3 Steps
				</p>
			</FadeContent>

			{/* Timeline */}
			<div className="md:flex w-full gap-5 justify-around items-center">
				<div className="relative hidden md:block w-1/3 aspect-square rounded-2xl ">
					<Image
						src={"/howitworks.png"}
						alt="How it works"
						fill
						className="rounded-2xl z-10 drop-shadow-2xl"
					/>
					<div className="blur-md h-full w-full bg-neutral-950 z-5 rounded-2xl translate-2" />
				</div>
				<ol className="relative space-y-20 sm:w-[90%] md:w-1/2">
					{/* Vertical line */}
					<span className="absolute left-5 top-0  h-[90%] w-px bg-linear-to-b from-transparent via-primary to-transparent sm:block" />

					{steps.map((step, i) => (
						<motion.li
							key={i}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{
								duration: 0.6,
								ease: "easeOut",
								delay: i * 0.15,
							}}
							className="relative grid grid-cols-[auto_1fr] gap-6 sm:gap-12"
						>
							{/* Step marker */}
							<div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-lg">
								{i + 1}
							</div>

							{/* Content card */}
							<div className="pt-1">
								<h3 className="mb-2 text-xl text-primary font-semibold sm:text-xl">
									{step.title}
								</h3>
								<p className="text-sm text-muted-foreground sm:text-base">
									{step.description}
								</p>
							</div>
						</motion.li>
					))}
				</ol>
			</div>
		</section>
	);
}

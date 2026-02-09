"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import GradientText from "./GradientText";
import { useIsMobile, useIsTablet } from "@/hooks/use-mobile";
import Link from "next/link";

export default function Header() {
	const { scrollY } = useScroll();

	const isMobile = useIsMobile();
	const isTablet = useIsTablet();

	const effectiveScrollY = useTransform(scrollY, (v) =>
		isMobile || isTablet ? 0 : v,
	);

	const glassOpacity = useTransform(scrollY, [0, 100], [0, 1]);
	const glassWidth = useTransform(
		effectiveScrollY,
		[0, 100],
		["100%", "50%"],
	);

	return (
		<header className="fixed top-4 left-1/2 z-50 w-[80%] -translate-x-1/2 flex justify-center">
			<motion.div
				style={{ width: glassWidth }}
				className="relative h-14 rounded-2xl flex items-center justify-between"
			>
				<motion.div
					style={{ opacity: glassOpacity }}
					className="absolute h-full w-full"
				>
					<div className="w-full h-full rounded-full backdrop-blur-2xl backdrop-brightness-40 shadow-[0_8px_24px_rgba(0,0,0,0.35)] " />
				</motion.div>

				<div className="mx-5">
					<GradientText
						colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
						animationSpeed={8}
						showBorder={false}
						className="rounded-none backdrop-opacity-0"
					>
						<h1 className="text-2xl font-black tracking-normal px-3">
							MockView
						</h1>
					</GradientText>
				</div>
				<Link href={"/login"} className="z-0 mx-5">
					<Button
						variant={"default"}
						size={"sm"}
						className="cursor-pointer"
					>
						Login
					</Button>
				</Link>
			</motion.div>
		</header>
	);
}

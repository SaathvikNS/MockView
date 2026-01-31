"use client";

import React from "react";
import CardSwap, { Card } from "./CardSwap";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCardSwap = () => {
	const isMobile = useIsMobile();

	return (
		<div className="absolute h-3/10 w-full sm:h-full sm:w-6/10sm:right-0 z-1 overflow-x-hidden pointer-events-none mt-6">
			<CardSwap
				height={isMobile ? 1080 / 4 : 1080 / 2}
				width={isMobile ? 1920 / 4 : 1920 / 2}
				cardDistance={50}
				verticalDistance={isMobile ? 60 : 80}
				delay={5000}
				pauseOnHover={false}
				skewAmount={4}
			>
				<Card className="border-0 -top-1/6! sm:-top-1/12! -left-1/5! sm:left-1/3! shadow-2xl">
					<Image
						src={"/web1.png"}
						alt="preview1"
						fill
						className="rounded-2xl"
					/>
				</Card>
				<Card className="border-0 -top-1/6! sm:-top-1/12! -left-1/5! sm:left-1/3! shadow-2xl">
					<Image
						src={"/web2.png"}
						alt="preview2"
						fill
						className="rounded-2xl"
					/>
				</Card>
				<Card className="border-0 -top-1/6! sm:-top-1/12! -left-1/5! sm:left-1/3! shadow-2xl">
					<Image
						src={"/web3.png"}
						alt="preview3"
						fill
						className="rounded-2xl"
					/>
				</Card>
			</CardSwap>
		</div>
	);
};

export default CustomCardSwap;

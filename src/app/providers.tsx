"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<ThemeProvider>
			<SessionProvider>{children}</SessionProvider>
		</ThemeProvider>
	);
};

export default Providers;

import React from "react";

const Verification = () => {
	return (
		<div className="bg-background h-dvh w-dvw flex justify-center items-center">
			<div className="bg-muted w-sm h-max  rounded-2xl shadow-2xl flex items-center p-10 flex-col">
				<h1 className="text-primary font-extrabold text-3xl">
					Mail Sent
				</h1>
				<p className="textlgl p-5 text-center">
					Sign in link has been sent to your mail.
				</p>
				<div className="bg-gray-700 h-px w-full my-5" />
				<h1 className="font-extrabold text-2xl">
					Mock<span className="text-primary">View</span>
				</h1>
			</div>
		</div>
	);
};

export default Verification;

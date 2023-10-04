"use client";

import { Copy, Github } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const SimplifiedCode = ({ props: { githubLink, code } }) => {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(code);
			setCopied(true);
			setTimeout(() => {
				setCopied(false);
			}, 3000);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="mt-8">
			<div className="flex items-center justify-between">
				<Link
					href={githubLink}
					target="_blank"
					className="flex gap-1 text-normal hover:underline decoration-pink underline-offset-2 decoration-2 w-max"
				>
					<Github size={24} className="text-purple" />{" "}
					<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent font-semibold">
						Github
					</span>
				</Link>
				<button
					className={`flex items-center gap-1 bg-hovery px-2 py-1 border border-hovery rounded-sm text-tiny transition-all ${
						copied && "text-purple border-purple bg-transparent"
					}`}
					onClick={() => handleCopy()}
				>
					<Copy size={16} /> {copied ? "Copied" : "Copy"}
				</button>
			</div>
			<div className="bg-hovery border border-hovery backdrop-blur-lg rounded-sm w-full h-auto max-h-[300px] overflow-auto custom-scrollbar mt-3">
				<pre className="text-small">{code}</pre>
			</div>
		</div>
	);
};

export default SimplifiedCode;

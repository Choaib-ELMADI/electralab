"use client";

import { Copy, Github } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Code = ({ props: { id, title, description, githubLink, code } }) => {
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
		<div id={id} className="mt-8">
			<h1 className="text-medium mb-1 font-[500]">{title}</h1>
			<p className="text-small mb-2">{description}</p>
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
			<div className="group bg-hovery border border-hovery backdrop-blur-lg rounded-sm w-full h-[300px] overflow-auto custom-scrollbar mt-2 relative">
				<button
					className="hidden group-hover:flex items-center gap-1 fixed right-1 top-1 bg-hovery px-2 py-1 border border-hovery rounded-sm text-tiny"
					onClick={() => handleCopy()}
				>
					<Copy size={16} /> {copied ? "Copied" : "Copy"}
				</button>
				<pre className="text-small">{code}</pre>
			</div>
		</div>
	);
};

export default Code;

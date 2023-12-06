"use client";

import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { Copy, Github, LinkIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Code = ({
	props: { id, title, description, githubLink, code, language },
}) => {
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
			<Link
				href={`#${id}`}
				className="group text-medium mb-2 font-[500] w-max hover:text-purple transition-all"
			>
				{title}{" "}
				<LinkIcon
					size={20}
					className="inline text-secondary group-hover:text-purple transition-all"
				/>
			</Link>
			<p className="text-small mb-3">{description}</p>
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
			<div className="w-full h-auto max-h-[300px] overflow-auto hide-scrollbar mt-1">
				<SyntaxHighlighter
					className="custom-scrollbar"
					language={language}
					style={dracula}
				>
					{code}
				</SyntaxHighlighter>
			</div>
		</div>
	);
};

export default Code;

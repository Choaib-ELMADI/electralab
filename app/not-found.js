import Link from "next/link";

export default function NotFound() {
	return (
		<div className="w-full max-w-[1200px] mx-auto py-28 flex flex-col items-center">
			<h1 className="text-[50px] font-bold">
				<span className="text-green">4</span>
				<span className="text-purple">0</span>
				<span className="text-pink">4</span>
			</h1>
			<h1 className="text-medium">Page Not Found</h1>
			<Link
				href="/"
				className="bg-gradient-to-r from-purple to-pink text-background dark:text-text text-medium rounded-full px-8 mt-2 hover:underline"
			>
				Home
			</Link>
		</div>
	);
}

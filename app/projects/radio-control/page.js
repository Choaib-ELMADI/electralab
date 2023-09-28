import Link from "next/link";

export default function RadioControl() {
	return (
		<div className="w-full max-w-[1200px] mx-auto py-28 flex flex-col items-center">
			<h1 className="text-xlarge font-bold">Radio Control</h1>
			<h1 className="text-medium">We are working here</h1>
			<Link
				href="/"
				className="bg-gradient-to-r from-purple to-pink text-background dark:text-text text-medium rounded-full px-8 mt-2 hover:underline"
			>
				Home
			</Link>
		</div>
	);
}

import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Introduction = () => {
	return (
		<div>
			<p className="text-small mb-3">
				Come along on a journey through my adventure in building a cool{" "}
				<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent font-semibold">
					self-balancing robot
				</span>{" "}
				using{" "}
				<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent font-semibold">
					Arduino
				</span>{" "}
				and an{" "}
				<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent font-semibold">
					MPU6050 module
				</span>
				. This website is your ticket to seeing how I put together this fun
				little robot, step by step.
			</p>
			<p className="text-small mb-3">
				I&rsquo;ll show you how I used basic components like the Arduino board
				and the MPU6050 sensor to create something that can balance itself.
				I&rsquo;ll explain things in a simple way, so you can understand how I
				made it all work.
			</p>
			<p className="text-small mb-3">
				We&rsquo;ll explore how I taught the robot to balance using clever
				tricks with code and electronics. It&rsquo;s a mix of science and
				creativity that&rsquo;s both fun and fascinating!
			</p>
			<p className="text-small">
				Let&rsquo;s dive in and discover the magic behind this awesome mini
				balance robot together!
			</p>
		</div>
	);
};

export const Steps = () => {
	return (
		<div className="mt-8">
			<h1 className="text-medium mb-2 font-[500]">
				So, these are the steps we&rsquo;re going to follow to complete this
				project:
			</h1>
			<div className="ml-12 mb-4">
				<ol className="list-inside list-decimal ml-5 flex flex-col gap-1">
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#project-3d-models">3D Modeling The Robot</Link>
					</li>
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#project-circuit">Arduino Circuit Diagram</Link>
					</li>
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#solder-electronics">Soldering & Electronics</Link>
					</li>
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#project-code">Arduino Code</Link>
					</li>
				</ol>
			</div>
		</div>
	);
};

export const RobotModeling = ({
	props: { id, title, description, images },
}) => {
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

			<iframe
				width="639"
				height="480"
				title="Mini Balance Robot"
				frameborder="0"
				allowfullscreen
				mozallowfullscreen="true"
				webkitallowfullscreen="true"
				allow="clipboard-write; autoplay; fullscreen; xr-spatial-tracking"
				xr-spatial-tracking
				execution-while-out-of-viewport
				execution-while-not-rendered
				web-share
				src="https://thangs.com/model/963956/embed?utm_source=embed"
				className="w-full aspect-[2/1.2] mb-2 rounded-sm"
			/>

			<div className="grid grid-cols-1 sm:grid-cols-2 mn:grid-cols-3 gap-2">
				{images.map((image, i) => (
					<Link
						key={`image-${i}`}
						className="sm:max-h-[200px]"
						href="https://thangs.com/designer/Choaib%20ELMADI"
						target="_blank"
					>
						<Image
							src={image}
							width={400}
							height={400}
							draggable="false"
							alt={`${title} - ${i}`}
							className="w-full h-full rounded-sm object-cover"
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

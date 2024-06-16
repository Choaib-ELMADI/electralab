import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Introduction = () => {
	return (
		<div>
			<p className="text-small mb-3">
				<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent font-semibold">
					EchoLens
				</span>{" "}
				represents a transformative leap in communication technology,
				specifically designed to empower individuals who are{" "}
				<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent font-semibold">
					deaf or mute
				</span>
				. These smart glasses convert spoken language into text and translate
				sign language into spoken words, facilitating seamless interaction in
				everyday situations.
			</p>

			<p className="text-small mb-3">
				<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent font-semibold">
					EchoLens
				</span>{" "}
				works by using a connected device, such as a phone or PC, to capture
				spoken words in real-time. The audio is processed and converted into
				text, which is then displayed on a web interface accessible through the
				glasses. This allows users to instantly read what is being said around
				them, making verbal communication more accessible.
			</p>

			<p className="text-small mb-3">
				For{" "}
				<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent font-semibold">
					sign language
				</span>{" "}
				, EchoLens employs an AI model trained with Mediapipe and Scikit-Learn.
				Mediapipe detects hand gestures by recognizing key points on the hands,
				while Scikit-Learn classifies these gestures into words or phrases. The
				system converts these gestures into spoken words, enabling effective
				communication through sign language.
			</p>
		</div>
	);
};

export const Steps = () => {
	return (
		<div className="mt-8">
			<h1 className="text-medium mb-2 font-[500]">
				Here are the steps we&rsquo;ll take to successfully build the EchoLens
				project:
			</h1>
			<div className="ml-12">
				<ol className="list-inside list-decimal flex flex-col gap-1">
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#frame-design-3d-print">
							Frame Design and 3D Printing
						</Link>
					</li>
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#pcb-development">PCB Development</Link>
					</li>
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#ai-model">AI Model for Sign Language</Link>
					</li>
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#web-interface-setup">Web Interface Setup</Link>
					</li>
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#integration-and-testing">Integration and Testing</Link>
					</li>
				</ol>
			</div>
		</div>
	);
};

export const FrameDesign = ({
	props: { id, title, description, images, conclusion },
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
			<div className="grid grid-cols-1 sm:grid-cols-2 mn:grid-cols-3 gap-2">
				{images.map((image, i) => (
					<div key={`image-${i}`} className="sm:max-h-[300px] last:col-span-2">
						<Image
							src={image}
							width={400}
							height={400}
							draggable="false"
							alt={`${title} - ${i}`}
							className="w-full h-full rounded-sm object-cover"
						/>
					</div>
				))}
			</div>
			<p className="text-small mt-2">{conclusion}</p>
			<RedirectLink
				link="https://github.com/Choaib-ELMADI/echolens/tree/main/3D%20Models"
				text="Github - 3D Models"
			/>
			<RedirectLink
				link="https://thangs.com/designer/Choaib%20ELMADI"
				text="Thangs Profile"
			/>
		</div>
	);
};

const RedirectLink = ({ link, text }) => {
	return (
		<Link
			href={link}
			target="_blank"
			className="block w-full rounded-sm px-1 py-3 text-center text-small mt-2 bg-gradient-to-r from-pink to-purple text-background dark:text-text hover:underline"
		>
			{text}
		</Link>
	);
};

import HeaderImage from "@/public/projects/mini-balance-robot/header.png";
import PorfileImage from "@/public/profile.jpg";

import {
	AssembleParts,
	CircuitDiagram,
	Introduction,
	RobotModeling,
	SetUpEnvironment,
	Steps,
} from "./utils";
import NavigateToOtherProjects from "@/components/utils/navigate-other-projects";
import AuthorInfo from "@/components/utils/author-info";
import Support from "@/components/utils/support";
import Header from "@/components/utils/header";

export default function MiniBalanceRobot() {
	return (
		<div className="w-full max-w-[1200px] mx-auto">
			<Header
				props={{
					banner: HeaderImage,
					profile: PorfileImage,
					title: "Arduino: Mini Balance Robot",
					link: "https://elmadichoaib.vercel.app",
					user: "Choaib ELMADI",
				}}
			/>
			<div className="grid grid-cols-1 dm:grid-cols-[auto_300px] gap-1">
				<div className="overflow-hidden">
					<>
						<Introduction />
						<Steps />
						<SetUpEnvironment id="project-environment" />
					</>

					<>
						<RobotModeling
							props={{
								id: "project-3d-models",
								title: "MBR 3D Models",
								description:
									"Let's begin by giving shape to our mini balance robot in the digital world! I've created 3D models that represent every part of our robot. These models are like digital maps showing how each piece fits together. Click the links below to download and see these models. They're the starting point of our project, showing us how our robot will look and how its parts connect.",
								images: [
									"/projects/mini-balance-robot/3d-model-1.png",
									"/projects/mini-balance-robot/3d-model-2.png",
									"/projects/mini-balance-robot/3d-model-3.png",
								],
							}}
						/>
					</>

					<>
						<CircuitDiagram
							props={{
								id: "project-circuit",
								title: "Schematic Overview",
								description:
									"Understanding the schematic is pivotal in comprehending the intricate workings of our project. This section provides a detailed overview of the circuitry and connections, unraveling the blueprint behind the magic of our creation.",
								images: [
									"/projects/mini-balance-robot/mbr-circuit.png",
									"/projects/mini-balance-robot/mpu6050-wiring.png",
									"/projects/mini-balance-robot/motors-wiring.png",
								],
							}}
						/>
					</>

					<>
						<AssembleParts
							props={{
								id: "parts-assembly",
								title: "Assembly of Printed Parts",
								description:
									"This section covers the step-by-step process of assembling the 3D-printed components necessary for constructing the self-balancing robot. Follow these instructions to seamlessly piece together the printed parts, ensuring a sturdy and functional foundation for the robot's structure.",
								images: [
									"/projects/mini-balance-robot/assembly-img-1.jpg",
									"/projects/mini-balance-robot/assembly-img-2.jpg",
									"/projects/mini-balance-robot/assembly-img-3.jpg",
								],
								mainImage:
									"/projects/mini-balance-robot/assembly-main-image.jpg",
							}}
						/>
					</>

					<>
						<NavigateToOtherProjects
							props={{
								prev: "/projects/poker-card-game",
								prevTitle: "Poker Card Game",
								next: "/",
								nextTitle: "Home",
							}}
						/>
						<Support />
					</>
				</div>
				<AuthorInfo
					props={{
						profile: PorfileImage,
						description:
							"I'm a junior full-stack developer with 2+ years of experience in web technologies like HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express, and databases like MongoDB and Firebase. I'm also an electronics engineering student who loves creating robots with Arduino and Raspberry Pi.",
						name: "Choaib ELMADI",
						link: "https://elmadichoaib.vercel.app",
					}}
				/>
			</div>
		</div>
	);
}

import HeaderImage from "@/public/projects/mini-balance-robot/header.png";
import PorfileImage from "@/public/profile.jpg";

import { Introduction, RobotModeling, Steps } from "./utils";
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
					<Introduction />
					<Steps />
					<RobotModeling
						props={{
							id: "project-3d-models",
							title: "MBR 3D Models",
							description:
								"Let's begin by giving shape to our mini balance robot in the digital world! I've created 3D models that represent every part of our robot. These models are like digital maps showing how each piece fits together. Click the links below to download and see these models. They're the starting point of our project, showing us how our robot will look and how its parts connect.",
							images: [
								"/projects/mini-balance-robot/header.png",
								"/projects/mini-balance-robot/header.png",
								"/projects/mini-balance-robot/header.png",
							],
						}}
					/>

					{/*
					<>
						<DemoWithImage
							props={{
								id: "static-image-testing",
								title: "Static Image Testing",
								description:
									"Let's begin our exploration by examining the capabilities of our Car Counter system through static image testing.",
								image: "/projects/cars-counter/cars-counter-static-img.png",
							}}
						/>
						<SimplifiedCode
							props={{
								githubLink: "https://github.com/Choaib-ELMADI/Computer-Vision",
								code: staticImageTestingCode,
							}}
						/>
					</>

					<>
						<DemoWithVideo
							props={{
								id: "video-testing",
								title: "Video Testing",
								description:
									"Let's dive into the dynamic world of our Car Counter system by exploring its accuracy and efficiency through static video testing.",
								note: "(Video Speed X4 - My PC Is Crying!!! 😂)",
								video: "/projects/cars-counter/cars-counter-static-video.mp4",
							}}
						/>

						<SimplifiedCode
							props={{
								githubLink: "https://github.com/Choaib-ELMADI/Computer-Vision",
								code: staticVideoTestingCode,
							}}
						/>
					</>

					<>
						<DemoWithRealTimeVideo
							props={{
								id: "real-time-video",
								title: "Real-Time Video",
								description:
									"Utilizing real-time video for our Car Counter system is as seamless and precise as working with static video footage. The technology adapts effortlessly, ensuring accurate car counting in both dynamic and stable scenarios.",
								note: "I didn't test real-time video due to my PC's limitations, but it's a possibility for the future.",
							}}
						/>
						<Conclusion
							props={{
								title: "Wrapping Up",
								descriptions: [
									"In conclusion, our Car Counter project showcases the power of computer vision technology and its real-world applications in traffic analysis. Through meticulous testing, we have demonstrated the system's reliability in both static images and dynamic video scenarios. By accurately counting cars and understanding traffic patterns, this project opens doors to innovative solutions for urban planning and transportation management.",
									"As we wrap up this exploration, we invite you to continue this exciting journey with us, exploring the endless possibilities that technology offers in reshaping our cities and enhancing our everyday lives. ",
									"Thank you for joining us on this adventure, and we look forward to a future where intelligent systems like our Car Counter contribute to smarter, more efficient urban environments.",
								],
							}}
						/>
					</>
*/}
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

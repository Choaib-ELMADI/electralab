import HeaderImage from "@/public/projects/cars-counter/header.png";
import PorfileImage from "@/public/profile.jpg";

import NavigateToOtherProjects from "@/components/utils/navigate-other-projects";
import { Introduction, SetUpEnvironment } from "./utils";
import AuthorInfo from "@/components/utils/author-info";
import Support from "@/components/utils/support";
import Header from "@/components/utils/header";
import Code from "@/components/utils/code";

const installPyPackages = `
	pip install
		cvzone==1.5.6
		ultralytics==8.0.26
		hydra-core>=1.2.0
		matplotlib>=3.2.2
		numpy>=1.18.5
		opencv-python==4.5.4.60
		Pillow>=7.1.2
		PyYAML>=5.3.1
		requests>=2.23.0
		scipy>=1.4.1
		torch>=1.7.0
		torchvision>=0.8.1
		tqdm>=4.64.0
		filterpy==1.4.5
		scikit-image==0.19.3
		lap==0.4.0

`;

export default function CarsCounter() {
	return (
		<div className="w-full max-w-[1200px] mx-auto">
			<Header
				props={{
					banner: HeaderImage,
					profile: PorfileImage,
					title: "Object Detection: Cars Counter",
					link: "https://elmadichoaib.vercel.app",
					user: "Choaib ELMADI",
				}}
			/>
			<div className="grid grid-cols-1 dm:grid-cols-[auto_300px] gap-1">
				<div>
					<Introduction />
					<SetUpEnvironment id="setup-requirements" />
					<Code
						props={{
							id: "install-py-packages",
							title: "Install Python Libraries",
							description:
								"Ensure that you have these libraries installed in your Python environment before running the Car Counter project code. You can use the following command to install these libraries using pip:",
							githubLink: "https://github.com/Choaib-ELMADI/Computer-Vision",
							code: installPyPackages,
						}}
					/>
					<>
						<NavigateToOtherProjects
							props={{
								prev: "/projects/radio-control",
								prevTitle: "Radio Control",
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

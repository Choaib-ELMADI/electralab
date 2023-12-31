import Image from "next/image";
import Link from "next/link";

import ArduinoLogo from "@/public/sponsors/arduino-logo.png";
import EasyEDALogo from "@/public/sponsors/EasyEDA.png";
import ArduinoPlanetLogo from "@/public/sponsors/arduinoPlanet.webp";
import JLCPCBLogo from "@/public/sponsors/jlcpcb-logo.webp";
import PCBWayLogo from "@/public/sponsors/pcbway.png";

export const sponsors = [
	{
		name: "Arduino",
		link: "https://www.arduino.cc/",
		img: ArduinoLogo,
	},
	{
		name: "EasyEDA",
		link: "https://easyeda.com/fr",
		img: EasyEDALogo,
	},
	{
		name: "ArduinoPlanet",
		link: "https://www.arduiplanet.ma/",
		img: ArduinoPlanetLogo,
	},
	{
		name: "jlcPCB",
		link: "https://jlcpcb.com/",
		img: JLCPCBLogo,
	},
	{
		name: "pcbWay",
		link: "https://pcbway.com/",
		img: PCBWayLogo,
	},
];

const Hero = () => {
	return (
		<div className="mt-8">
			<div className="w-full max-w-[1200px] mx-auto flex flex-col justify-start gap-2 dm:flex-row dm:justify-between dm:items-end dm:gap-8 mb-4">
				<h1 className="text-xlarge font-bold text-secondary">
					<span className="text-purple">Robotics, AI,</span>
					<br />
					and <span className="text-pink">Automation</span>:
					<br />
					<span className="text-green">Empowering the Future.</span>
				</h1>
				<p className="w-full max-w-[500px] text-small">
					<b className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent">
						ELECTRALAB
					</b>{" "}
					is a platform that enables hobbyists, designers, and engineers to
					create a wide range of projects, from simple LED displays to complex
					robotic systems.
				</p>
			</div>
			<div className="w-full max-w-[1200px] aspect-auto md:aspect-[2.5/1] mx-auto rounded-sm overflow-hidden relative">
				<Image
					src="/banner.webp"
					width={800}
					height={400}
					alt="ElectraLab Banner"
					className="w-full h-full object-cover"
					draggable="false"
					priority={true}
				/>
				<p className="absolute bottom-0 left-0 w-full z-[4] bg-purple text-background dark:text-text text-center text-[11px] px-1">
					Arduino Uno R3 microcontroller board, 14 digital input/output pins, 6
					analog inputs.
				</p>
			</div>
			<div className="w-full max-w-[1200px] mx-auto flex flex-wrap items-center justify-center gap-8 mt-4">
				{sponsors.map((s, i) => (
					<Link key={i} href={s.link} target="_blank" className="group">
						<Image
							src={s.img}
							alt={s.name}
							width={100}
							height={30}
							draggable="false"
							className="w-[60px] md:w-[80px] aspect-[1.5/1] object-contain grayscale group-hover:grayscale-0 transition-all"
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Hero;

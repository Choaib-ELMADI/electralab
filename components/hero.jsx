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
			<div className="flex flex-col justify-start gap-2 mn:flex-row mn:justify-around mn:items-end mn:gap-8 mb-4">
				<h1 className="text-xlarge font-bold">
					<span className="text-green">CV</span>,{" "}
					<span className="text-purple">Arduino</span> & <br />
					<span className="text-pink">Microcontrollers</span>.
				</h1>
				<p className="w-full max-w-[500px] mn:max-w-[600px] text-small">
					<b className="bg-gradient-to-r from-purple to-pink bg-clip-text text-[transparent]">
						ELECTRALAB
					</b>{" "}
					is a platform that enables hobbyists, designers, and engineers to
					create a wide range of projects, from simple LED displays to complex
					robotic systems.
				</p>
			</div>
			<div className="w-full max-w-[1200px] aspect-[2.5/1] min-h-[260px] mx-auto rounded-lg overflow-hidden relative">
				<Image
					src="/banner.webp"
					width={800}
					height={400}
					alt="ElectraLab Banner"
					className="w-full h-full object-cover"
					draggable="false"
				/>
				<p className="absolute bottom-0 left-0 w-full z-[4] bg-purple text-background dark:text-text text-center text-[12px] sm:text-tiny px-1">
					Arduino Uno R3 microcontroller board, 14 digital input/output pins, 6
					analog inputs.
				</p>
			</div>
			<div className="flex items-center justify-center gap-8 mt-4">
				{sponsors.map((s, i) => (
					<Link key={i} href={s.link} target="_blank" className="group">
						<Image
							src={s.img}
							alt={s.name}
							width={100}
							height={30}
							draggable="false"
							className="w-[100px] aspect-[1.5/1] object-contain grayscale group-hover:grayscale-0 transition-all mix-blend-color-burn"
						/>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Hero;

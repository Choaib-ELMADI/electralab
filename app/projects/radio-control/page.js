import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import HeaderImage from "@/public/projects/radio-control/header.jpg";
import PorfileImage from "@/public/profile.jpg";

const transmitterCode = `
	/*
		Radio Transmitter Code
		by Choaib ELMADI   https://elmadichoaib.vercel.app

		Give it a star :   github.com/Choaib-ELMADI
	*/

	#include <SPI.h>
	#include "nRF24L01.h"
	#include "RF24.h"

	RF24 radio(7, 8);
	const byte address[6] = "ABCDE";

	typedef struct {
		int xL;
		int yL;
		int xR;
		int yR;
	} DATA;
	DATA data;

	int xLeft  = A0;
	int yLeft  = A1;
	int xRight = A2;
	int yRight = A3;

	void setup() {  
		radio.begin();
		radio.openWritingPipe(address);
		radio.setPALevel(RF24_PA_MIN);
		radio.stopListening();
	}

	void loop() {
		int xLeftValue  = analogRead(xLeft);
		int yLeftValue  = analogRead(yLeft);
		int xRightValue = analogRead(xRight);
		int yRightValue = analogRead(yRight);
	
		data.xL = xLeftValue;
		data.yL = yLeftValue;
		data.xR = xRightValue;
		data.yR = yRightValue;
	
		radio.write(&data, sizeof(DATA));
	}

`;
const receiverCode = `
	/*
		Radio Receiver Code
		by Choaib ELMADI   https://elmadichoaib.vercel.app

		Give it a star :   github.com/Choaib-ELMADI
	*/

	#include <SPI.h>
	#include "nRF24L01.h"
	#include "RF24.h"
	
	#include <Servo.h>
	
	RF24 radio(7, 8);
	const byte address[6] = "ABCDE";
	
	Servo Servo01;
	Servo Servo02;
	int Servo01Pin = 2;
	int Servo02Pin = 3;
			
	typedef struct {
		int xL;
		int yL;
		int xR;
		int yR;
	} DATA;
	DATA data;
	
	void setup() {
		radio.begin();
		radio.openReadingPipe(0, address);
		radio.setPALevel(RF24_PA_MIN);
		radio.startListening();
	
		Servo01.attach(Servo01Pin);
		Servo02.attach(Servo02Pin);
		Servo01.write(0);
		Servo02.write(0);
	}

	void loop() {
		if (radio.available()) {
			radio.read(&data, sizeof(DATA));
	
			int angle01 = map(data.xL, 0, 1023, 0, 179);
			int angle02 = map(data.yL, 0, 1023, 0, 179);
			Servo01.write(angle01);
			Servo02.write(angle02);
		}
	}

`;

import NavigateToOtherProjects from "@/components/utils/navigate-other-projects";
import AuthorInfo from "@/components/utils/author-info";
import Support from "@/components/utils/support";
import Header from "@/components/utils/header";

const Introduction = () => {
	return (
		<div>
			<p className="text-small mb-3">
				Introducing our{" "}
				<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent font-semibold">
					Arduino-based radio controller
				</span>
				, designed to make remote control of your robotic projects a breeze!
				This innovative controller utilizes an Arduino Nano to read data from
				two joysticks and wirelessly transmit it to another Arduino Nano, via an
				NRF24L01 module.
			</p>
			<p className="text-small mb-3">
				<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent font-semibold">
					The Arduino Nano
				</span>{" "}
				is a small, powerful microcontroller that&rsquo;s perfect for this type
				of project. It&rsquo;s easy to program and can be customized to meet
				your specific needs. With its compact size, you can easily take it with
				you wherever you go, making it ideal for controlling robots, drones, or
				other projects from a distance.
			</p>
			<p className="text-small">
				<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent font-semibold">
					The NRF24L01 module
				</span>{" "}
				is a wireless communication module that allows you to send and receive
				data over a distance of up to 1000 meters. This makes it perfect for
				controlling your robot from a distance, without the need for messy
				cables or wires.
			</p>
		</div>
	);
};

const Steps = () => {
	return (
		<div className="mt-8">
			<h1 className="text-medium mb-1 font-[500]">
				So, these are the steps we&rsquo;re going to follow to complete this
				project:
			</h1>
			<div className="ml-12 mb-4">
				<h1 className="bg-gradient-to-r from-green to-purple bg-clip-text text-transparent font-semibold w-max">
					Transmitter:
				</h1>
				<ol className="list-inside list-decimal ml-5 flex flex-col gap-1">
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#project-circuit-trs">Arduino Circuit Diagram</Link>
					</li>
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#solder-electronics-trs">Soldering & Electronics</Link>
					</li>
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#project-code-trs">Arduino Code</Link>
					</li>
				</ol>
			</div>
			<div className="ml-12">
				<h1 className="bg-gradient-to-r from-green to-purple bg-clip-text text-transparent font-semibold w-max">
					Receiver:
				</h1>
				<ol className="list-inside list-decimal ml-5 flex flex-col gap-1">
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#project-circuit-rcv">Arduino Circuit Diagram</Link>
					</li>
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#solder-electronics-rcv">Soldering & Electronics</Link>
					</li>
					<li className="text-tiny text-secondary hover:text-text transition-all w-max">
						<Link href="#project-code-rcv">Arduino Code</Link>
					</li>
				</ol>
			</div>
		</div>
	);
};

const CircuitDiagram = ({ props: { id, title, description, image } }) => {
	return (
		<div id={id} className="mt-8">
			<h1 className="text-medium mb-1 font-[500]">{title}</h1>
			<p className="text-small mb-2">{description}</p>
			<Image
				src={image}
				width={900}
				height={400}
				draggable="false"
				alt={title}
				priority={true}
				className="w-full rounded-sm"
			/>
		</div>
	);
};

const AssembleParts = ({
	props: { id, title, description, images, conclusion },
}) => {
	return (
		<div id={id} className="mt-8">
			<h1 className="text-medium mb-1 font-[500]">{title}</h1>
			<p className="text-small mb-2">{description}</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 mn:grid-cols-3 gap-2">
				{images.map((image, i) => (
					<div key={`image-${i}`} className="sm:max-h-[200px]">
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
		</div>
	);
};

const Code = ({ props: { id, title, description, githubLink, code } }) => {
	return (
		<div id={id} className="mt-8">
			<h1 className="text-medium mb-1 font-[500]">{title}</h1>
			<p className="text-small mb-2">{description}</p>
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
			<div className="bg-hovery border border-hovery backdrop-blur-lg rounded-sm w-full h-[300px] overflow-auto custom-scrollbar mt-2">
				<pre>{code}</pre>
			</div>
		</div>
	);
};

export default function RadioControl() {
	return (
		<div className="w-full max-w-[1200px] mx-auto">
			<Header
				props={{
					banner: HeaderImage,
					profile: PorfileImage,
					title: "DIY Arduino Radio Controller",
					link: "https://elmadichoaib.vercel.app",
					user: "Choaib ELMADI",
				}}
			/>
			<div className="grid grid-cols-1 dm:grid-cols-[auto_300px] gap-1">
				<div>
					<Introduction />
					<Steps />
					<CircuitDiagram
						props={{
							id: "project-circuit-trs",
							title: "Transmitter Circuit Diagram",
							description:
								"First of all, we need to create the electronic circuit for our transmitter. It consists of an Arduino Nano, 2 joysticks, a NRF24L01 module and a 100uF capacitor.",
							image: "/projects/radio-control/transmitter-circuit.png",
						}}
					/>
					<AssembleParts
						props={{
							id: "solder-electronics-trs",
							title: "Transmitter Circuit Diagram",
							description:
								"First of all, we need to create the electronic circuit for our transmitter. It consists of an Arduino Nano, 2 joysticks, a NRF24L01 module and a 100uF capacitor.",
							images: [
								"/projects/radio-control/transmitter-assembly-1.jpg",
								"/projects/radio-control/transmitter-assembly-2.jpg",
								"/projects/radio-control/transmitter-assembly-3.jpg",
							],
							conclusion:
								"And Now, our radio transmitter is ready and we can repeat the same process with the receiver.",
						}}
					/>
					<Code
						props={{
							id: "project-code-trs",
							title: "Arduino Code",
							description:
								"NB: The address for both the receiver and the transmitter must be the same.",
							githubLink: "https://github.com/Choaib-ELMADI",
							code: transmitterCode,
						}}
					/>
					<NavigateToOtherProjects
						props={{
							prev: "/",
							prevTitle: "Home",
							next: "/projects/solar-panel",
							nextTitle: "Solar Panel",
						}}
					/>
					<Support />
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

import { LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import SimplifiedCode from "@/components/utils/simplified-code";

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

export const DesignStep = ({
	props: { id, title, description, images, conclusion, links },
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
					<div
						key={`image-${i}`}
						className={`sm:max-h-[300px] ${
							images.length > 3 && "last:col-span-2"
						}`}
					>
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
			{links.map(({ link, text }, index) => (
				<RedirectLink link={link} text={text} index={`link-${index}`} />
			))}
		</div>
	);
};

const RedirectLink = ({ link, text, index }) => {
	return (
		<Link
			href={link}
			target="_blank"
			className="block w-full rounded-sm px-1 py-3 text-center text-small mt-2 bg-gradient-to-r from-pink to-purple text-background dark:text-text hover:underline"
			key={index}
		>
			{text}
		</Link>
	);
};

export const AIModel = ({ props: { id, title } }) => {
	const images = [
		"/projects/echolens/ihear.jpg",
		"/projects/echolens/nothing.jpg",
	];

	const dataCollectionProgram = `	# Import Libraries
	import mediapipe as mp
	import numpy as np
	import cv2
	import os

	# Define some Colors
	text_background = (198, 63, 88)  # PURPLE
	corner_color = (53, 53, 249)     # RED
	text_color = (239, 239, 239)     # WHITE
	border_color = (61, 147, 8)      # GREEN

	# Setup Folders for Collection
	DATA_PATH = os.path.join("Data")
	actions = np.array(["Yes", "WhatAreYouDoing", "TryBeing", "ToMeet", "ThankYou", "TakeCare", "SameAsYou", "Question", "Point", "Nothing", "IHear", "HowAreYou", "Hello", "Good", "Bye", "_BLANK_"])
	no_sequences = 40
	sequence_length = 30
	
	for action in actions:
		for sequence in range(no_sequences):
			try:
				os.makedirs(os.path.join(DATA_PATH, action, str(sequence)))
			except:
				pass
				
	# Collect Mediapipe Keypoints
	mp_drawing_styles = mp.solutions.drawing_styles
	mp_drawing = mp.solutions.drawing_utils
	mp_hands = mp.solutions.hands
	hands = mp_hands.Hands(max_num_hands=1)

	def mediapipe_detections(frame, model):
		frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
		frame.flags.writeable = False
		results = model.process(frame)
		frame.flags.writeable = True
		frame = cv2.cvtColor(frame, cv2.COLOR_RGB2BGR)

		return frame, results


	def draw_landmarks(frame, results, color):
		if results.multi_hand_landmarks:
			for hand_landmarks in results.multi_hand_landmarks:
				mp_drawing.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS)


	def extract_keypoints(results):
		hand_landmarks = np.zeros(63)
		
		if results.multi_hand_landmarks:
			hand_landmarks = np.array(
				[
					[landmark.x, landmark.y, landmark.z]
					for landmark in results.multi_hand_landmarks[0].landmark
				]
			).flatten()

		return hand_landmarks
		
	# The Main Loop
	stream_url = "http://192.168.169.196:81/stream" # Change this with your own camera url
	cap = cv2.VideoCapture(0) # Change this with your own camera index

	no_frames_counter = 0
	no_sequences_counter = 0
	index = 0
	current_action = actions[index]

	while True:
		_, image = cap.read()
		
		image, results = mediapipe_detections(image, hands)
		draw_landmarks(image, results, corner_color)
		right_hand = extract_keypoints(results)
		
		key = cv2.waitKey(1) & 0xFF
		
		if key == ord("s"):
			npy_path = os.path.join(DATA_PATH, current_action, str(no_sequences_counter), f"{no_frames_counter}.npy")
			np.save(npy_path, right_hand)
			no_frames_counter += 1
			if no_frames_counter == sequence_length:
				no_frames_counter = 0
				no_sequences_counter += 1
				if no_sequences_counter == no_sequences:
					break
		
		cv2.putText(image, f"Collecting Frames for '{current_action}'", (15, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (255, 0, 0), 2, cv2.LINE_AA)
		cv2.putText(image, f"Video Num: {no_sequences_counter}", (15, 70), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (0, 255, 0), 2, cv2.LINE_AA)
		cv2.putText(image, f"Frame Num: {no_frames_counter}", (15, 110), cv2.FONT_HERSHEY_SIMPLEX, 0.75, (0, 0, 255), 2, cv2.LINE_AA)
		cv2.imshow("Image", image)
		
		if key == ord("n"):
			cv2.imwrite(f"{current_action}-image-{no_frames_counter}-{no_sequences_counter}.jpg", image)
		
		if key == ord("q"):
			break
		
	cap.release()
	cv2.destroyAllWindows()`;

	const trainingProgram = `	from sklearn.tree import DecisionTreeClassifier
	import pandas as pd
	import joblib
	import warnings

	warnings.filterwarnings("ignore", category=UserWarning, module="sklearn")


	def train_new_model(data_path, model_output):
		df = pd.read_csv(data_path, header=None)
		df = df.iloc[:, 1:]

		X = df.iloc[:, 1:]
		y = df.iloc[:, 0]

		model = DecisionTreeClassifier()
		model.fit(X, y)
		joblib.dump(model, model_output)

		print(f"Model Trained: '{model_output}")


	data_name = "my_data"
	data_path = f"C:\\Users\\Choaib ELMADI\\Downloads\\D.I.F.Y\\Electronics\\Robotics\\6- EchoLens\\Sign Language Model\\Model\\{ data_name }.csv"

	model_name = "my_model"
	model_output = f"C:\\Users\\Choaib ELMADI\\Downloads\\D.I.F.Y\\Electronics\\Robotics\\6- EchoLens\\Sign Language Model\\Model\\{ model_name }.joblib"


	train_new_model(data_path, model_output)`;

	return (
		<div id={id} className="mt-8">
			<>
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
				<p className="text-small mb-3">
					In this step, we develop an AI model to recognize and translate sign
					language gestures for EchoLens.
				</p>
			</>

			<>
				<p className="text-small mb-3">
					We start by using Mediapipe to detect hand gestures through key point
					recognition, and then we collect a large set of data for each sign we
					want to add.
				</p>
				<Image
					src="/projects/echolens/hand-landmarks.png"
					width={1200}
					height={400}
					draggable="false"
					alt="Mediapipe Hand Landmarks"
					className="w-full rounded-sm object-cover"
				/>
				<div className="grid grid-cols-1 mn:grid-cols-2 gap-2 mt-2">
					{images.map((image, i) => (
						<div key={`image-${i}`}>
							<Image
								src={image}
								width={400}
								height={400}
								draggable="false"
								alt={`${title} - ${i}`}
								className="w-full rounded-sm object-cover"
							/>
						</div>
					))}
				</div>
				<SimplifiedCode
					props={{
						githubLink:
							"https://github.com/Choaib-ELMADI/echolens/blob/main/Sign%20Language%20Model/",
						code: dataCollectionProgram,
						language: "python",
					}}
				/>
				<p className="text-small my-3">
					This is the form of the data that we want:
				</p>
				<Image
					src="/projects/echolens/csv-data.png"
					width={1200}
					height={400}
					draggable="false"
					alt="CSV Data"
					className="w-full rounded-sm object-cover"
				/>
			</>

			<>
				<p className="text-small mt-3">
					We then train the model using Scikit-Learn to classify these gestures
					into corresponding words or phrases.
				</p>

				<SimplifiedCode
					props={{
						githubLink:
							"https://github.com/Choaib-ELMADI/echolens/blob/main/Sign%20Language%20Model/",
						code: trainingProgram,
						language: "python",
					}}
				/>
				<p className="text-small mt-3">
					This model enables EchoLens to convert sign language into spoken
					words, facilitating effective communication.
				</p>
				<RedirectLink
					link="https://github.com/Choaib-ELMADI/echolens/tree/main/Sign%20Language%20Model"
					text="Learn More - AI Model"
				/>
			</>
		</div>
	);
};

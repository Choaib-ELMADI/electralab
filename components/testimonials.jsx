import Image from "next/image";

const testimonials = [
	{
		comment: "More than happy with ELECTRALAB.",
		details: "Choaib ELMADI",
	},
	{
		comment: "The best customer service.",
		details: "Choaib ELMADI",
	},
	{
		comment: "We are 100% happy.",
		details: "Choaib ELMADI",
	},
];

const Testimonials = () => {
	return (
		<div
			className="w-full max-w-[1200px] mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 mn:grid-cols-3 dm:grid-cols-4 gap-2"
			id="testimonials"
		>
			<div className="rounded-sm min-h-[200px] relative overflow-hidden">
				<Image
					src="/testimonials-intro.jpg"
					width={200}
					height={300}
					draggable="false"
					alt="Testimonials"
					className="w-full h-full object-cover"
					priority={true}
				/>
				<p className="absolute top-2 left-3 font-semibold">Testimonials</p>
			</div>
			{testimonials.map(({ comment, details }, i) => (
				<div
					key={i}
					className="bg-hovery backdrop-blur-sm border border-hovery rounded-sm px-4 py-2 min-h-[200px] flex flex-col"
				>
					<Image
						src="/quote.png"
						alt="Quote Mark"
						width={25}
						height={25}
						draggable="false"
					/>
					<p className="text-medium font-bold">{comment}</p>
					<h1 className="mt-auto text-small font-semibold text-secondary">
						@
						<span className="bg-gradient-to-r from-purple to-pink bg-clip-text text-transparent">
							{details}
						</span>
					</h1>
				</div>
			))}
		</div>
	);
};

export default Testimonials;

import Image from "next/image";
import Link from "next/link";

const Header = ({ props: { banner, profile, title, link, user } }) => {
	return (
		<div className="flex flex-col items-center my-16">
			<h1 className="text-large font-semibold text-center">{title}</h1>
			<div className="flex gap-2 items-center my-3">
				<Image
					src={profile}
					width={30}
					height={30}
					alt={user}
					draggable="false"
					className="rounded-full"
				/>
				<p className="text-tiny text-secondary">
					By{" "}
					<Link
						href={link}
						target="_blank"
						className="relative bg-gradient-to-r from-purple to-pink text-transparent bg-clip-text after:absolute after:left-0 after:bottom-[1px] after:w-full after:h-[1px] after:bg-gradient-to-r after:from-purple after:to-pink font-semibold"
					>
						{user}
					</Link>
				</p>
			</div>
			<div className="w-full max-w-[600px] aspect-[2/1.2] overflow-hidden rounded-sm">
				<Image
					src={banner}
					width={600}
					height={240}
					alt={title}
					draggable="false"
					priority={true}
					className="w-full h-full object-cover"
				/>
			</div>
		</div>
	);
};

export default Header;

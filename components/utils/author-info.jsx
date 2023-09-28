import Image from "next/image";
import Link from "next/link";

const AuthorInfo = ({ props: { profile, description, link, name } }) => {
	return (
		<div className="hidden dm:flex flex-col items-center px-2">
			<Link href={link} target="_blank">
				<Image
					src={profile}
					width={80}
					height={80}
					alt={name}
					draggable="false"
					className="rounded-full"
				/>
			</Link>
			<Link
				href={link}
				target="_blank"
				className="my-1 text-tiny hover:underline"
			>
				{name}
			</Link>
			<p className="text-secondary text-tiny">{description}</p>
		</div>
	);
};

export default AuthorInfo;

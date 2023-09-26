import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link href="/" className="flex items-center gap-[6px] select-none w-max">
			<Image
				src="/logo.png"
				width={26}
				height={26}
				alt="ElectraLab Logo"
				draggable="false"
			/>
			<h1 className="hidden sm:block text-[21px] leading-[21px] font-bold uppercase">
				ElectraLab
			</h1>
		</Link>
	);
};

export default Logo;

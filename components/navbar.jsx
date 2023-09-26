import NavMenu from "./navmenu";
import Logo from "./logo";

const Navbar = () => {
	return (
		<div className="max-w-[1800px] mx-auto flex items-center justify-between py-4 px-2 md:px-4 dm:px-6">
			<Logo />
			<NavMenu />
		</div>
	);
};

export default Navbar;

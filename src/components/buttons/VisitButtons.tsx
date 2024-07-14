import { Icon } from "@iconify-icon/react/dist/iconify.js";
import { Link } from "react-router-dom";

interface VisitButtonProps {
	link: string;
	icon: string;
}

export default function VisitButtons(props: Readonly<VisitButtonProps>) {
	return (
		<Link
			to={props.link}
			className="w-12 h-12 bg-[#3E3E42] bg-opacity-50 rounded-xl flex justify-center items-center text-center text-white text-2xl duration-300 ease-out hover:text-[#007ACC] hover:rotate-12"
		>
			<Icon icon={props.icon} />
		</Link>
	);
}

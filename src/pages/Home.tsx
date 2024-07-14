import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import VisitButtons from "../components/buttons/VisitButtons";

export default function Home() {
	const [words] = useState([
		"Full-Stack Developer.",
		1500,
		"Software Engineer.",
		1500,
		"Back-End Developer.",
		1500,
		"Music Producer.",
		1500,
	]);

	return (
		<div className="w-full h-screen bg-gradient-to-b from-[#1E1E1E] to-[#252526] flex lg:p-20">
			<div className="flex-[65%] flex flex-col justify-center items-start">
				<h1 className="text-left text-5xl text-white font-medium font-poppins">
					Hi, I'm{" "}
					<u>
						<span className="text-[#007ACC] font-bold">Dustin</span>
					</u>
					.
				</h1>
				<p className="text-left text-3xl text-neutral-300 font-normal font-open-sans mt-2">
					I'm a{" "}
					<TypeAnimation
						sequence={words}
						wrapper="span"
						speed={50}
						repeat={Number.POSITIVE_INFINITY}
					/>
				</p>

				<div className="mt-20">
					<h2 className="text-left text-white text-2xl">Visit me at:</h2>
					<div className="mt-4 flex gap-2">
						<VisitButtons
							link="https://github.com/adhxabre"
							icon="teenyicons:github-solid"
						/>
						<VisitButtons
							link="https://linkedin.com/in/adhxabre"
							icon="ri:linkedin-fill"
						/>
						<VisitButtons
							link="https://instagram.com/patchoulegs"
							icon="mdi:instagram"
						/>
						<VisitButtons
							link="https://youtube.com/@NijiCafeShop"
							icon="ri:youtube-fill"
						/>
					</div>
				</div>
			</div>
			<div className="flex-[35%] relative flex justify-center">
				<img
					alt="patchouli-knowledge"
					className="w-full h-full object-cover object-center rounded-xl drop-shadow-md z-40 animate-slide-in opacity-0 [--slide-in-delay:200ms]"
					loading="lazy"
					src="/patchouli-knowledge/1.jpg"
				/>
				<div className="absolute bottom-4 bg-[#1E1E1E] bg-opacity-75 p-2 z-50 rounded-lg animate-slide-in opacity-0 [--slide-in-delay:300ms]">
					<h1 className="text-center text-xl text-white font-semibold font-poppins animate-slide-in opacity-0 [--slide-in-delay:500ms]">
						Patchouli Knowledge
					</h1>
					<p className="text-center text-md text-white font-light font-noto-sans-jp animate-slide-in opacity-0 [--slide-in-delay:700ms]">
						パチュリー・ノーレッジ
					</p>
				</div>
			</div>
		</div>
	);
}

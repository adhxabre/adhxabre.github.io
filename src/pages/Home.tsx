import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import VisitButtons from "../components/buttons/VisitButtons";
import { Link } from "react-router-dom";

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
		<>
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
						<h2 className="text-left text-white text-2xl font-bold font-poppins animate-slide-in opacity-0 [--slide-in-delay:100ms]">
							Visit me at:
						</h2>
						<div className="mt-4 flex gap-2">
							<VisitButtons
								link="https://github.com/adhxabre"
								icon="teenyicons:github-solid"
								className="animate-slide-in opacity-0 [--slide-in-delay:200ms]"
							/>
							<VisitButtons
								link="https://linkedin.com/in/adhxabre"
								icon="ri:linkedin-fill"
								className="animate-slide-in opacity-0 [--slide-in-delay:300ms]"
							/>
							<VisitButtons
								link="https://instagram.com/patchoulegs"
								icon="mdi:instagram"
								className="animate-slide-in opacity-0 [--slide-in-delay:400ms]"
							/>
							<VisitButtons
								link="https://youtube.com/@NijiCafeShop"
								icon="ri:youtube-fill"
								className="animate-slide-in opacity-0 [--slide-in-delay:500ms]"
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
			<div className="w-full h-screen bg-[url(/patchouli-knowledge/bg-1.jpg)] bg-cover bg-center bg-fixed">
				<div className="w-full h-full flex flex-col gap-4 p-20 relative backdrop-blur-sm backdrop-brightness-50">
					<h1 className="text-center text-4xl text-[#252526] font-bold font-poppins bg-white p-2 rounded-t-lg underline underline-offset-2">
						Who am I?{" "}
						<span className="font-noto-sans-jp font-normal">
							| ワタシハダレ
						</span>
					</h1>
					<p className="w-full h-full text-justify text-xl text-[#252526] font-normal font-nunito-sans bg-white p-2">
						Hi, I'm Abel Dustin Hyman S, mostly called Dustin, but everyone know
						me as Patchoulegs. I'm myself a Full-Stack Developer, Back-End
						Developer, and Software Engineer for 2+ years. I'm currently working
						as Software Engineer (API Developer) at{" "}
						<Link
							to="https://link.bahanatcw.com"
							className="font-semibold underline"
						>
							PT. Bahana TCW Investment Management
						</Link>{" "}
						and still going. Stack I use mostly React (Vite), NextJS, Go-Gin,
						Java Spring, and ElysiaJS (still learning), but eager to learn more
						libraries and languages. Most of my times ended on developing REST
						API, Web Application and automation, but I also develop things such
						as UI/UX designs and several portfolio Front-End/Back-End
						applications on my free time.
						<br />
						<br />
						There's not much things I can explain about me, sorry. But if you
						love to know more about me, please don't hesitate to visit my social
						media, you'll know a person when you know him well.
						<br />
						<br />
					</p>
					<img
						src="/patchouli-knowledge/2.jpg"
						alt="patchouli-knowledge"
						itemType="image/jpeg"
						className="absolute z-50 w-28 bottom-20 right-20"
					/>
				</div>
			</div>
		</>
	);
}

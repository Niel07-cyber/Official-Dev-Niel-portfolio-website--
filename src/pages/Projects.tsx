import React from "react";
import { Github, ExternalLink, ArrowLeft, Search, ChevronDown, Shuffle, Sun } from "lucide-react";
import { link } from "fs";
import BackToTopButton from "@/components/BackToTopButton";

const projects = [
	{
		title: "Code with Niel",
		subtitle: "hosted project",
		description: "A programming website with interactive courses and code terminals",
		lang: "TypeScript, Vite",
		logo: <Github size={36} />,
		info: "",
		exploreUrl: "https://github.com/Niel07-cyber/Code-Avec-Niel",
		demoUrl: "https://code-avec-niel.vercel.app/",
	},
	{
		title: "E-book Store - CodiBook",
		subtitle: "hosted project",
		description: "A book management system with Nest and NextJS.",
		lang: "JavaScript, TypeScript, TailwindCSS",
		logo: <Github size={36} />,
		info: "",
		exploreUrl: "https://github.com/Godfred-Owusu/Book_Management",
		demoUrl: "https://ebook-store-v3.vercel.app/books",
	},
	{
		title: "Quantum  Strict",
		subtitle: "code repository",
		description: "A full-stack, real-time Q&A platform combining quantum circuits, AI chat, IPFS pinning, and live updates.",
		lang: "Python, Javascript, TypeScript, OpenAI",
		logo: <Github size={36} />,
		info: "",
		exploreUrl: "https://github.com/Niel07-cyber/Quantum--Strict",
		demoUrl: "#",
	},
	{
		title: "Product Owner",
		subtitle: "project management tool",
		description: "A project management tool for product owners, featuring task tracking and team collaboration.",
		lang: "Vite, TypeScript, TailwindCSS",
		logo: <ExternalLink size={32} />,
		info: "",
		exploreUrl: "https://github.com/Niel07-cyber/ProductOwner--",
		demoUrl: "#",
	},
	{
		title: "Contacts App",
		subtitle: "code repository",
		description: "JavaFX-based contact management application built with Maven",
		lang: "Java, Sqlite",
		logo: <Github size={36} />,
		info: "",
		exploreUrl: "https://github.com/dm-mensavi/contacts_app",
		demoUrl: "#",
	},
	{
		title: "mines-game",
		subtitle: "web application",
		description: "A simple Minesweeper-inspired game built with Python and Tkinter. Avoid the mines and earn money by clicking safe boxes!",
		lang: "Python",
		logo: <ExternalLink size={32} />,
		info: "",
		exploreUrl: "https://github.com/Niel07-cyber/mines-game",
		demoUrl: "#",
	},
	{
		title: "Virtual-Doctor-HospitalMgtSystem",
		subtitle: "code repository",
		description: "Java-based application designed to provide virtual healthcare services, enabling patients to receive medical care remotely",
		lang: "Java",
		logo: <Github size={36} />,
		info: "",
		exploreUrl: "https://github.com/Niel07-cyber/Virtual-Doctor-HospitalMgtSystem",
		demoUrl: "#",
	},
	{
		title: "Pneumonia Detection",
		subtitle: "code repository",
		description: "A machine learning model to detect pneumonia from chest X-ray images.",
		lang: "Python, TensorFlow",
		logo: <Github size={36} />,
		info: "",
		exploreUrl: "https://github.com/Niel07-cyber/PNEUMONIA-MACHINE-LEARNING-MODEL",
		demoUrl: "#",
	},
];

export default function Projects() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/30 text-white relative overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-40 right-40 w-80 h-80 bg-gradient-to-l from-purple-600/10 to-pink-500/10 rounded-full blur-3xl"></div>
				<div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-teal-500/5 to-blue-500/5 rounded-full blur-2xl"></div>
			</div>

			{/* Hero Header Section */}
			<div className="relative px-4 sm:px-8 md:px-16 py-8 sm:py-16 z-10">
				<div className="mx-auto w-full max-w-7xl">
					{/* Top Controls */}
					<div className="flex items-center justify-between mb-12 sm:mb-20">
						<a
							href="/"
							className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:border-gray-400 transition-colors text-sm sm:text-base backdrop-blur-sm bg-black/20"
						>
							<ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
							<span>Back to homepage</span>
						</a>

						<button className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-800/50 hover:bg-gray-700/50 transition-colors backdrop-blur-sm">
							<Sun size={18} className="sm:w-5 sm:h-5 text-yellow-300" />
						</button>
					</div>

					{/* Main Header with Featured Text */}
					<div className="relative flex items-start">
						{/* Vertical "Featured" Text */}
						<div className="hidden lg:block mr-16 mt-8">
							<div className="writing-mode-vertical-rl text-orientation-mixed">
								<span className="text-lg font-normal text-gray-400 tracking-[0.3em] transform rotate-180 inline-block">
									Featured
								</span>
							</div>
						</div>

						{/* Main Title */}
						<div className="flex-1">
							<h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8 sm:mb-12">
								Projects &<br />
								<span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
									Experiments
								</span>
							</h1>
						</div>
					</div>

					{/* Search and Filter Controls */}
					<div className="flex flex-col md:flex-row gap-3 sm:gap-4 mt-8 sm:mt-12 max-w-4xl">
						{/* Search Input */}
						<div className="relative flex-1">
							<div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2">
								<Search size={18} className="sm:w-5 sm:h-5 text-gray-400" />
							</div>
							<input
								type="text"
								placeholder="Search 8 projects"
								className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-500 transition-colors text-sm sm:text-base"
							/>
						</div>

						{/* Filter Dropdown */}
						<div className="relative">
							<button className="flex items-center justify-between gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gray-500 transition-colors min-w-[180px] sm:min-w-[200px] text-sm sm:text-base">
								<span>Filter by platform</span>
								<ChevronDown size={16} className="sm:w-[18px] sm:h-[18px]" />
							</button>
						</div>

						{/* Randomize Button */}
						<button className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-white/90 backdrop-blur-sm text-black rounded-lg hover:bg-white transition-colors font-medium text-sm sm:text-base">
							<Shuffle size={16} className="sm:w-[18px] sm:h-[18px]" />
							<span>Randomize</span>
						</button>
					</div>
				</div>
			</div>

			{/* Projects Grid */}
			<div className="px-4 sm:px-8 md:px-16 pb-12 sm:pb-20 relative z-10">
				<div className="mx-auto w-full max-w-7xl">
					<div className="flex flex-col gap-4 sm:gap-8">
						{projects.map((proj, i) => (
							<div
								key={i}
								className="relative group bg-[#121217]/80 backdrop-blur-sm border border-[#22222A] rounded-xl sm:rounded-2xl flex flex-col sm:flex-row items-start sm:items-center px-4 sm:px-6 py-4 sm:py-7 shadow-lg transition-transform duration-200 hover:scale-[1.02] hover:border-brand-purple gap-3 sm:gap-0"
							>
								{/* Logo */}
								<div className="flex-shrink-0 sm:mr-5">
									<div className="bg-[#211F2A]/80 backdrop-blur-sm rounded-lg sm:rounded-xl w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center text-brand-purple border border-[#282837] shadow-sm">
										{React.cloneElement(proj.logo, { size: window.innerWidth < 640 ? 24 : 36 })}
									</div>
								</div>

								{/* Content */}
								<div className="flex-1 min-w-0">
									<div className="flex flex-col gap-1 sm:gap-1 md:gap-4 md:flex-row md:items-center">
										<div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
											<span className="text-lg sm:text-2xl md:text-3xl font-bold text-white leading-tight">
												{proj.title}
											</span>
											<span className="text-sm sm:text-base font-normal text-gray-400">
												{proj.subtitle}
											</span>
										</div>
										<span className="hidden md:inline text-gray-500">|</span>
										<span className="text-sm sm:text-lg text-gray-200 leading-relaxed">
											{proj.description}
										</span>
									</div>
									<div className="mt-1 sm:mt-2">
										<span className="font-semibold text-xs sm:text-sm text-brand-purple">{proj.lang}</span>
										{proj.info && (
											<span className="text-xs sm:text-sm text-gray-400 ml-2">{proj.info}</span>
										)}
									</div>
								</div>

								{/* Actions */}
								<div className="flex gap-2 sm:gap-3 flex-row sm:flex-col md:flex-row items-stretch sm:items-end md:items-center w-full sm:w-auto sm:ml-6 mt-3 sm:mt-0">
									<a
										href={proj.exploreUrl}
										className="flex-1 sm:flex-none border border-gray-500 bg-transparent rounded-md px-3 sm:px-4 py-2 text-xs sm:text-base text-white hover:bg-[#191932] hover:border-brand-purple transition-colors text-center"
										target="_blank"
										rel="noopener noreferrer"
										tabIndex={0}
									>
										&lt;/&gt; Explore source
									</a>
									<a
										href={proj.demoUrl}
										className="flex-1 sm:flex-none bg-gray-100 text-gray-900 font-semibold rounded-md px-3 sm:px-4 py-2 text-xs sm:text-base hover:bg-brand-purple hover:text-white transition-colors flex items-center justify-center gap-1"
										target="_blank"
										rel="noopener noreferrer"
										tabIndex={0}
									>
										<svg width="14" height="14" className="sm:w-[18px] sm:h-[18px] inline mr-1" fill="none">
											<path d="M6 4l8 5-8 5V4z" fill="currentColor" />
										</svg>
										Run demo
									</a>
								</div>
								{/* Hover effect outline border */}
								<span className="pointer-events-none absolute -inset-1 rounded-xl sm:rounded-2xl border-2 border-transparent transition group-hover:border-brand-purple" />
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Back to Top Button */}
			<BackToTopButton />
		</div>
	);
}

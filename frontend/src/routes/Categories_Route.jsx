import { Link } from "react-router-dom";
import { Button } from "@mui/joy";

export default function Categories() {
	const categories = [
		{ name: "Snow", image: "/images/cat/ski.webp" },
		{ name: "Kayak", image: "/images/cat/kayak.webp" },
		{ name: "Bike", image: "/images/cat/bike.webp" },
		{ name: "Fly", image: "/images/cat/fly.webp" },
		{ name: "Skate", image: "/images/cat/skate.webp" },
		{ name: "Surf", image: "/images/cat/surf.webp" },
		{ name: "Climb", image: "/images/cat/climb.webp" },
	];

	return (
		<>
			<div className="wrapper">
				<h1 className="text-3xl mt-12 mb-4 font-climate justify-center items-center text-center font-bold text-(--purple-white) font-kanit drop-shadow-[3px_3px_3px_var(--purple-dark)]">
					Explore Our Categories!
				</h1>
				<div className="flex flex-col md:flex-row md:flex-wrap justify-center p-8 gap-8 my-8">
					{categories.map((category) => (
						<Link key={category.name} to={`/categories/${category.name}`}>
							<div className="relative w-64 h-64 mx-auto mb-4">
								<img
									src={category.image}
									className="w-full h-full rounded-full object-cover drop-shadow-[1px_5px_4px_var(--purple-dark)]"
									alt={category.name}
								/>
								<h2 className="absolute inset-0 flex items-center justify-center  font-bold font-climate text-(--orange-main) text-6xl z-10 drop-shadow-[1px_5px_4px_var(--purple-dark)]">
									{category.name.toUpperCase()}
								</h2>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

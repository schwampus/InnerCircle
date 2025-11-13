import { Link } from "react-router-dom";
import { Button } from "@mui/joy";

export default function Faq() {
	return (
		<>
			<div class="wrapper">
				<div className="bg-(--orange-white) flex flex-col text-6xl font-black justify-center items-center text-center">
					<h1 className="font-kanit font-bold text-(--orange-main) my-8">
						{" "}
						F.A.Q
					</h1>
					<img src="/logo-white.png" className="h-30 w-30  mb-4" />
				</div>

				<div className="bg-(--purple-dark) w-full h-64 text-(--orange-main) px-8 py-10 ">
					<p className="py-2">
						An athelete has a feed where they can post annoncements. A fan can
						find atheletes and subscribe to them with a monthly monetary “gift”.
					</p>
					<p className="py-2">
						There are 3 membership tiers: bronze, silver and gold. Only fans of
						an idol can view exclusive content and fans see the content
						available for the respective tier and lower.{" "}
					</p>
				</div>
			</div>
		</>
	);
}

import { Link } from "react-router-dom";
import { Button } from "@mui/joy";

export default function Categories() {
	return (
		<>
			<div id="wrapper">
				<div className="flex text-3xl my-4 font-climate justify-center items-center text-center">
					CATEGORIES
				</div>
				<div className="flex flex-wrap justify-center p-8 gap-8 my-8">
					<img
						src="https://images.unsplash.com/photo-1455264646464-fb8b45ab4c57?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format"
						className="w-34 h-34 rounded-full mx-auto mb-4"
					/>
					<img
						src="https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						className="w-34 h-34 rounded-full mx-auto mb-4"
					/>
					<img
						src="https://images.unsplash.com/photo-1455264646464-fb8b45ab4c57?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format"
						className="w-34 h-34 rounded-full mx-auto mb-4"
					/>
					<img
						src="https://i.imgur.com/KwqolLd.png"
						className="w-34 h-34 rounded-full mx-auto mb-4"
					/>
					<img
						src="https://images.unsplash.com/photo-1673552435410-d114bb408e91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						className="w-34 h-34 rounded-full mx-auto mb-4"
					/>

					<img
						src="https://images.pexels.com/photos/24742693/pexels-photo-24742693.jpeg"
						className="w-34 h-34 rounded-full mx-auto mb-4"
					/>
					<img src="" className="w-44 h-44 rounded-full mx-auto mb-4" />
				</div>

				<div className="bg-(--purple-dark) w-full h-64 text-(--orange-main) px-8 py-10">
					<h2 className="font-bold">More about the circles:</h2>
				</div>
			</div>
		</>
	);
}

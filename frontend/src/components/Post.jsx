import Avatar from "./Avatar.jsx";

export default function Post(props) {
	return (
		<div
			id="post-wrapper"
			className="flex flex-col m-4 bg-(--purple-light) p-2 rounded-lg shadow-md"
		>
			<Avatar
				name={""}
				tierColor={props.tier.toLowerCase()}
				src={props.imgsrc}
				className="self-start ml-[-14px] mt-[-14px] relative z-50  "
			/>

			<div
				id="post-content"
				className=" bg-(--orange-lighter)  rounded-md mt-[-60px] relative z-10"
			>
				<iframe
					className="w-full aspect-video rounded-t-md"
					src="https://www.youtube.com/embed/OZOgWD-FHPA?si=UoWTz0868bhHTbRd&amp;start=8"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
			<h3>Post title</h3>
			<p>
				post text Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
				ducimus sapiente aperiam ....
			</p>
			<button className="self-end mr-[-12px]  bg-(--purple-darker) text-(--orange-main) rounded-md px-4 py-2  hover:bg-(--purple-darker)">
				{" "}
				TO POST{" "}
			</button>
		</div>
	);
}

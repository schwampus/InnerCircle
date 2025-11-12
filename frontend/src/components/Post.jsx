import { Link } from "react-router-dom";
import Avatar from "./Avatar.jsx";

export default function Post(props) {
  let textWrap = "";
  if (!props.video && !props.postimg) {
    textWrap = "mt-8";
  }

  let lockedPost;
  if (props.blur) {
    lockedPost = "blur-sm";
  }

  return (
    <div
      id="post-wrapper"
      className="flex flex-col w-full m-4 bg-(--purple-light) p-2 rounded-lg shadow-md"
    >
      <Link to={`/circle/${props.circleId}/${props.slug}`} className="self-start ml-[-14px] mt-[-14px] relative z-50">
        <Avatar
          name={""}
          tierColor={props.tier}
          src={props.imgsrc}
          // className="self-start ml-[-14px] mt-[-14px] relative z-50"
        />
      </Link>

      <div
        id="post-content"
        className={`bg-(--orange-lighter)  rounded-md mt-[-60px] relative z-10 ${lockedPost}`}
      >
        {props.video ? (
          <iframe
            className="w-full aspect-video rounded-t-md"
            src={`https://www.youtube.com/embed/${props.video}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : (
          <img src={props.postimg} />
        )}
      </div>
      <h3
        className={`text-(--orange-main) text-semibold text-xl pt-4 pb-2 ${textWrap} ${lockedPost}`}
      >
        {props.title}
      </h3>
      <p className={`text-(--orange-white) py-2 ${lockedPost}`}>{props.text}</p>
      {!props.blur && (
        <button className="self-end mr-[-12px]  bg-(--purple-darker) text-(--orange-main) rounded-md px-4 py-2  hover:bg-(--purple-darker)">
          {" "}
          TO POST{" "}
        </button>
      )}
    </div>
  );
}

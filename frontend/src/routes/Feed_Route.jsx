import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@mui/joy";
import Post from "../components/Post.jsx";

export default function Feed() {
  const [circles, setCircles] = useState([]);
  const userId = "ab71881f-dc4f-4481-a689-55e506679a5e";
  // const userId = '';
  // const { userId } = useUser();

  useEffect(() => {
    if (userId) {
      fetch(`/api/user-circles/feed/${userId}`)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setCircles(result);
        });
    } else {
      //TODO: fetch posts and display blurred
    }
  }, []);

  return (
    <>
      <div className="wrapper min-h-svh">
        <h1 className="text-3xl text-center font-black font-kanit py-8">
          WHO'S UP TO WHAT?
        </h1>

        {circles.length < 1 ? (
          <section className="flex flex-col items-center justify-center gap-6 w-[20rem] h-[20rem] rounded-full bg-(--purple-dark) px-4 my-10 mx-auto">
            <h2 className="font-semi-bold text-2xl text-center text-(--orange-main)">
              You aren't in a circle yet. Enter now?
            </h2>
            <Button variant="solid" color="secondary">
              Explore the circles
            </Button>
          </section>
        ) : (
          <div className="flex flex-col bg-(--purple-dark) text-(--orange-main) px-8 py-10">
            {circles.map((p) => {
              const mediaProps = {};
              if (p.post_content) {
                if (p.post_content.includes("image")) {
                  mediaProps.postimg = p.post_content;
                } else {
                  mediaProps.video = p.post_content;
                }
              }

              return (
                <Post
                  key={p.post_id}
                  title={p.post_title}
                  text={p.post_text}
                  tier={p.post_tier}
                  imgsrc={p.circle_avatar}
                  {...mediaProps}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

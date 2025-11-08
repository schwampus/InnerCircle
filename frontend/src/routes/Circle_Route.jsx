import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import Avatar from "../components/Avatar";
import Post from "../components/Post";
import AuthModal from "../components/AuthModal";

// // Use both ID and slug for best practice
// navigate(`/circle/${circle_id}/${circle_slug}`);
// URL: /circle/123/athletes-united

export default function CirclePage() {
  //   const { circleId, _circleSlug } = useParams;
  const circleId = 5;
  const [circleName, setCircleName] = useState("Candide Thovex");
  const [circleAvatar, setCircleAvatar] = useState(null);
  const [circleBio, setCircleBio] = useState("");
  const [circlePosts, setCirclePosts] = useState([]);
  const [isMember, setIsMember] = useState(false);
  const [userTier, setUserTier] = useState(null);
  const { userId } = useUser();

  useEffect(() => {
    fetch(`/api/circles/${circleId}`)
      .then((response) => response.json())
      .then((result) => {
        setCircleName(result[0].circle_name);
        setCircleAvatar(result[0].circle_avatar);
        setCircleBio(result[0].circle_bio);
      });
  }, []);

  useEffect(() => {
    fetch(`/api/circles/${circleId}/fans`)
      .then((response) => response.json())
      .then((result) => {
        const circleMember = result.find(({ uc_user_id }) => {
          return uc_user_id === userId;
        });
        if (circleMember) {
          setIsMember(true);
          setUserTier(circleMember.uc_circle_tier);
        }
      });
  }, [circleId, userId]);

  useEffect(() => {
    fetch(`/api/posts/all/${circleId}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCirclePosts(result);
      });
  }, [circleId]);

  const handleMembership = (chosenTier) => {
    setIsMember(true);
    setUserTier(chosenTier);
  };

  return (
    <article className="wrapper-dark py-2">
      <section className="px-6 py-4 font-kanit">
        <Avatar src={circleAvatar} className="w-lg mx-auto" />
        <h1 className="text-3xl text-center text-(--orange-main) py-8">
          {circleName}
        </h1>
        <p className="text-sm text-(--purple-white)">
          In the circle: 12k members
        </p>
        <p className="text-base text-(--orange-white) py-6">{circleBio}</p>
        {!isMember && (
          <div className="bg-(--purple-light) py-2 px-6 rounded-lg shadow-md">
            <h2 className="text-base text-(--purple-white) py-4">
              Become a part of {circleName} circle to access the exclusive
              content
            </h2>
            <AuthModal type="join" handleJoin={handleMembership} />
          </div>
        )}
      </section>
      <section className="wrapper py-6">
        <h2 className="text-2xl text-left text-(--orange-main) py-4 px-4">
          What's {circleName} up to?
        </h2>
        {circlePosts &&
          circlePosts.map((p) => {
            const mediaProps = {};
            if (p.post_content) {
              if (p.post_content.includes("image")) {
                mediaProps.postimg = p.post_content;
              } else {
                mediaProps.video = p.post_content;
              }
            }

            // if(p.post_tier ) TODO: write a tier check somehow

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
      </section>
    </article>
  );
}

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
  const circleId = 26;
  const [circleName, setCircleName] = useState("Candide Thovex");
  const [circleAvatar, setCircleAvatar] = useState(null);
  const [circleBio, setCircleBio] = useState("");
  const [circlePosts, setCirclePosts] = useState([]);
  const [isMember, setIsMember] = useState(false);
  const [userTier, setUserTier] = useState(null);
  const { userId } = useUser();

  useEffect(() => {
    fetch(`api/circles/${circleId}`)
      .then((response) => response.json())
      .then((result) => {
        setCircleName(result.circle_name);
        setCircleAvatar(result.circle_avatar);
        setCircleBio(result.circle_bio);
      });
  });

  useEffect(() => {
    fetch(`api/circles/${circleId}/fans`)
      .then((response) => response.json())
      .then((result) => {
        const circleMember = result.find(({ uc_user_id }) => {
          uc_user_id === userId;
        });
        if (circleMember) {
          setIsMember(true);
          setUserTier(circleMember.uc_circle_tier);
        }
      });
  });

  useEffect(() => {
    fetch(`api/posts/all/${circleId}`)
      .then((response) => response.json())
      .then((result) => {
        setCirclePosts(result);
      });
  });

  const handleMembership = (chosenTier) => {
    setIsMember(true);
    setUserTier(chosenTier);
  };

  return (
    <article>
      <Avatar src={circleAvatar} />
      <h1>{circleName}</h1>
      <p>In the circle: 12k members</p>
      <p>{circleBio}</p>
      {!isMember && (
        <div>
          <h2>
            Become a part of {circleName} circle to access the exclusive content
          </h2>
          <AuthModal type="join" />
        </div>
      )}
      <h2>What's {circleName} up to?</h2>
      <section>
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

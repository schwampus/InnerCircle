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
  //   const { circleId, _circleSlug } = useParams();
  const circleId = 5;
  const [circleName, setCircleName] = useState("Candide Thovex");
  const [circleAvatar, setCircleAvatar] = useState(null);
  const [circleBio, setCircleBio] = useState("");
  const [circleMembers, setCircleMembers] = useState("");
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
				setCircleMembers(result[0].circle_members);
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
					setUserCircleId(circleMember.uc_id);
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

	const handleMembership = (chosenTier, ucId) => {
		setIsMember(true);
		setUserTier(chosenTier);
		setUserCircleId(ucId);
	};

	const cancelMembership = () => {
		setIsMember(false);
		setUserTier(null);
		setUserCircleId(null);
	};

	const shouldBlur = (postTier, userTier) => {
		if (!userTier) return false;
		const tierHierarchy = { Bronze: 1, Silver: 2, Gold: 3 };
		return tierHierarchy[userTier] < tierHierarchy[postTier];
	};

	return (
		<article className="wrapper-dark py-2">
			<section className="px-6 py-8 font-kanit flex flex-col items-center">
				<Avatar src={circleAvatar} variant="large" />
				<h1 className="text-3xl text-center text-(--orange-main) py-6">
					{circleName}
				</h1>
				<p className="text-sm text-(--purple-white)">
					In the circle: {circleMembers} members
				</p>
				<p className="text-base text-(--orange-white) py-6">{circleBio}</p>
				{!isMember ? (
					<div className="flex flex-col items-center bg-(--purple-white) py-8 px-6 rounded-lg shadow-md">
						<h2 className="text-lg text-(--purple-dark) pb-6">
							Become a part of {circleName} circle to access the exclusive
							content
						</h2>
						<AuthModal
							circleName={circleName}
							circleId={circleId}
							modalType="join"
							handleJoin={handleMembership}
							userId={userId}
						/>
					</div>
				) : (
					<div className="flex flex-col items-center bg-(--purple-white) py-8 px-6 rounded-lg shadow-md">
						<h2 className="text-lg text-(--purple-dark)">
							You are a member of {circleName} circle
						</h2>
						<h3 className="text-xl font-bold text-(--orange-darker) pb-3">
							{userTier} tier
						</h3>
						<AuthModal
							circleName={circleName}
							modalType="manage"
							handleCancel={cancelMembership}
							ucId={userCircleId}
							userId={userId}
							userTier={userTier}
						/>
					</div>
				)}
			</section>
			<section className="wrapper py-6">
				<h2 className="font-semibold text-2xl text-left text-(--purple-darker) py-4 px-4">
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

						let blurred = shouldBlur(p.post_tier, userTier);

            return (
              <Post
                key={p.post_id}
                title={p.post_title}
                text={p.post_text}
                tier={p.post_tier}
                imgsrc={circleAvatar}
                blur={blurred}
                {...mediaProps}
              />
            );
          })}
      </section>
    </article>
  );
}

import { useUser } from "../hooks/useUser";
import { Button } from "@mui/joy";
import { Link } from "react-router-dom";
import AuthModal from "../components/AuthModal";

export default function Home() {
  const { userId } = useUser();

  return (
    <>
      <div id="wrapper">
        <div
          id="herocontent"
          className="bg-[url('/ic-temp.webp')] 
    sm:bg-[url('/ic-temp-sm.webp')] bg-contain bg-center bg-no-repeat
    h-[30dvh] sm:h-[30dvh]
    w-full
    flex flex-col justify-center items-center text-center
    overflow-hidden"
        >
          <h1 className="text-6xl font-climate text-(--orange-main) ">
            INNER
          </h1>
          <h1 className="text-6xl font-climate text-(--purple-main) ">
            CIRCLE
          </h1>
        </div>
        <div className="flex bg-(--purple-lighter) w-full justify-around gap-2 px-8 py-8">
          <Button variant="solid" color="secondary">
            <Link to="/categories">EXPLORE CIRCLES</Link>
          </Button>
          {!userId && <AuthModal modalType={"signup"} />}
        </div>
        <div className="bg-(--purple-dark) w-full h-64 text-(--orange-main) px-8 py-10">
          <h2 className="font-[400] text-2xl text-center px-8">
            Be first to know about your idols upcoming adventures ❤️‍🔥
          </h2>
          {/* <img src="" alt="" /> TODO: BLUR UNBLUR POST GIF */}
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import { Button, Drawer } from "@mui/joy";
import Signup from "../components/Signup";
import Login from "../components/Login";

export default function Home() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignupOpen] = useState(false);

  const toggleLoginDrawer = (inOpen) => (event) => {
    if (
      event?.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLoginOpen(inOpen);
  };

  const toggleSignupDrawer = (inOpen) => (event) => {
    if (
      event?.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSignupOpen(inOpen);
  };

  const closeSignup = () => setSignupOpen(false);
  const closeLogin = () => setLoginOpen(false);

  const switchToSignup = () => {
    setLoginOpen(false);
    setSignupOpen(true);
  };

  const switchToLogin = () => {
    setSignupOpen(false);
    setLoginOpen(true);
  };

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

        <div className="flex bg-(--purple-lighter) w-full justify-center gap-16 px-8 py-8">
          <Button
            onClick={toggleLoginDrawer(true)}
            variant="solid"
            color="primary"
          >
            LOG IN
          </Button>
          <Button
            onClick={toggleSignupDrawer(true)}
            variant="solid"
            color="primary"
          >
            SIGN UP
          </Button>
        </div>
        <section>
          <Drawer
            anchor="bottom"
            onClose={toggleLoginDrawer(false)}
            open={loginOpen}
            size="md"
          >
            <Login toggleClose={closeLogin} toggleSignup={switchToSignup} />
          </Drawer>
          <Drawer
            anchor="bottom"
            onClose={toggleSignupDrawer(false)}
            open={signUpOpen}
            size="lg"
          >
            <Signup toggleClose={closeSignup} toggleLogin={switchToLogin} />
          </Drawer>
        </section>

        <div className="bg-(--purple-dark) w-full h-64 text-(--orange-main) px-8 py-10">
          <h2 className="font-bold">More about the circles:</h2>
        </div>
      </div>
    </>
  );
}

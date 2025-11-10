import { useState } from "react";
import { Button, Drawer } from "@mui/joy";
import Signup from "../components/Signup";
import Login from "../components/Login";
import JoinCircle from "./JoinCircle";

const AuthModal = ({ authType, type, circleName, isMember }) => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignupOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);

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

  const toggleJoinDrawer = (inOpen) => (event) => {
    if (
      event?.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setJoinOpen(inOpen);
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

  const switchToJoin = () => {
    setLoginOpen(false);
    setJoinOpen(true);
  };

  return (
    <section>
      {authType === "login" && (
        <Button
          onClick={toggleLoginDrawer(true)}
          variant="outlined"
          color="primary"
        >
          LOG IN
        </Button>
      )}
      {authType === "signup" && (
        <Button
          onClick={toggleSignupDrawer(true)}
          variant="solid"
          color="primary"
        >
          SIGN UP
        </Button>
      )}
      {type === "join" && (
        <Button
          onClick={toggleSignupDrawer(true)}
          variant="solid"
          color="secondary"
        >
          STEP INSIDE
        </Button>
      )}
      <section>
        <Drawer
          anchor="bottom"
          onClose={toggleLoginDrawer(false)}
          open={loginOpen}
          size="md"
        >
          <Login
            toggleClose={closeLogin}
            toggleSignup={switchToSignup}
            toggleJoin={switchToJoin}
            type={type}
          />
        </Drawer>
        <Drawer
          anchor="bottom"
          onClose={toggleSignupDrawer(false)}
          open={signUpOpen}
          size="lg"
        >
          <Signup toggleClose={closeSignup} toggleLogin={switchToLogin} />
        </Drawer>
        <Drawer
          anchor="bottom"
          onClose={toggleJoinDrawer(false)}
          open={joinOpen}
          size="lg"
        >
          <JoinCircle circleName={circleName} type="join" isMember={isMember} />
        </Drawer>
      </section>
    </section>
  );
};

export default AuthModal;

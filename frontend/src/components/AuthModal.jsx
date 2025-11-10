import { useState } from "react";
import { Button, Drawer } from "@mui/joy";
import Signup from "../components/Signup";
import Login from "../components/Login";
import JoinCircle from "./JoinCircle";

const AuthModal = ({
  modalType,
  circleName,
  circleId,
  userId,
  userTier,
  ucId,
  handleJoin,
  handleCancel,
}) => {
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
      {modalType === "login" && (
        <Button
          onClick={toggleLoginDrawer(true)}
          variant="outlined"
          color="primary"
        >
          LOG IN
        </Button>
      )}
      {modalType === "signup" && (
        <Button
          onClick={toggleSignupDrawer(true)}
          variant="solid"
          color="primary"
        >
          SIGN UP
        </Button>
      )}
      {modalType === "join" && (
        <Button
          onClick={userId ? toggleJoinDrawer(true) : toggleSignupDrawer(true)}
          variant="solid"
          color="secondary"
        >
          STEP INSIDE
        </Button>
      )}
      {modalType === "manage" && (
        <Button
          onClick={toggleJoinDrawer(true)}
          variant="outlined"
          color="primary"
        >
          MANAGE MEMBERSHIP
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
            modalType={modalType}
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
          size={modalType === "join" ? "lg" : "sm"}
        >
          <JoinCircle
            circleName={circleName}
            circleId={circleId}
            modalType={modalType}
            handleMembership={handleJoin}
            cancelMembership={handleCancel}
            userId={userId}
            userTier={userTier}
            ucId={ucId}
          />
        </Drawer>
      </section>
    </section>
  );
};

export default AuthModal;

import { useState } from "react";
import { Button, Drawer } from "@mui/joy";
import Signup from "../components/Signup";
import Login from "../components/Login";

const AuthModal = ({ authType }) => {
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
    <section>
      {authType === "login" ? (
        <Button
          onClick={toggleLoginDrawer(true)}
          variant="outlined"
          color="primary"
        >
          LOG IN
        </Button>
      ) : (
        <Button
          onClick={toggleSignupDrawer(true)}
          variant="solid"
          color="primary"
        >
          SIGN UP
        </Button>
      )}
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
    </section>
  );
};

export default AuthModal;

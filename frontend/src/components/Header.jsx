import { Link } from "react-router-dom";
import { Box, Button, Drawer, IconButton, ModalClose, Menu } from "@mui/joy";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from '../hooks/useUser'
import Login from "./Login";
import Signup from "./Signup";

export default function Header() {
  const { userId, logout } = useUser();
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signUpOpen, setSignupOpen] = useState(false);

  const navigate = useNavigate();

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

  const handleLinkClick = () => {
    setOpen(false);
  };

  const Logout = () => {
    logout();
    setOpen(false);
    navigate("/");
  };

  return (
    <>
      <div className="flex justify-between items-center px-6 bg-(--purple-white) h-18">
        <div>
          <IconButton
            variant="outlined"
            color="neutral"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </IconButton>

          <Drawer open={open} onClose={() => setOpen(false)}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                ml: "auto",
                mt: 1,
                mr: 2,
              }}
            >
              <ModalClose id="close-icon" sx={{ position: "initial" }} />
            </Box>
            <ul className="flex text-xl bg-(--purple-dark) h-full flex-col text-center gap-12 pt-18 mt-[-40px] text-(--orange-main) font-kanit font-bold">
              <li>
                <Link to="/" onClick={handleLinkClick}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/feed" onClick={handleLinkClick}>
                  FEED
                </Link>
              </li>
              {userId && (
                <li>
                  <Link to="/profile" onClick={handleLinkClick}>
                    PROFILE
                  </Link>
                </li>
              )}
              <li>
                <Link to="/categories" onClick={handleLinkClick}>
                  CATEGORIES
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleLinkClick}>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={handleLinkClick}>
                  FAQ
                </Link>
              </li>
              <li>
                {userId && (
                  <Button
                    onClick={Logout}
                    variant="outlined"
                    color="secondary"
                    sx={{ mt: 20 }}
                  >
                    LOG OUT
                  </Button>
                )}
              </li>
            </ul>

            <p className="pb-12 text-sm text-center bg-(--purple-dark) text-(--purple-lighter)">
              all rights reserved © FEDFELT
            </p>
          </Drawer>
        </div>

        {!userId && (
          <section>
            <Button
              onClick={toggleLoginDrawer(true)}
              variant="outlined"
              color="primary"
            >
              LOG IN
            </Button>
            <Drawer
              anchor="bottom"
              onClose={toggleLoginDrawer(false)}
              open={loginOpen}
              size="md"
            >
              <Login
                toggleClose={closeLogin}
                toggleSignup={switchToSignup}
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
          </section>
        )}
      </div>
    </>
  );
}

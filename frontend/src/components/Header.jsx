import { Link } from "react-router-dom";
import { Box, Button, Drawer, IconButton, ModalClose } from "@mui/joy";
import { MenuOutlined } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import AuthModal from "./AuthModal";

export default function Header() {
  const { userId, logout } = useUser();
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

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
      <div className="grid grid-cols-3 items-center px-6 bg-(--purple-white) h-18">
        <div>
          <IconButton
            variant="outlined"
            color="primary"
            onClick={() => setOpen(true)}
          >
            <MenuOutlined />
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

        <div className="flex justify-center">
          <Link to="/">
            <img src="/favicon.svg" className="w-12 h-12" alt="Logo" />
          </Link>
        </div>

        <div className="flex justify-end">
          {!userId && <AuthModal modalType={"login"} />}
        </div>
      </div>
    </>
  );
}

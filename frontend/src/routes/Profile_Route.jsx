import { Link, useNavigate } from "react-router-dom";

import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Button,
} from "@mui/joy";
import Avatar from "../components/Avatar";
import { useUser } from "../hooks/useUser";

import { useState } from "react";
import { useEffect } from "react";
import Divider from "@mui/joy/Divider";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import DialogActions from "@mui/joy/DialogActions";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

export default function Profile() {
  const { userId, logout } = useUser();

  const [userData, setUserData] = useState(null);
  const [newUsername, setNewUsername] = useState("");
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newPaymentMethod, setNewPaymentMethod] = useState("");
  const [hasChanges, setHasChanges] = useState(false);
  const [open, setOpen] = useState(false);

  const [myCircles, setMyCircles] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setNewUsername(data.users_name);
        setNewUserEmail(data.users_email);
        setNewPaymentMethod(data.users_payment);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    fetch(`/api/user-circles/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setMyCircles(data);
      });
  }, [userId]);

  useEffect(() => {
    if (!userData) return;

    const usernameChanged = newUsername !== userData.users_name;
    const emailChanged = newUserEmail !== userData.users_email;
    const paymentChanged = newPaymentMethod !== userData.users_payment;

    setHasChanges(usernameChanged || emailChanged || paymentChanged);
  }, [newUsername, newUserEmail, newPaymentMethod, userData]);

  async function handleSaveChanges() {
    const updates = {};

    if (newUsername !== userData.users_name) {
      updates.userName = newUsername;
    }
    if (newUserEmail !== userData.users_email) {
      updates.userEmail = newUserEmail;
    }
    if (newPaymentMethod !== userData.users_payment) {
      updates.userPayment = newPaymentMethod;
    }

    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      });

      if (response.ok) {
        const updatedData = await response.json();
        setUserData(updatedData);
        setHasChanges(false);
        console.log("Nya uppgifter skickades till databasen");
      } else {
        alert("Nåt gick fel vid ändringen av personuppgite");
      }
    } catch (error) {
      console.error("Error saving changes:", error);
      alert("Error saving changes");
    }
  }
  async function handleDeleteUser() {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        logout();
        setOpen(false);
        navigate("/");

        console.log("Användare borttagen");
      } else {
        alert("Nåt gick fel vid borttagning");
      }
    } catch (error) {
      console.error("Error saving changes:", error);
      alert("Error saving changes");
    }
  }

  return (
    <>
      <div className="bg-(--purple-dark) min-h-screen">
        <div
          id="profile-hero"
          className="flex flex-col self-start items-center justify-around text-2xl font-black w-full bg-(--purple-main) text-(--orange-lighter)  text-center"
        >
          <h2> Welcome Back {userData?.users_name}!</h2>
          <div className="flex items-end">
            <img className="h-40 w-40" src="/avatar1.webp" />
            {/* removed change avatar functionality for now		<svg
							className="ml-[-22px]"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="lucide lucide-camera-icon lucide-camera"
						>
							<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z" />
							<circle cx="12" cy="13" r="3" />
						</svg> */}
          </div>
        </div>

        <div className="flex justify-center items-center bg-(--purple-lighter) w-full p-8 ">
          {userData && (
            <AccordionGroup className="bg-(--purple-dark) max-w-75 ">
              <Accordion
                sx={{
                  "&.Mui-expanded": {
                    backgroundColor: "var(--orange-main)",
                    color: "var(--orange-lighter)",
                  },
                }}
              >
                <AccordionSummary
                  sx={{
                    color: "var(--orange-main)",
                    backgroundColor: "var(--purple-dark)",
                  }}
                >
                  Change Personal Details
                </AccordionSummary>
                <AccordionDetails>
                  <label className="profile-label">Change your name:</label>
                  <input
                    className="profile-input"
                    placeholder={userData?.users_name}
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                </AccordionDetails>
                <AccordionDetails>
                  <label className="profile-label">Change your email:</label>
                  <input
                    className="profile-input"
                    placeholder={userData?.users_email}
                    value={newUserEmail}
                    onChange={(e) => setNewUserEmail(e.target.value)}
                  />
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  "&.Mui-expanded": {
                    backgroundColor: "var(--orange-main)",
                    color: "var(--orange-lighter)",
                  },
                }}
              >
                <AccordionSummary
                  sx={{
                    color: "var(--orange-main)",
                    backgroundColor: "var(--purple-dark)",
                  }}
                >
                  Change Payment Method
                </AccordionSummary>
                <AccordionDetails>
                  <label className="profile-label">Select new method:</label>
                  <select
                    className="profile-input"
                    value={newPaymentMethod}
                    onChange={(e) => setNewPaymentMethod(e.target.value)}
                  >
                    <option value="VISA">Visa</option>
                    <option value="MASTERCARD">MasterCard</option>
                    <option value="KLARNA">Klarna</option>
                  </select>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  "&.Mui-expanded": {
                    backgroundColor: "var(--orange-white)",
                    color: "var(--orange-lighter)",
                  },
                }}
              >
                <AccordionSummary
                  sx={{
                    color: "var(--orange-main)",
                    backgroundColor: "var(--purple-dark)",
                  }}
                >
                  Remove Your Account
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex justify-center m-4">
                    <Button
                      onClick={() => setOpen(true)}
                      color="danger"
                      variant="solid"
                    >
                      Remove Account
                    </Button>
                    <Modal open={open} onClose={() => setOpen(false)}>
                      <ModalDialog variant="outlined" role="alertdialog">
                        <DialogTitle>
                          <WarningRoundedIcon />
                          Are you sure?
                        </DialogTitle>
                        <Divider />
                        <DialogContent>
                          Are you sure you want to remove your account?
                        </DialogContent>
                        <DialogActions>
                          <Button
                            variant="solid"
                            color="danger"
                            onClick={handleDeleteUser}
                          >
                            Remove Account
                          </Button>
                          <Button
                            variant="plain"
                            color="neutral"
                            onClick={() => setOpen(false)}
                          >
                            Cancel
                          </Button>
                        </DialogActions>
                      </ModalDialog>
                    </Modal>
                  </div>
                </AccordionDetails>
              </Accordion>
              {hasChanges && (
                <div className="flex justify-center m-4">
                  <Button
                    onClick={handleSaveChanges}
                    color="secondary"
                    variant="outlined"
                  >
                    Save Changes
                  </Button>
                </div>
              )}
            </AccordionGroup>
          )}
        </div>

        <div className="flex flex-col justify-center items-center bg-(--purple-dark) w-full  text-(--orange-main) px-8 py-10">
          <h1 className="text-4xl text-(--orange-light) font-bold font-kanit pt-2 mb-8">
            {" "}
            YOUR CIRCLES
          </h1>
          <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-20 ">
            {myCircles && myCircles.length > 0 ? (
              myCircles.map((athlete) => {
                return (
                  <Link
                    key={athlete.circle_name}
                    to={`/circle/${athlete.circle_id}/${athlete.circle_slug}`}
                  >
                    <Avatar
                      tierColor={athlete.uc_circle_tier}
                      src={athlete.circle_avatar}
                      name={athlete.circle_name}
                      key={athlete.uc_id}
                    />
                  </Link>
                );
              })
            ) : (
              <div className="flex flex-col justify-center ">
                <p className="font-semibold pb-4 text-(--purple-white)">
                  {" "}
                  You don't have any circles yet.
                </p>
                <Button variant="solid" color="secondary">
                  <Link to="/categories">EXPLORE CIRCLES</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";

function JoinCircle(props) {
  const [chosenTier, setChosenTier] = useState(null);

  const handleJoin = async () => {
    if (chosenTier) {
      const ucData = {
        userId: props.userId,
        circleId: props.circleId,
        circleTier: chosenTier,
      };
      try {
        const response = await fetch("/api/user-circles/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ucData),
        });

        if (!response.ok) {
          throw new Error("Failed to cancel membership");
        }

        const data = await response.json();
        props.handleMembership(chosenTier, data.userCircle.uc_id);
      } catch (error) {
        console.error("Error joining the circle: ", error);
      }
    }
  };

  const handleCancel = async () => {
    try {
      const response = await fetch(`/api/user-circles/${props.ucId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to cancel membership");
      }

      props.cancelMembership(true);
    } catch (error) {
      console.error("Error canceling membership:", error);
    }
  };

  const tiers = [
    {
      value: "Bronze",
      label: "Bronze",
      price: "$4.99/month",
      color: "#CD7F32",
    },
    {
      value: "Silver",
      label: "Silver",
      price: "$9.99/month",
      color: "#C0C0C0",
    },
    { value: "Gold", label: "Gold", price: "$14.99/month", color: "#FFD700" },
  ];

  return props.modalType === "manage" ? (
    <Box
      sx={{
        bgcolor: "var(--purple-dark)",
        width: "100%",
        color: "var(--orange-main)",
        px: 6,
        py: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h2 style={{ fontSize: "1.5rem", textAlign: "center" }}>
        You are a member of {props.circleName}'s circle
      </h2>
      <p
        style={{
          textAlign: "center",
          marginTop: "1rem",
          color: "var(--orange-white",
          fontSize: "18px",
        }}
      >
        Current tier:{" "}
        <span style={{ fontWeight: "bold", textTransform: "capitalize" }}>
          {props.userTier}
        </span>
      </p>
      <Button
        type="submit"
        color="danger"
        variant="solid"
        onClick={handleCancel}
        sx={{ mt: 3, py: 2 }}
      >
        Cancel membership
      </Button>
    </Box>
  ) : (
    <Box
      sx={{
        bgcolor: "var(--purple-dark)",
        width: "100%",
        color: "var(--orange-main)",
        px: 6,
        py: 4,
      }}
    >
      <h2 style={{ fontSize: "1.5rem", textAlign: "center" }}>
        Joining {props.circleName}'s circle
      </h2>
      <p
        style={{
          textAlign: "center",
          marginTop: "0.5rem",
          marginBottom: "1.5rem",
        }}
      >
        Pick the tier for your membership:
      </p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "var(--purple-white)",
          py: 2,
          px: 2,
          borderRadius: "lg",
          boxShadow: "md",
          gap: 2,
        }}
      >
        {tiers.map((tier) => (
          <Box
            key={tier.value}
            onClick={() => setChosenTier(tier.value)}
            sx={{
              p: 3,
              borderRadius: "md",
              border: 2,
              borderColor:
                chosenTier === tier.value
                  ? "var(--orange-main)"
                  : "var(--purple-lighter)",
              bgcolor:
                chosenTier === tier.value
                  ? "var(--orange-white)"
                  : "transparent",
              transition: "all 0.2s",
              cursor: "pointer",
              width: "100%",
              "&:hover": {
                borderColor:
                  chosenTier === tier.value
                    ? "var(--orange-main)"
                    : "var(--purple-main)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    bgcolor: tier.color,
                  }}
                />
                <span
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--purple-dark)",
                  }}
                >
                  {tier.label}
                </span>
              </Box>
              <span style={{ color: "var(--purple-main)", fontWeight: 500 }}>
                {tier.price}
              </span>
            </Box>
          </Box>
        ))}
      </Box>
      <Button
        type="submit"
        color="secondary"
        variant="solid"
        onClick={handleJoin}
        disabled={!chosenTier}
        sx={{ mt: 2, py: 2, width: "100%", fontSize: "16px" }}
      >
        Confirm subscription
      </Button>
    </Box>
  );
}

export default JoinCircle;

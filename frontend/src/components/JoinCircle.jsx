import { useState } from "react";
import Button from "@mui/joy/Button";

function JoinCircle(props) {
  const [chosenTier, setCHosenTier] = useState(null);

  const handleJoin = () => {};
  const handleCancel = () => {};

  return props.isMember ? (
    <section className="bg-(--purple-dark) w-full text-(--orange-main) px-6 py-8">
      <h2 className="text-2xl text-center">
        Joining {props.circleName}'s circle
      </h2>
      <p>Pick the tier for your membership: </p>
      <section className="flex flex-col items-center bg-(--purple-white) py-8 px-6 rounded-lg shadow-md"></section>
      <Button
        type="submit"
        color="secondary"
        variant="solid"
        onClick={handleCancel}
      >
        Cancel membership
      </Button>
    </section>
  ) : (
    <section className="bg-(--purple-dark) w-full text-(--orange-main) px-6 py-8">
      <h2 className="text-2xl text-center">
        Joining {props.circleName}'s circle
      </h2>
      <p>Pick the tier for your membership: </p>
      <section className="flex flex-col items-center bg-(--purple-white) py-8 px-6 rounded-lg shadow-md"></section>
      <Button
        type="submit"
        color="secondary"
        variant="solid"
        onClick={handleJoin}
      >
        Confirm subscription
      </Button>
    </section>
  );
}

export default JoinCircle;

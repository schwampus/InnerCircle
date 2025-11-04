import { Link } from "react-router-dom";
import { Button } from "@mui/joy";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center px-6 bg-(--purple-white) h-18">
        <h3>this is the header component</h3>

        <Button component={Link} to="/login" variant="solid" color="primary">
          LOG IN
        </Button>
      </div>
    </>
  );
}

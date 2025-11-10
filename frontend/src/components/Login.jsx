import { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const Login = (props) => {
  const { login } = useUser();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [_pwdFocus, setPwdFocus] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(formData) {
    try {
      const response = await fetch("/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Response:", result);

      if (result.user) {
        console.log("Success:", result);
        localStorage.setItem("userId", result.user.users_id);
        console.log(result.user.users_id);
        login(result.user.users_id);

        props.toggleClose();
        if (props.type === "join") props.toggleJoin();
        else navigate("/feed");
      }

      resetForm();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function resetForm() {
    setEmail("");
    setPwd("");
    setPwdFocus(false);
  }

  const handleSwitchToSignup = () => {
    props.toggleSignup();
  };

  return (
    <section className="bg-(--purple-dark) w-full text-(--orange-main) px-8 py-10">
      <h2 className="text-2xl text-center">Log in</h2>
      <form
        className="bg-(--purple-dark) w-full text-(--orange-main) px-8 py-10"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          handleLogin(formJson);
        }}
      >
        <Stack spacing={1.2}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              autoComplete="disabled"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              onBlur={() => {
                setPwdFocus(false);
              }}
              onFocus={() => {
                setPwdFocus(true);
              }}
              placeholder="Password"
              type="password"
              required
            />
          </FormControl>
          <Box sx={{ height: 8 }} />
          <Button
            type="submit"
            color="secondary"
            variant="solid"
            disabled={!email || !pwd}
            sx={{ py: 1.2 }}
          >
            Log in
          </Button>
          <p
            className="underline py-4 cursor-pointer"
            onClick={handleSwitchToSignup}
          >
            Don't have an account? Sign up now
          </p>
        </Stack>
      </form>
    </section>
  );
};

export default Login;

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, FormControl, FormLabel, Input, Stack } from "@mui/joy";

const Login = () => {
  const [email, setEmail] = useState("");

  const [pwd, setPwd] = useState("");
  const [pwdFocus, setPwdFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  async function login(formData) {
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
        // navigate();
        localStorage.setItem("userId", result.user.users_id);
        console.log(result.user.users_id);
      }

      resetForm();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function resetForm() {
    setEmail("");
    setPwd("");
    setShowPassword(false);

    setPwdFocus(false);
  }

  return (
    <section className="bg-(--purple-dark) w-full text-(--orange-main) px-8 py-10">
      <form
        className="bg-(--purple-dark) w-full text-(--orange-main) px-8 py-10"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          login(formJson);
        }}
      >
        <Stack spacing={1}>
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
                setShowPassword(false);
              }}
              onFocus={() => {
                setPwdFocus(true);
                setShowPassword(true);
              }}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              required
            />
          </FormControl>
          <Button
            type="submit"
            color="warning"
            variant="solid"
            disabled={!email || !pwd}
          >
            Log in
          </Button>
        </Stack>
      </form>
      <p>Don't have an account? Sign up now</p>
    </section>
  );
};

export default Login;

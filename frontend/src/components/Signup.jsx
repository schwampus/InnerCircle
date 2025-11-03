import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
} from "@mui/joy";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%()&]).{8,24}$/;

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    const result = userName.length >= 3;
    setValidName(result);
  }, [userName]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  async function signUp(formData) {
    try {
      const response = await fetch("/api/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Success:", result);

      if (result.user) {
        localStorage.setItem("userId", result.user.users_id);
        console.log(result.user.users_id);
      }

      resetForm();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function resetForm() {
    setUserName("");
    setEmail("");
    setPwd("");
    setMatchPwd("");
    setShowPassword(false);

    setValidName(false);
    setValidEmail(false);
    setValidPwd(false);
    setValidMatch(false);

    setUserFocus(false);
    setEmailFocus(false);
    setPwdFocus(false);
    setMatchFocus(false);
  }

  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          signUp(formJson);
        }}
      >
        <Stack spacing={1}>
          <FormControl error={!validEmail && userName && !userFocus}>
            <FormLabel>Name</FormLabel>
            <Input
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              placeholder="Name"
              required
              autoComplete="disabled"
            />
            <FormHelperText
              sx={{ color: validName ? "success.main" : "danger.main" }}
            >
              {validName ? "✓" : "Please enter your name"}
            </FormHelperText>
          </FormControl>
          <FormControl error={!validEmail && email && !emailFocus}>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              placeholder="Email"
              required
              autoComplete="disabled"
            />
            <FormHelperText
              sx={{ color: validEmail ? "success.main" : "danger.main" }}
            >
              {validEmail ? "✓" : "Please enter a valid email"}
            </FormHelperText>
          </FormControl>
          <FormControl error={!validPwd && pwd && !pwdFocus}>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
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
            <FormHelperText
              sx={{ color: validPwd ? "success.main" : "danger.main" }}
            >
              {validPwd
                ? "✓"
                : "8-24 characters with uppercase, lowercase, number, and special character (!@#$%()&)"}
            </FormHelperText>
          </FormControl>
          <FormControl error={!validMatch && matchPwd}>
            <FormLabel>Repeat password</FormLabel>
            <Input
              onChange={(e) => setMatchPwd(e.target.value)}
              onBlur={() => setMatchFocus(false)}
              onFocus={() => setMatchFocus(true)}
              placeholder="Repeat the password"
              type="password"
              disabled={!pwd}
              autoComplete="disabled"
            />
            <FormHelperText
              sx={{ color: validMatch ? "success.main" : "danger.main" }}
            >
              {validMatch
                ? "✓ Passwords match"
                : "Passwords do not match, try again"}
            </FormHelperText>
          </FormControl>
          <Button
            type="submit"
            disabled={!validMatch || !userName || !email || !pwd}
          >
            Submit
          </Button>
        </Stack>
      </form>
    </section>
  );
};

export default Signup;

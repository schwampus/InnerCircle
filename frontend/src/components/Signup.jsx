import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Stack,
} from "@mui/joy";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%()&]).{8,24}$/;

const Signup = (props) => {
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
  const [_matchFocus, setMatchFocus] = useState(false);

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

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);

      if (result.user) {
        localStorage.setItem("userId", result.user.users_id);
        console.log(result.user.users_id);

        props.toggleClose();
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

  const handleSwitchToLogin = () => {
    props.toggleLogin();
  };

  return (
    <section className="bg-(--purple-dark) w-full text-(--orange-main) px-6 py-8">
      <h2 className="text-2xl text-center">Sign up</h2>
      <form
        className="bg-(--purple-dark) text-(--orange-main) px-4 py-4"
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          signUp(formJson);
        }}
      >
        <Stack spacing={1}>
          <FormControl error={!validName && userName && !userFocus}>
            <FormLabel>Name</FormLabel>
            <Input
              name="userName"
              onChange={(e) => setUserName(e.target.value)}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              placeholder="Name"
              required
              autoComplete="off"
            />
            {userName && (
              <FormHelperText>
                {validName ? "✓" : "Please enter your name"}
              </FormHelperText>
            )}
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
            {email && (
              <FormHelperText>
                {validEmail ? "✓" : "Please enter a valid email"}
              </FormHelperText>
            )}
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
            <FormHelperText sx={{ fontSize: 12 }}>
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
            {pwd && (
              <FormHelperText>
                {validMatch
                  ? "✓ Passwords match"
                  : "Passwords do not match, try again"}
              </FormHelperText>
            )}
          </FormControl>
          <Box sx={{ height: 8 }} />
          <Button
            type="submit"
            color="secondary"
            variant="solid"
            disabled={!validMatch || !validName || !validEmail || !validPwd}
            sx={{ py: 1.2 }}
          >
            Sign up
          </Button>
          <p
            className="underline py-4 cursor-pointer"
            onClick={handleSwitchToLogin}
          >
            Already have an account? Log in
          </p>
        </Stack>
      </form>
    </section>
  );
};

export default Signup;

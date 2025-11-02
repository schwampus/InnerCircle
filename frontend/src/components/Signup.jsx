import { useEffect, useRef, useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  IconButton,
  Input,
  Stack,
} from "@mui/joy";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%()&]).{8,24}$/;

const Signup = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [showPassword, setShowPassword] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          alert(JSON.stringify(formJson));
        }}
      >
        <Stack spacing={1}>
          <FormControl error={!validName && user && !userFocus}>
            <FormLabel>Email</FormLabel>
            <Input
              onChange={(e) => setUser(e.target.value)}
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              placeholder="Email"
              required
            />
            <FormHelperText
              sx={{ color: validName ? "success.main" : "danger.main" }}
            >
              {validName ? "✓" : "Please enter a valid email"}
            </FormHelperText>
          </FormControl>
          <FormControl error={!validPwd && pwd && !pwdFocus}>
            <FormLabel>Password</FormLabel>
            <Input
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
              type={showPassword ? "text" : "password"} // Dynamic type
              required
              // endAdornment={
              //   <IconButton
              //     aria-label="toggle password visibility"
              //     onClick={() => setShowPassword((prev) => !prev)}
              //     edge="end"
              //   >
              /* {showPassword ? <VisibilityOff /> : <Visibility />} */
              //   </IconButton>
              // }
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
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </section>
  );
};

export default Signup;

import Login from "./Login";
import Signup from "./Signup";
import Drawer from "@mui/joy/Drawer";

const AuthModal = (props) => {
  const component =
    props.formtype === "login" ? (
      <Login
        toggleOpen={props.toggleDrawer}
        toggleSignup={props.toggleSignup}
      />
    ) : (
      <Signup toggleOpen={props.toggleDrawer} toggleLogin={props.toggleLogin} />
    );

  return (
    <section>
      <Drawer anchor="bottom" open={props.isOpen} onClose={props.toggleDrawer} size={props.size}>
        {component}
      </Drawer>
    </section>
  );
};

export default AuthModal;

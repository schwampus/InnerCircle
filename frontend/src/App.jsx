import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
// import Login from "./routes/Login";
// import Register from "./routes/Register";
import { CssVarsProvider } from "@mui/joy/styles";
import { theme } from "./theme.js";

function App() {
  return (
    <CssVarsProvider theme={theme} defaultMode="dark">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </CssVarsProvider>
  );
}

export default App;

/* 
   <Container sx={{padding:"10px",  bgcolor: 'secondary.200', maxWidth: '50dvw',
    width: '100%', }}>
      <Sheet variant="solid" color="primary"
        sx={{
          p: 4,
          borderRadius: 'lg',
          backgroundColor: 'primary.300',  
          color: 'primary.main',             
          mb: 3,
        }}
      >hello
        <Typography level="brand" sx={{ color: 'secondary.main' }}> 
          INNER CIRCLE
        </Typography>
      </Sheet>

      <Typography level="h2"
        sx={{
          color: 'secondary.main', 
          
        }}
      >
        tiers
      </Typography>
    </Container> */

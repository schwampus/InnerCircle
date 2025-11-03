import { Sheet, Container, Typography } from "@mui/joy";

const Home = () => {
  return (
    <Container
      sx={{
        padding: "10px",
        bgcolor: "secondary.200",
        maxWidth: "50dvw",
        width: "100%",
      }}
    >
      <Sheet
        variant="solid"
        color="primary"
        sx={{
          p: 4,
          borderRadius: "lg",
          backgroundColor: "primary.300",
          color: "primary.main",
          mb: 3,
        }}
      >
        hello
        <Typography
          level="title-lg"
          sx={{
            color: "secondary.main",
            fontFamily: '"Climate Crisis", sans-serif',
            fontSize: "3rem", // h1 size
            fontWeight: 600,
            letterSpacing: "2px",
          }}
        >
          INNER CIRCLE
        </Typography>
      </Sheet>

      <Typography
        level="h2"
        sx={{
          color: "secondary.main",
        }}
      >
        tiers
      </Typography>
    </Container>
  );
};

export default Home;

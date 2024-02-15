"use client";
import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import {
  BackgroundGrid,
  ButtonGrid,
  StyledButton,
  StyledSubTitle,
  StyledTitle,
} from "../atoms";

const MediumHome = () => {
  return (
    <BackgroundGrid
      container
      sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
    >
      <Grid
        sm={12}
        style={{
          paddingTop: "150px",
          paddingLeft: "100px",
          paddingRight: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledTitle variant="h4" gutterBottom>
          IMAGINE A PLACE...
        </StyledTitle>
      </Grid>
      <Grid
        sm={12}
        style={{
          paddingLeft: "100px",
          paddingRight: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledSubTitle variant="subtitle1" gutterBottom>
          ...where Alice and Bob can chat.
        </StyledSubTitle>
      </Grid>
      <ButtonGrid lg={6}>
        <Link href="/alice" passHref>
          <StyledButton
            size="large"
            variant="contained"
            color="secondary"
            href="#contained-buttons"
          >
            Alice
          </StyledButton>
        </Link>
      </ButtonGrid>
      <Grid md={6}>
        <Link href="/bob" passHref>
          <StyledButton
            size="large"
            variant="contained"
            color="secondary"
            href="#contained-buttons"
          >
            Bob
          </StyledButton>
        </Link>
      </Grid>
    </BackgroundGrid>
  );
};

export { MediumHome };

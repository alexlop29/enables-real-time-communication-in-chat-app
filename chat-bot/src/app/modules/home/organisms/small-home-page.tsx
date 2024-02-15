"use client";
import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import {
  BackgroundGrid,
  StyledButton,
  StyledSubTitle,
  StyledTitle,
} from "../atoms";

const SmallHome = () => {
  return (
    <BackgroundGrid
      container
      sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
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
      <Grid sm={12}>
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
      </Grid>
      <Grid md={12}>
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

export { SmallHome };

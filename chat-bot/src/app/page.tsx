"use client";
import { StyledButton } from "./modules/home/styled-button";
import Link from "next/link";
import { BackgroundGrid } from "./modules/home/background-grid";
import Grid from "@mui/material/Unstable_Grid2";
import { StyledTitle } from "./modules/home/styled-title";
import { StyledSubTitle } from "./modules/home/styled-subtitle";
import { ButtonGrid } from "./modules/home/styled-button-grid";

export default function Home() {
  return (
    <>
      <BackgroundGrid container>
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
            ...where Alice and Bob can chat with each other.
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
    </>
  );
}

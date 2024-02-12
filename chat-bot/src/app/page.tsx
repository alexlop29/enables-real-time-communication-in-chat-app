"use client";
import { Button } from "@mui/joy";
import { StyledButton } from "./modules/home/styled-button";
import Link from "next/link";
import Grid from "@mui/material/Unstable_Grid2";
import { StyledGrid } from "./modules/home/styled-grid";

export default function Home() {
  return (
    <>
      <Grid container>
        <StyledGrid xs={12} md={6}>
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
        </StyledGrid>
        <Grid xs={12} md={6}>
          <Link href="/bob" passHref>
            <StyledButton size="large" variant="outlined">
              Bob
            </StyledButton>
          </Link>
        </Grid>
      </Grid>

      <div className="relative">
        <div className="absolute inset-0 bg-custom-image1"></div>
        <div className="absolute inset-0 bg-custom-image2"></div>
        <div className="absolute inset-0 bg-custom-image3"></div>
      </div>

      <div className="container mx-auto">
        <div className="bg-[url('/public/background.svg')] bg-indigo-500">
          <p className="text-5xl"> Chat Bot </p>
          <Button className="font-sans hover:font-serif text-2xl rounded-lg">
            <Link href="/alice">Alice</Link>
          </Button>
          <div></div>
          <div></div>
          <Link href="/bob">Bob</Link>
        </div>
      </div>
    </>
  );
}

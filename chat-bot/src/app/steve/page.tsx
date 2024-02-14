"use client";
import React from "react";
import { MessageTerminal } from "../modules/message-terminal/messageTerminal";
import { RecentMessages } from "../modules/recent-messages/recentMessages";
import Grid from "@mui/material/Unstable_Grid2";
import styled, { ThemeProvider } from "styled-components";

const darkTheme = {
  background: "#404eed",
  text: "#fff",
};

const PageWrapper = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
`;

const Steve = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <PageWrapper>
          <Grid
            container
            spacing={2}
            style={{
              width: "50%",
              margin: "auto",
            }}
          >
            <Grid xs={12} lg={12}>
              <RecentMessages />
            </Grid>
            <Grid xs={12} lg={12}>
              <MessageTerminal user="steve" />
            </Grid>
          </Grid>
        </PageWrapper>
      </ThemeProvider>
    </>
  );
};

export default Steve;

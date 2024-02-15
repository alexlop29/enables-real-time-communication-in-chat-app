"use client";
import React from "react";
import { MessageTerminal } from "../modules/message-terminal/messageTerminal";
import { RecentMessages } from "../modules/recent-messages/recentMessages";
import Grid from "@mui/material/Unstable_Grid2";
import { BackgroundGrid } from "../modules/home/atoms/background-grid";

const Steve = () => {
  return (
    <BackgroundGrid container>
      <Grid
        style={{
          height: "80%",
          margin: "auto",
          width: "70%",
          backgroundColor: "white",
        }}
      >
        <Grid
          xs={12}
          lg={12}
          style={{
            overflow: "auto",
            maxHeight: "90%",
            margin: "auto",
            width: "90%",
          }}
        >
          <RecentMessages />
        </Grid>
        <Grid xs={12} lg={12} style={{ width: "90%", margin: "auto" }}>
          <MessageTerminal user="bob" />
        </Grid>
      </Grid>
    </BackgroundGrid>
  );
};

export default Steve;

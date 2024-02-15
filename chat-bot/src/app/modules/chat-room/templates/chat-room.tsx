import React from "react";
import { GetMessages, SendMessage } from "../organisms";
import Grid from "@mui/material/Unstable_Grid2";
import { BackgroundGrid } from "../../home/atoms";

const ChatRoom = (props: { user: string }) => {
  let user = props.user;
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
          <GetMessages />
        </Grid>
        <Grid xs={12} lg={12} style={{ width: "90%", margin: "auto" }}>
          <SendMessage user={user} />
        </Grid>
      </Grid>
    </BackgroundGrid>
  );
};

export { ChatRoom };

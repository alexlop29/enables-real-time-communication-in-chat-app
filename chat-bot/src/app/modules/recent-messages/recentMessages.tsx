"use client";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

const RecentMessages = () => {
  const messages = useQuery(api.tasks.get);

  return (
    <>
      <main>
        {messages?.map(({ _id, message, user, _creationTime }) => (
          <div key={_id}>
            <Grid>
              <Divider style={{ backgroundColor: "gray" }} />
              <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                {user} {new Date(_creationTime).toLocaleString("en-US")}
              </Typography>
              <Typography variant="body2">{message}</Typography>
            </Grid>
          </div>
        ))}
      </main>
    </>
  );
};

export { RecentMessages };

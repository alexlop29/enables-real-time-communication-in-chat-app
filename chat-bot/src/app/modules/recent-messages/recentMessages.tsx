"use client";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import BikeScooterRoundedIcon from "@mui/icons-material/BikeScooterRounded";
import RollerSkatingRoundedIcon from "@mui/icons-material/RollerSkatingRounded";

const RecentMessages = () => {
  const messages = useQuery(api.tasks.get);

  return (
    <>
      <main>
        {messages?.map(({ _id, message, user, _creationTime }) => (
          <div key={_id}>
            <Grid
              container
              rowSpacing={5}
              columnSpacing={2}
              style={{
                padding: 15,
              }}
            >
              <Grid lg={1}>
                {user === "alice" ? (
                  <RollerSkatingRoundedIcon
                    style={{
                      color: "white",
                      backgroundColor: "#404eed",
                      borderRadius: "50%",
                      padding: 8,
                      height: 40,
                      width: 40,
                    }}
                  />
                ) : (
                  <BikeScooterRoundedIcon
                    style={{
                      color: "white",
                      backgroundColor: "#404eed",
                      borderRadius: "50%",
                      padding: 8,
                      height: 40,
                      width: 40,
                    }}
                  />
                )}
              </Grid>
              <Grid lg={4}>
                <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
                  {user} {new Date(_creationTime).toLocaleString("en-US")}
                </Typography>
                <Typography variant="body2">{message}</Typography>
              </Grid>
            </Grid>
          </div>
        ))}
      </main>
    </>
  );
};

export { RecentMessages };

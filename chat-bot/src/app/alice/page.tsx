import React from "react";
import { MessageTerminal } from "../modules/message-terminal/messageTerminal";
import { RecentMessages } from "../modules/recent-messages/recentMessages";

const Alice = () => {
  return (
    <>
      <RecentMessages />
      <MessageTerminal user="alice" />
    </>
  );
};

export default Alice;

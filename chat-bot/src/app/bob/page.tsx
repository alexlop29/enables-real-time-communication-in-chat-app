import React from "react";
import { MessageTerminal } from "../modules/message-terminal/messageTerminal";
import { RecentMessages } from "../modules/recent-messages/recentMessages";

const Bob = () => {
  return (
    <>
      <RecentMessages />
      <MessageTerminal user="bob" />
    </>
  );
};

export default Bob;

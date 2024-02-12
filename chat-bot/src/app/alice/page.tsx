import React from "react";
import { MessageTerminal } from "../modules/message-terminal/messageTerminal";
import { RecentMessages } from "../modules/recent-messages/recentMessages";

const Alice = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-row">
          <div className="basis-1/2">
            <RecentMessages />
            <MessageTerminal user="alice" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Alice;

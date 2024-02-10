"use client";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

const RecentMessages = () => {
  const messages = useQuery(api.tasks.get);

  return (
    <>
      <main>
        {messages?.map(({ _id, message }) => <div key={_id}>{message}</div>)}
      </main>
    </>
  );
};

export { RecentMessages };

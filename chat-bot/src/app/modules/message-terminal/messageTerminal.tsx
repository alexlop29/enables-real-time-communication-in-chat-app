"use client";
import React from "react";
import { useState } from "react";
import { Button } from "@mui/base/Button";
import Textarea from "@mui/joy/Textarea";
import { api } from "../../../../convex/_generated/api";
import { useMutation } from "convex/react";

const MessageTerminal = (props: { user: string }) => {
  let user = props.user;
  const [text, setText] = useState("");
  const mutation = useMutation(api.tasks.createTask);

  const handleSubmit = async () => {
    try {
      await mutation({ text, user });
      setText("");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleTextChange = (event: any) => {
    // change use of any
    setText(event.target.value);
  };

  return (
    <>
      <h1>chat bot</h1>
      <Textarea minRows={1} value={text} onChange={handleTextChange} />
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
};

export { MessageTerminal };

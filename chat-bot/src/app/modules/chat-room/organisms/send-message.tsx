"use client";
import React from "react";
import { useState } from "react";
import Textarea from "@mui/joy/Textarea";
import { api } from "../../../../../convex/_generated/api";
import { useMutation } from "convex/react";

const SendMessage = (props: { user: string }) => {
  let user = props.user;
  const [text, setText] = useState("");
  const mutation = useMutation(api.tasks.createTask);

  const handleSubmit = async (e: any) => {
    try {
      if (e.key === "Enter") {
        e.preventDefault();
        await mutation({ text, user });
        setText("");
      }
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleTextChange = (event: any) => {
    setText(event.target.value);
  };

  return (
    <>
      <Textarea
        minRows={1}
        value={text}
        onKeyDown={handleSubmit}
        onChange={handleTextChange}
        style={{ backgroundColor: "#5765f240" }}
      />
    </>
  );
};

export { SendMessage };

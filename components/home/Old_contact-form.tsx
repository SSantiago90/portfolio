"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Collapsible } from "../ui/collapsible";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isMinimized, setMinimized] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    return alert("not implemented");
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, text }),
    });
    if (response.ok) {
      alert("Message sent!");
      setName("");
      setText("");
    } else {
      alert("Error sending message");
    }
  };

  const handleFocus = () => {
    if (isMinimized) {
      setMinimized(false);
    }
  };
  return (
    <>
      <small>
        Or you can leave me a message{" "}
        <span
          onClick={() => setMinimized(false)}
          className="text-mainAccent cursor-pointer"
        >
          {"here "}
        </span>
        and I will get back to you.
      </small>
      <Collapsible collapsed={isMinimized}>
        <form
          onSubmit={handleSubmit}
          className="font-main flex flex-col items-start gap-5 mt-4"
        >
          <label
            htmlFor="message"
            aria-labelledby="message"
            style={{ display: "none" }}
          >
            Message:
          </label>
          <textarea
            onClick={handleFocus}
            onFocus={handleFocus}
            onBlur={() => setMinimized(true)}
            className="focus:border-white  border-zinc-500 border-solid border-0 border-b-2 focus:outline-hidden w-full inline-block"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <div className="flex gap-2">
            <label htmlFor="message" aria-labelledby="message">
              <small>From:</small>
            </label>
            <input
              className="border-b-2 border-zinc-500 w-full block "
              type="text"
              style={{ background: "transparent" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <Button variant="outlined" type="submit">
            Send
          </Button>

          <Button
            onClick={() => setMinimized(true)}
            variant="outlined"
            type="reset"
          >
            Cancel
          </Button>
        </form>
      </Collapsible>
    </>
  );
}

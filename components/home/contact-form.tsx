"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Pencil, Send } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkgjzdpn");
  const [isHover, setIsHover] = useState(false);

  return (
    <Dialog>
      <div className="flex items-center gap-1 flex-wrap py-2">
        <p className="text-md font-main">Or you can </p>
        <DialogTrigger
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          asChild
          className="flex items-center gap-1  text-gradient-hover"
        >
          <p
            className={`text-md font-main dark:decoration-white  dark:hover:decoration-white hover:underline decoration-dashed underline-offset-8 cursor-pointer`}
          >
            <strong>text me right here!</strong>
            <Pencil
              style={{ visibility: isHover ? "visible" : "hidden" }}
              size={26}
            />
          </p>
        </DialogTrigger>
      </div>

      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] font-main backdrop:blur-sm dark:bg-black/70 bg-zinc-100">
        {state.succeeded ? (
          <DialogHeader>
            <DialogTitle className="text-xl">
              Thanks for reaching out!
            </DialogTitle>
            <DialogDescription>
              I&apos;ll get back to you shortly!
            </DialogDescription>
          </DialogHeader>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Leave me a message</DialogTitle>
              <DialogDescription>
                I&apos;ll get back to you shortly!
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="mail" className="text-right">
                  Email
                </label>
                <input
                  required
                  id="mail"
                  name="mail"
                  type="email"
                  placeholder="jon@doe"
                  className="col-span-3 px-2 py-1 dark:bg-zinc-800"
                />
                <ValidationError
                  prefix="Email"
                  field="mail"
                  errors={state.errors}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4 text-md">
                <label htmlFor="message" className="text-right">
                  Message
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  placeholder="Hi! I Love your work, let's create something together!..."
                  className="col-span-3 px-2 py-1 min-h-24 dark:bg-zinc-800"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <Button type="submit" className="mr-2">
                  Send <Send size={20} />
                </Button>
              </DialogFooter>
            </form>
            <ValidationError errors={state.errors} />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

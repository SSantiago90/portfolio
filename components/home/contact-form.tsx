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
import { Pencil, PencilLineIcon } from "lucide-react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xkgjzdpn");

  return (
    <Dialog>
      <div className="flex items-center gap-1 flex-wrap">
        <p className="text-md font-main">Or you can </p>
        <DialogTrigger asChild className="flex items-center gap-1">
          <p className="text-md font-main">
            <span className="underline underline-offset-2 cursor-pointer hover:text-mainAccent">
              {" leave me a message here "}
              <PencilLineIcon className="inline" size={20} />
            </span>
          </p>
        </DialogTrigger>
      </div>

      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] font-main backdrop:blur-sm dark:bg-black/30">
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
                  id="mail"
                  name="mail"
                  placeholder="jon@mail.xyz"
                  className="col-span-3 px-2 py-1"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="message" className="text-right">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hey there. I Love your work, let's work together!..."
                  className="col-span-3 px-2 py-1"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <DialogFooter>
                <Button type="submit" className="mr-2">
                  Send
                </Button>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

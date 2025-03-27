"use client";

import useNextPageNav from "@/hooks/useNextPageNav";
import { ChevronDownCircle } from "lucide-react";
import TransitionLink from "./TransitionLink";

export default function NextPageButton() {
  const { resolveNextPage } = useNextPageNav();

  return (
    <div className="fixed opacity-50 hover:opacity-100 transition-opacity duration-250 w-full bottom-5 flex justify-center z-50 cursor-pointer text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-100">
      <TransitionLink href={resolveNextPage()}>
        <button>{<ChevronDownCircle size={32} />}</button>
      </TransitionLink>
    </div>
  );
}

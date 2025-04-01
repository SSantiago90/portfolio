import sleep from "@/components/util/sleep";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TransitionLink({
  children,
  href,
  disabled,
  onNavigation,
  onNavigationEnd,
  className,
  ...props
}: {
  children: React.ReactNode;
  onNavigation?: () => void;
  onNavigationEnd?: () => void;
  disabled?: boolean;
  className?: string;
  href: string;
}) {
  const router = useRouter();

  async function handleNavigation(evt: React.MouseEvent<HTMLAnchorElement>) {
    if (disabled) {
      evt.preventDefault();
      evt.stopPropagation();
      return;
    }

    evt.preventDefault();
    if (onNavigation) onNavigation();

    const main = document.getElementById("content");
    if (!main) return;

    main.classList.add("page-transition-exit");

    await new Promise((resolve) => {
      main.addEventListener("animationend", () => resolve(true), {
        once: true,
      });
    });

    await sleep(260);
    router.push(href);

    await sleep(260);

    main.classList.remove("page-transition-exit");
    main.classList.add("page-transition-enter");

    await new Promise((resolve) => {
      main.addEventListener("animationend", () => resolve(true), {
        once: true,
      });
    });

    main.classList.remove("page-transition-enter");

    if (onNavigationEnd) onNavigationEnd();
  }

  return (
    <Link
      onClick={handleNavigation}
      href={href}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}

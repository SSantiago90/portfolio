import sleep from "@/components/util/sleep";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function TransitionLink({
  children,
  href,
  disabled,
  onNavigation,
  ...props
}: {
  children: React.ReactNode;
  onNavigation?: () => void;
  disabled?: boolean;
  href: string;
}) {
  const router = useRouter();

  async function handleNavigation(evt: React.MouseEvent<HTMLAnchorElement>) {
    if (disabled) return;

    evt.preventDefault();
    if (onNavigation) onNavigation();

    const main = document.getElementById("content");
    if (!main) return;

    main.classList.add("page-transition-exit");

    await sleep(360);
    router.push(href);
    await sleep(360);

    main.classList.remove("page-transition-exit");
    main.classList.add("page-transition-enter");
  }

  return (
    <Link onClick={handleNavigation} href={href} {...props}>
      {children}
    </Link>
  );
}

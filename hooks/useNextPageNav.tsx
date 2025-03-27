import { useRouter, usePathname } from "next/navigation";

export default function useNextPageNav() {
  const router = useRouter();
  const pathname = usePathname();
  const routes = ["/", "/projects", "/experience", "/skills"];

  const handleNextPage = () => {
    const currentIndex = routes.indexOf(pathname);
    const nextIndex = (currentIndex + 1) % routes.length;
    router.push(routes[nextIndex]);
  };

  const resolveNextPage = () => {
    const currentIndex = routes.indexOf(pathname);
    const nextIndex = (currentIndex + 1) % routes.length;
    return routes[nextIndex];
  };

  return { handleNextPage, resolveNextPage };
}

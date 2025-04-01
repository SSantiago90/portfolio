import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

export default function SocialLinks() {
  const links: { icon: IconType; href: string; type: string }[] = [
    {
      icon: SiGmail,
      href: "mailto:salkinsantiago@gmail.com",
      type: "Email",
    },
    {
      icon: SiLinkedin,
      href: "https://www.linkedin.com/in/santiago-salkin-a2a5a689/",
      type: "Linkedin",
    },
    {
      icon: SiGithub,
      href: "https://github.com/SSantiago90",
      type: "Github",
    },
    {
      icon: SiWhatsapp,
      href: "https://wa.me/5493434191727",
      type: "Whatsapp",
    },
  ];

  return (
    <div className="mr-auto mt-2 flex w-full flex-wrap items-center gap-12">
      {links.map((link) => {
        return (
          <a
            target="_blank"
            key={link.type}
            href={link.href}
            className="hover:text-black dark:hover:text-white text-zinc-500 dark:text-zinc-400 transition-colors duration-300"
          >
            <link.icon title={link.type} />
          </a>
        );
      })}
    </div>
  );
}

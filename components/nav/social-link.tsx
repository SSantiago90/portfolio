import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiWhatsapp,
} from "@icons-pack/react-simple-icons";

export default function SocialLinks() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: "mailto:johndoe@gmail.com",
    },
    {
      icon: SiGithub,
      href: "https://github.com/johndoe",
    },
    {
      icon: SiLinkedin,
      href: "https://www.linkedin.com/in/johndoe/",
    },
    {
      icon: SiWhatsapp,
      href: "https://medium.com/@johndoe",
    },
  ];

  return (
    <div className="mr-auto mt-2 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        );
      })}
    </div>
  );
}

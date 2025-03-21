import SocialLinks from "@/components/nav/social-link";
import Divider from "../ui/divider";

export default function AboutMe() {
  return (
    <div className="font-base">
      <h1
        style={{ animationDelay: "400ms" }}
        className="text-4xl font-heading sm:text-5xl delay-400 animate-fade-in"
      >
        Santiago Salkin
      </h1>
      <p
        className="mt-4 text-xl sm:text-2xl uppercase font-light tracking-widest animate-write text-gradient"
        style={{ animationDelay: "500ms" }}
      >
        Fullstack Software Developer
        <span className="font-black animate-ping">_</span>
      </p>
      <div className="text-lg sm:text-lg font-secondary">
        <Divider className="mb-8 animate-show" animated={true} />
        <p
          className="w-[720px] animate-show"
          style={{ animationDelay: "880ms" }}
        >
          <strong>Hi!</strong> I&apos;m a Front-end web developer with a solid
          foundation in full-stack development, experienced in backend and
          blockchain technology.
        </p>

        <br />
        <p className="animate-show" style={{ animationDelay: "1000ms" }}>
          Feel free to get in touch with me on social media:
        </p>
        <SocialLinks />
      </div>
    </div>
  );
}

import SocialLinks from "@/components/nav/social-link";
import Divider from "../ui/divider";
import ProfileImg from "./profile-image";
import ContactForm from "./contact-form";

export default function AboutMe() {
  return (
    <div className="font-base">
      <ProfileImg />
      <h1
        style={{ animationDelay: "400ms" }}
        className="text-4xl font-heading sm:text-5xl delay-400 animate-fade-in"
      >
        Santiago Salkin
      </h1>
      <div
        style={{ animationDelay: "500ms" }}
        className="mt-4 mb-1 animate-write"
      >
        <p className="uppercase mt-4 sm:text-2xl text-xl font-light tracking-widest animate-write text-gradient inline">
          Fullstack Software Developer
        </p>
        <span className="dark:text-zinc-200 text-zinc-800 font-black animate-blink">
          _
        </span>
      </div>
      <div className="text-lg sm:text-lg font-secondary">
        <Divider
          className="mb-8 animate-show delay-500 sm:w-[468px] w-[392px]"
          animated={true}
        />
        <p
          className="w-[720px] animate-show"
          style={{ animationDelay: "880ms" }}
        >
          <strong>Hi!</strong> I&apos;m a Front-end web developer with a solid
          foundation in full-stack development, experienced in backend and
          blockchain technology.
        </p>

        <br />
        <div
          className="animate-show sm:w-[468px] w-[392px]"
          style={{ animationDelay: "1100ms" }}
        >
          <div className="font-main animate-show">
            Get in touch!
            <SocialLinks />
          </div>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

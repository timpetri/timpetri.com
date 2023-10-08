import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com/timpetri",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/timpetri/",
    icon: LinkedinIcon,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/timmpetri",
    icon: TwitterIcon,
  },
];

export default function Home() {
  return (
    <main className=" prose min-h-screen m-auto pt-16 sm:px-2 px-6">
      <h1 className="">Tim Petri</h1>
      <div className="slide-in-content">
        <p className="">Hey, I&apos;m Tim Petri.</p>
        <p>
          I&apos;m a founding engineer at{" "}
          <a href="https://www.archlending.com/" target="_blank">
            Arch
          </a>
          , a fintech startup based in New York.
        </p>
        <p>
          Before that, I spent a number of years at Google working on consumer
          products, including Maps, Search, and Lens.
        </p>
        <p>
          My interests span crypto, AI, philosophy, consciousness, and history.
          If you&apos;re interested in any of these topics, I&apos;d love to
          chat.
        </p>
        <p>I grew up in Sweden and speak Swedish, English, and German.</p>
        <p>Find me on: </p>
        <div className="flex space-x-1">
          {SOCIALS.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              className="px-2 no-underline hover:text-blue-500 flex flex-row hover:border-b-[1px]"
            >
              <social.icon className="h-4 w-4 mr-2" />
              <span className="text-sm ">{social.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <p className="hidden animate-slide-in"></p>
    </main>
  );
}

import { infos } from "@data/data";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="py-12 min-h-screen md:min-h-70 lg:min-h-screen flex items-center justify-center">
      <article className="">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex flex-row md:flex-col gap-9 text-lg md:text-2xl p-15">
            <FaGithub /> <FaGlobe />
          </div>
          <h1> Lorem ipsulume <br /> dotr sithe dotmetsas </h1>
        </div>
      </article>
    </section>
  );
}

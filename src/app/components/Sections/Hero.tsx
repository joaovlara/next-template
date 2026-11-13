import { infos } from "@data/data";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="md:py-12 min-h-[85vh] flex items-center justify-center">
      <article className="container">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex flex-row md:flex-col py-6 gap-3 md:gap-9 text-lg md:text-2xl pr-6 md:pr-15">
            <FaGithub /> <FaGlobe />
          </div>
          <div className="space-y-9">
            <h1>
              Lorem ipsulume <br /> dotr sithe{" "}
              <span className="text-brand-yellow">dotmetsas</span> dotmetsas
            </h1>
            <div className="grid md:grid-cols-2 space-y-9">
              <div className="bg-brand-red h-30 card flex justify-around items-center">
                <p className="text-3xl md:text-4xl">Lorem ipsum dolor sit amet</p>
                <span className="bg-brand-yellow rounded-full text-4xl p-3"><FiArrowUpRight /></span>
              </div>
              <p className="md:px-3 text-2xl md:text-3xl">
                Lorem ipsulume dotr sithe dotmetsas ipsulume dotr sithe
                dotmetsas
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

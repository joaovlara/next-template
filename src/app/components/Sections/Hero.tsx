import { infos } from "@/data/data";
import { FaGithub, FaGlobe } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="py-12 min-h-screen md:min-h-70 lg:min-h-screen bg-brand-dark flex items-center justify-center">
      <article className="container space-y-6 mx-auto">
        <section className="flex items-center gap-9">
          <div className="flex md:flex-col gap-3 text-3xl">
            <FaGithub />
            <FaGlobe />
          </div>

          <h1>Lorem ipsulume <br /> dotr sithe dotmetsas</h1>
        </section>
        <section className="pl-20 grid grid-cols-2 gap-3">
          <div>card</div>

          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
            alias aut voluptatibus animi repellat veritatis a quas nobis quae
            doloribus, eaque nihil nisi dolor id non aperiam tenetur, nulla
            praesentium!
          </div>
        </section>
      </article>
    </section>
  );
}
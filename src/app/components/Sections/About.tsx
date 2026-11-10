import { infos } from "@data/data";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <section className=" py-9 bg-brand-light text-black">
      <article className="container"> 
        <h2 className="text-4xl md:text-6xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis remim.</h2>
        <div className="container flex flex-col md:flex-row pt-15">
          <div className="md:w-2/3">
            <h3 className="text-2xl md:text-4xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisrem im</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporisrem im</p>
          </div>
          <div className=" flex justify-center items-center md:w-1/3">
            <FaGithub className="text-9xl" />
          </div>
        </div>
      </article>
    </section>
  );
}

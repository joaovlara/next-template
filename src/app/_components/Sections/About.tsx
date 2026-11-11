import Link from "next/link";
import { about, routes } from "@/src/app/_data/data";
import FadeIn from "../Animations/FadeIn";

export default function About() {
  const sobreHref: string =
    routes.find((route) => route.name === "SOBRE")?.href ?? "/sobre";

  return (
    <section className="container-1">
      <FadeIn className="flex flex-col gap-6">
        <h2 className="font-bold text-3xl md:text-5xl text-brand-graphite uppercase">
          {about.title}
        </h2>
        <p className="font-semibold text-2xl md:text-4xl text-brand-graphite-400">
          {about.text}
        </p>
      </FadeIn>
    </section>
  );
}

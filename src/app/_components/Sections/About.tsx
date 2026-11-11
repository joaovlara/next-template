import Link from "next/link";
import { about, routes } from "@/src/app/_data/data";
import FadeIn from "../Animations/FadeIn";

export default function About() {
  const sobreHref: string =
    routes.find((route) => route.name === "SOBRE")?.href ?? "/sobre";

  return (
    <section className="container-1">
      <FadeIn className="flex flex-col gap-6 md:max-w-4xl">
        <p>{about.text}</p>

        <Link href={sobreHref} className="btn-outline w-fit uppercase">
          Saiba mais
        </Link>
      </FadeIn>
    </section>
  );
}
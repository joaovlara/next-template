import Image from "next/image";
import { getApp } from "@/src/app/_data/data";
import FadeIn from "../Animations/FadeIn";
import HighlightText from "../HighlightText";

export default function GetApp() {
  return (
    <section className="download-section-container">
      <div className="container-1 get-app-content">
        <FadeIn className="flex flex-col gap-6">
          <h2>
            <HighlightText text={getApp.title} />
          </h2>

          <p>{getApp.text}</p>
          <p>{getApp.text2}</p>
          <a
            href={getApp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-fit"
          >
            {getApp.buttonLabel}
          </a>
        </FadeIn>
      </div>
      <div className="get-app-card">
        <Image
          src="/images/phone-image.jpg"
          alt="Aplicativo para condomínios em um celular"
          fill
          sizes="30vw"
          className="get-app-image"
        />
      </div>
    </section>
  );
}
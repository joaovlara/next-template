import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-brand-sand p-6">
      <div className="flex w-full max-w-4xl flex-col items-center gap-10 md:flex-row md:gap-16">
        <div className="flex w-full max-w-xl flex-col items-center gap-8 bg-white px-6 py-20 text-center shadow-sm sm:px-12">
          <h1 className="text-4xl uppercase md:text-6xl">Página não encontrada :/</h1>
          <Link className="btn-primary" href="/">
            Ir para o início
          </Link>
        </div>
        <Image
          src="/images/logo/logo.png"
          alt="Potengi Garantia Condominial"
          width={220}
          height={110}
          className="h-auto w-44 object-contain md:w-52"
        />
      </div>
    </main>
  );
}

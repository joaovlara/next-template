import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-hero">
      <div className="shell">
        <p className="eyebrow">Erro 404</p>
        <h1>Esta página não está disponível.</h1>
        <p>Volte para a página inicial para conhecer as soluções da Potêngi.</p>
        <Link className="button" href="/">
          Ir para o início
        </Link>
      </div>
    </main>
  );
}

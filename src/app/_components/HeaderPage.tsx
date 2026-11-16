interface HeaderPageProps {
  pageName: string;
  subtitle: string;
}

const HeaderPage = ({ pageName, subtitle }: HeaderPageProps) => {
  return (
    <header className="page-header">
      <div className="container page-header-content">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold">{pageName}</h1>
        <h2 className="text-xl md:text-2xl">{subtitle}</h2>
      </div>
    </header>
  );
};

export default HeaderPage;
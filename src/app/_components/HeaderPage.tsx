interface HeaderPageProps {
  pageName: string;
  subtitle: string;
}

const HeaderPage = ({ pageName, subtitle }: HeaderPageProps) => {
  return (
    <header className="page-header">
      <div className="container page-header-content">
        <h1>{pageName}</h1>
        <h2>{subtitle}</h2>
      </div>
    </header>
  );
};

export default HeaderPage;
Diretrizes do Projeto e Boas Práticas

Este projeto é um template reutilizável, desenvolvido com foco em escalabilidade, modularidade e reuso de estilos globais.

Estilização (Tailwind CSS v4)
Centralize no arquivo global.css todas as classes utilitárias e estilos base reutilizáveis, como paleta de cores, tipografia, bordas, sombras, padrões de fundo, botões e suas variações, listas e títulos. Utilize obrigatoriamente a diretiva @layer (components ou utilities) combinada com @apply para definir essas classes globais. Escreva CSS puro, como animações específicas, backgrounds complexos ou regras customizadas, no final do arquivo global.css, evitando escrever CSS puro dentro dos arquivos de componentes isolados.

Evite duplicar estilos: não redefina dentro de componentes isolados estilos que já foram declarados globalmente. Como o projeto utiliza Tailwind v4, não crie nem utilize o arquivo tailwind.config.js, pois ele está em desuso e a customização agora é feita diretamente no arquivo CSS principal com a diretiva @theme.

Estrutura de Componentes (_components)
Todos os componentes da aplicação devem ser organizados dentro da pasta _components. Caso um componente exija variações estruturais distintas para Mobile e Desktop, como uma Navbar, crie uma pasta dedicada com o nome do componente e agrupe seus arquivos derivados, por exemplo NavbarMobile.tsx e NavbarDesktop.tsx. Agrupe componentes correlatos em pastas organizadas, como Cards, Modals e Headers.

Componentes reutilizáveis ou de uso direto, como Paginação, Carrossel e Footer, podem ser mantidos diretamente na raiz da pasta _components.

Para animações, centralize componentes e utilitários genéricos na pasta _components/Animations usando Framer Motion ou Motion. Evite criar animações gerais dentro de componentes isolados. Caso seja estritamente necessário criar uma animação específica dentro de um componente ou página, mantenha o trecho devidamente sinalizado e comentado.

Gerenciamento de Dados (_data)
Toda a camada de dados estáticos, textos de conteúdo e metadados de SEO deve ser centralizada na pasta _data. No topo do arquivo data.ts, crie um objeto centralizador com as informações institucionais, como nome, telefone, e-mail, endereço e links de redes sociais. Sempre que uma seção precisar dessas informações, importe e referencie a propriedade desse objeto.

Agrupe os textos das páginas no mesmo arquivo data.ts, devidamente separados por comentários indicando a página e a seção correspondente. Rótulos curtos de botões ou links podem permanecer diretamente no componente, mas textos longos, parágrafos e chamadas institucionais devem obrigatoriamente vir do arquivo de dados. Além disso, utilize o arquivo data.routes.ts para centralizar o mapeamento de rotas e a navegação do site.

Stack e Boas Práticas de Código
Na arquitetura HTML, utilize elementos semânticos como main, header, nav, article, section e footer para garantir acessibilidade e boas práticas de SEO. No Next.js, mantenha todos os componentes como Server Components por padrão e adicione a diretiva "use client" no topo do arquivo apenas quando houver necessidade explícita de interatividade, hooks do React ou APIs do navegador. No TypeScript, defina tipagens explícitas para todas as props, estados e funções, garantindo componentes fortemente tipados, modulares e de fácil manutenção. Por fim, priorize sempre a clareza, a legibilidade do código e as convenções modernas do ecossistema React e Next.js.
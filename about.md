Este é um projeto de template reutilizavel

Toda a estrutura desse projeto é pensada em ser escalavel, reutilizar estilos globais e ser o mais modular possivel.

Estilos:

Definir classes reutilizaveis como: cores, tipografia, componentes base que serão reutilizados, bordas, sombras, animações, fundos de pattern, estilos de botao e variações, estilos de lista, titulos, todas no "global.css" usando o @apply e chamando nos componentes que compartilham algum mesmo estilo. Evitar criar componentes que repetem estilos que já estão no global (Por exemplo se existir um estilo de borda no global, evite criar componente que define o mesmo estilo dentro dele). Para CSS customizado como fundos, animações especificas, breakpoints e tudo que seja css puro, escreva no final do Global Css, evite criar css puro dentro dos componentes isolados.

Não utilize nem crie o arquivo `tailwind.config.js`, pois está em desuso no Tailwind V4

Ao criar ou modificar estilos no `global.css`, utilize obrigatoriamente `@layer` (components/utilities) e `@apply`.

Componentes:

Agrupe componentes como Cards, Modais, Cabeçalhos, em pastas dentro da pasta "_components", se os componentes precisarem de dois arquivos para Mobile e Dekstop crie uma pasta com o nome do componente e agrupe os dois por exemplo (NavbarMobile e NavbarDesktop), se forem componentes reutilizaveis ou unicos como Paginação, Carrossel, Nav, Footer, crie soltos dentro da pasta. 

Animações: O projeto conta com o motion e o framer motion para fazer animações reutilizaveis e gerais, crie os componente de animação na pasta Animations dentro de "_componentes" para que possam ser reutilizaveis, evite criar animações gerais dentro de componentes isolados, se necessario criar animações muito especificas dentro de componentes e páginas, deixe sinalizado e comentado.

Data:

Centralize as informações do site, textos de conteudo e SEO dentro da pasta "_data". Textos de botões e Links <a> podem ficar dentro do componente desde que nao sejam uma frase longa. Para textos das seções agrupe no arquivo data.ts separado por comentarios informando a pagina e seção. Para as informações como numero, nome, endereço e links de redes sociais, crie um objeto no começo do arquivo data para centralizar essas informações, se uma seção precisar de uma informação chame o objeto dessa informação e especifique. Use o arquivo data.routes.ts para listar as rotas de páginas


STACK E BOAS PRÁTICAS
Arquitetura & HTML: Utilize HTML5 semântico (`<main>`, `<header>`, `<nav>`, `<article>`, `<section>`, `<footer>`, etc.).
Next.js (Server vs. Client): Atente-se ao uso estrito da diretiva `"use client"`. Mantenha os componentes como Server Components por padrão e adicione `"use client"` apenas quando houver necessidade explícita de interatividade, hooks do React ou APIs de navegador.
TypeScript: Defina tipagens explícitas para props, estados e funções. Crie componentes altamente reutilizáveis, modulares e fortemente tipados.
Manutenibilidade: Priorize a legibilidade e as melhores práticas de programação moderna no ecossistema React/Next.js.
# Instruções do Projeto

## 1. Estilização (Tailwind CSS v4)

- Centralize em `global.css` todas as classes utilitárias e estilos base reutilizáveis: paleta de cores, tipografia, bordas, sombras, padrões de fundo, botões (e variações), listas e títulos.
- Defina essas classes obrigatoriamente com `@layer` (`components` ou `utilities`) combinado com `@apply`.
- Escreva CSS puro (animações específicas, backgrounds complexos, regras customizadas) apenas no final do `global.css`. Nunca em arquivos de componentes isolados.
- Não duplique estilos: não redefina em componentes o que já existe globalmente.
- O projeto usa Tailwind v4: **não crie nem utilize `tailwind.config.js`**. Toda customização é feita no CSS principal com a diretiva `@theme`.

## 2. Estrutura de Componentes (`_components`)

- Todos os componentes ficam dentro de `_components`.
- Componentes com estruturas distintas para Mobile e Desktop (ex.: Navbar) ganham pasta própria com o nome do componente, agrupando os derivados (ex.: `NavbarMobile.tsx`, `NavbarDesktop.tsx`).
- Agrupe componentes correlatos em pastas temáticas (ex.: `Cards`, `Modals`, `Headers`).
- Componentes reutilizáveis ou de uso direto (ex.: Paginação, Carrossel, Footer) podem ficar na raiz de `_components`.
- Animações:
  - Centralize componentes e utilitários genéricos em `_components/Animations`, usando Framer Motion ou Motion.
  - Não crie animações gerais dentro de componentes isolados.
  - Se for estritamente necessário criar uma animação específica em um componente ou página, mantenha o trecho sinalizado e comentado.

## 3. Gerenciamento de Dados (`_data`)

- Centralize em `_data` todos os dados estáticos, textos de conteúdo e metadados de SEO.
- No topo de `data.ts`, crie um objeto centralizador com as informações institucionais (nome, telefone, e-mail, endereço, redes sociais). Sempre importe e referencie as propriedades desse objeto quando uma seção precisar dessas informações.
- Agrupe os textos das páginas em `data.ts`, separados por comentários que indiquem página e seção.
- Rótulos curtos de botões e links podem ficar no componente. Textos longos, parágrafos e chamadas institucionais **devem** vir do arquivo de dados.
- Use `data.routes.ts` para centralizar o mapeamento de rotas e a navegação do site.

## 4. Stack e Boas Práticas de Código

- **HTML semântico:** use `main`, `header`, `nav`, `article`, `section` e `footer` para garantir acessibilidade e SEO.
- **Next.js:** mantenha todos os componentes como Server Components por padrão. Adicione `"use client"` no topo do arquivo somente quando houver necessidade explícita de interatividade, hooks do React ou APIs do navegador.
- **TypeScript:** tipe explicitamente props, estados e funções, mantendo componentes fortemente tipados, modulares e fáceis de manter.
- Priorize clareza, legibilidade e as convenções modernas do ecossistema React e Next.js.
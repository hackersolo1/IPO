# IPO Landing Page

Landing page responsiva da **IPO Creatine Bar**, desenvolvida com React, TypeScript e Vite. O projeto apresenta uma experiência visual escura e orientada para performance, com navegação de marca, hero section com scrubbing por scroll e blocos de comunicação inspirados no protocolo diário do produto.

## Estrutura do projeto

A página é composta por seções independentes, cada uma mantendo o seu próprio componente React e arquivo CSS:

| Seção | Componente | Responsabilidade |
| --- | --- | --- |
| Cabeçalho | `src/components/header/` | Identidade visual fixa da página. |
| Hero | `src/sections/hero/` | Mensagem principal e experiência de scrubbing. |
| Benefícios | `src/sections/features/` | Apresentação dos números principais: 20G de proteína, 5G de creatina e 1BAR. |
| Rotina otimizada | `src/sections/routine/` | Comparação entre o protocolo tradicional e o sistema IPO. |
| Mensagem da marca | `src/sections/mantra/` | Sequência “IMPROVE / PERFORM / OVERCOME”. |

A seção de ingredientes não faz parte da composição atual da página e foi deixada de fora conforme definido no escopo do projeto.

## Scrubbing de vídeo

O hero utiliza `ScrubbingDeck`, em `src/components/SrubbingDeck/ScrubbingDeck.tsx`, para associar o progresso de scroll aos frames do vídeo. Os frames ficam organizados em `src/assets/videos/frames_versao_4/` e são carregados com `import.meta.glob`, ordenados numericamente e enviados ao componente como URLs estáticas.

A âncora `id="features"` é mantida na seção de benefícios para preservar o intervalo de scroll usado pelo hero. A seção duplicada que existia no ponto de entrada foi removida.

## Tecnologias

- React 19
- TypeScript
- Vite
- CSS modular por seção
- ESLint
- Scrubbing de vídeo baseado em sequência de frames

## Desenvolvimento local

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Para validar o TypeScript e gerar a versão de produção:

```bash
npm run build
```

Para executar a verificação de lint:

```bash
npm run lint
```

## Organização visual

O design utiliza fundo escuro, cartões com cantos arredondados, tipografia em caixa alta e contraste entre tons brancos e cinza. As seções foram mantidas independentes para facilitar ajustes de conteúdo, espaçamento e responsividade sem criar dependências entre os seus estilos.

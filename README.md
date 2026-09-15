# cedro

Site público do app **Cedro** (devocional cristão) — landing page + blog,
construído em [Astro](https://astro.build) para bom SEO (HTML estático,
sitemap automático) com uma coleção de conteúdo em Markdown para o blog.

No ar: https://cedroapp.com.br

## Estrutura

- `src/pages/` — landing (`index.astro`), Termos, Privacidade, blog
- `src/content/blog/` — artigos do blog (Markdown/MDX), ver
  `src/content.config.ts` para o schema (pilar, data, etc.)
- `src/layouts/` — `Layout.astro` (base, com SEO/OG/JSON-LD) e `Legal.astro`
  (Termos/Privacidade)
- Plano editorial dos artigos: `docs/produto/conteudo-seo.md` no repo
  `projeto-biblico`

## Desenvolvimento

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera dist/
```

## Deploy

Automático: todo push em `main` roda `.github/workflows/deploy.yml`, que
builda e publica no GitHub Pages (domínio customizado `cedroapp.com.br` via
`public/CNAME`). Não precisa buildar nem subir nada manualmente.

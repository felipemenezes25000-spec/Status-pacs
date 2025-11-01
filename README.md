# BTG Pactual Status Page

Status page estática pronta para GitHub Pages.

## Como publicar
1. Crie um repositório novo no GitHub.
2. Envie estes arquivos (`index.html`, `manifest.webmanifest`, `sw.js`, `.github/workflows/pages.yml`).
3. A ação `pages` fará o deploy automático (branch `gh-pages`).

Alternativa: habilite **Settings → Pages → Deploy from a branch** apontando para `main` e `/root`.

## Desenvolvimento local
Qualquer servidor estático funciona.
```bash
python3 -m http.server 8000
# Abra http://localhost:8000
```

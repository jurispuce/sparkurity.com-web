# sparkurity.com

Marketing site for the Sparkurity training platform. Hugo 0.120.4, no theme, no CSS build step.

```bash
hugo server          # http://localhost:1313
hugo --gc --minify   # build to public/
```

- **Plan, site map, open questions:** `PLAN.md`
- **Copy lives in content front matter** (`content/_index.md`, `content/courses/*.md`, `content/for-*.md`). Layouts contain no copy, so a Latvian version is a set of `*.lv.md` files plus `i18n/lv.yaml`.
- **Design system:** `static/sparkurity/` (tokens + `spk-*` components, logos), `design-system/templates/`, brand rules in `.claude/skills/sparkurity-design/`. Site layout CSS in `static/css/site.css` reads tokens only.
- **Platform links:** `params.platformURL` in `hugo.toml` (placeholder).

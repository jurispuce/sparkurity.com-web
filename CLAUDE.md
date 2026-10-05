# sparkurity.com — repo orientation

Hugo marketing site for the Sparkurity training platform (separate from jurispuce.com). Read `PLAN.md` first: decisions, site map, front-matter schema, content rules and open questions.

- All copy is in content front matter; layouts hold none. Keep it that way so LV translation stays a file copy.
- Follow the design system in `.claude/skills/sparkurity-design/` — no new hues, Fraunces headings, Inter body, JetBrains Mono kickers, no emoji.
- Content rules: say "designed on" research, never promise effect sizes; "self-hosted platform; AI by Anthropic Claude", never "full data sovereignty"; don't list unbuilt features (certificates, SSO, export, profile-based grouping) as available — use the "Coming soon" pattern.
- This repo is the single home of the design system (`static/sparkurity/`, served at `https://sparkurity.com/sparkurity/`). Lesson templates and course artifacts link that URL; jurispuce.com does not carry a copy.

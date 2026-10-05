# sparkurity.com — build plan

Source: *Sparkurity Training Platform — Messaging & Website Copy* (2 Oct 2026) and the Sparkurity design system handoff.

## Decisions so far

| Topic | Decision |
|---|---|
| Repo | Separate repo `jurispuce/sparkurity.com-web`. jurispuce.com stays as is. |
| Stack | Hugo 0.120.4 (same as jurispuce.com), no theme, no build step for CSS. Netlify, same pattern as jurispuce.com. |
| Design system | Copied into this repo: `static/sparkurity/` (tokens + `spk-*` components + logos), `design-system/templates/`, `.claude/skills/sparkurity-design/`. Marketing layout lives in `static/css/site.css` and only reads tokens. The canonical copy is in jurispuce.com (lessons link `https://jurispuce.com/sparkurity/styles.css`); keep the two in sync until the LMS moves. |
| CTAs | "Start now", "Join next cohort", "Sign in" go to the platform. URL is a placeholder: `params.platformURL` in `hugo.toml`. "Book a demo" / "Talk to us" go to `/contact/`. |
| Languages | English at launch, LV-ready: all UI strings in `i18n/en.yaml`, all copy in content front matter. Adding Latvian = uncomment `[languages.lv]`, add `i18n/lv.yaml` and `*.lv.md` files. No layout changes. |
| Instructors | Instructor pillar on the homepage **and** a dedicated `/for-instructors/` page. |
| Brand | Domain sparkurity.com, name "Sparkurity" everywhere (no Peak Defence OÜ). Legal entity in the footer is `params.legalEntity`. |

## Site map

```
/                          Home — platform page (hero, "I am…" router, problem, how it works,
                           3 pillars, formats, featured courses, evidence, trust, FAQ, CTA)
/courses/                  Catalogue with filters: topic · format · audience · language
/courses/<slug>/           Course detail (10-section structure from the copy doc)
  information-security-essentials-saas
  secure-engineering-saas
  internal-cybersecurity-auditor
  ai-company-wide-automation
  digital-law-in-practice
/for-organisations/        Enterprise L&D / HR / CISO (incl. security-awareness angle)
/for-instructors/          Teach with Sparkurity
/for-professionals/        Individual learners
/approach/                 Methodology: evidence review + full references
/contact/                  Book a demo / talk to us (Netlify form)
/privacy/  /terms/         Placeholders — must be written before launch
```

## Layouts

| Template | Used by | Content source |
|---|---|---|
| `_default/baseof.html` | everything | — |
| `index.html` | `/` | `content/_index.md` front matter (every section is data, so LV is a file copy) |
| `courses/list.html` | `/courses/` | `content/courses/_index.md` + each course's front matter |
| `courses/single.html` | course pages | course front matter (see schema below) |
| `_default/audience.html` | the three "for…" pages | front matter: hero, pains, proof, objections, featured courses |
| `_default/single.html` | approach, privacy, terms | Markdown body (prose layout) |
| `_default/contact.html` | `/contact/` | front matter + form |

Partials: `head`, `nav`, `footer`, `section-head`, `course-card`, `faq`, `cta-band`, `evidence`, `icon`.

### Course front matter schema

```yaml
title, card_line, headline, intro            # card + hero
format: cohort | self-paced
topic: [cybersecurity, risk, resilience, ai] # filters
audience: [leadership, specialists, all-staff]
languages: [en, lv]
length, live_hours, frameworks: []
next_cohort: "2026-11-10" | ""               # cohort CTA date; empty → "Register interest"
who_for, outcomes: [], adapts
roles: { intro, list: [{name, desc}] }       # cohort only
schedule: { title, columns: [], rows: [[]] } # weeks/months table
modules: [{name, line, time}]
time_commitment, instructor: {name, bio}
faq: [{q, a}], org_cta
```

## Content rules carried from the copy doc

- Lead with learner outcomes; "AI" is the mechanism, not the headline.
- Say "designed on" research findings, never promise effect sizes. No "2×", no "X% less time", no "90% completion".
- "Fewer hours in the classroom, more time practising" — never "less learning time". Every course states total effort.
- Privacy wording: "self-hosted platform; AI by Anthropic Claude". Never "full data sovereignty".
- Courses are "available in Latvian and English" — not "fully bilingual".

## Gaps that block or soften copy (from the doc)

| Gap | How the site handles it now |
|---|---|
| Profile-based cohort grouping not built | Pillar 2 says "structured cohorts with defined roles"; the area-of-work grouping is shown with a **Coming soon** tag. Course pages say cohorts are *formed by sector* — OK only if the instructor does this manually. **Confirm.** |
| Role-assignment UI missing | Role descriptions stay on course pages (they describe the course design). |
| No certificates / export / SSO | Not listed as features. Shown on `/for-organisations/` under "On our roadmap". |
| No privacy policy / terms / consent | Placeholder pages; **launch blocker**. |
| Hosting location unknown | `params.hostingLocation` empty → trust copy omits the country. |
| Spaced review learner view missing | Spacing not in the evidence strip. |

## Open questions

1. **Platform URL** — real URL for sign-in / start / join (placeholder `https://app.sparkurity.com`).
2. **Hosting location** — can we say "in the EU"?
3. **Legal entity** for footer, privacy policy and terms.
4. **Pricing** — show prices, "from €X", or "on request" (currently "price on request").
5. **Proof** — any pilot numbers (completion, time saved by skipping, pre/post scores)?
6. **Instructors** — names, credentials and bios for the three cohort courses; next cohort dates.
7. **[confirm] values** in the catalogue: Course 1 length (30 min vs 3 min), Course 2 length, weekly self-study hours, Course 4 length (5 weeks proposal), Digital Law scope (Data Act?).
8. **Contact form** — Netlify Forms OK, or route to the platform / an email address?
9. **Analytics** — reuse the jurispuce.com GA/LinkedIn tags, new properties, or none (no consent banner yet)?

## Build phases

1. **Scaffold + layouts** (this commit): config, design system, all templates, real copy from the doc, placeholder legal pages.
2. **Content review**: resolve open questions and [confirm] values; instructor bios; cohort dates.
3. **Legal + trust**: privacy policy, terms, cookie consent (if analytics), sub-processor list.
4. **LV**: `i18n/lv.yaml`, `*.lv.md` translations, language switch in nav.
5. **Launch**: Netlify site from this repo, DNS for sparkurity.com, redirect/remove the sparkurity.com alias from the jurispuce.com Netlify site, SEO (sitemap, OG images, canonical).

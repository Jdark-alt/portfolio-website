# Decisions log

What Jerry decided, and what it changes on the site. Newest first.

## 24 Nov 2026: answers to the discovery questions

| Topic | Decision | What the site does |
|---|---|---|
| Domain | `jerryfernandes.work` (to be bought) | Canonical URLs, sitemap and Open Graph use `https://jerryfernandes.work`. |
| Visual direction | Not chosen yet; wants to see the three live first | All three are built as switchable token sets. `direction:` in `src/content/site.yaml` sets the default. |
| Headline | "Six years explaining B2B software. Now I build it." may be cheesy; gathering opinions | Eight headline options and three standfirsts in `src/content/home.yaml`, switchable in preview mode. See `docs/copy-options.md`. |
| Résumé | Don't link the current PDF (it names the game "Siegeline"); a new one is coming | `resume: ""` in `site.yaml` hides every résumé link. Set it to `/resume.pdf` once the new file is in `/public`. |
| Exploit numbers | Exact figure doesn't matter; pick one that shows the exploit was fixed | Uses the 8 Nov sim study (19 → 2 designs breaching above 40%), which matches the résumé. |
| v34 economy | v34 is the latest version; nothing changed since | Treat v34 as the current, live build. The economy-iteration image's "retuned" numbers describe v34's own tuning; to be written up in the TPTD chapters. |
| v33 gate | Jerry wasn't sure what was being asked | Re-asked in plain language (see open questions below). |
| Email | `1.jerrfernandes@gmail.com` is correct (no "y") | Shown in the footer, mobile menu and Contact. |
| Phone | Show it on the site | `+91 97234 63461` in the footer, mobile menu and Contact, with a copy button. |
| Uber interviewees | Replace real names | The Uber PDF will be shown with names replaced by U1 to U10 (the case-study viewer step). |
| Zepto | Don't name the other student; the project was entirely Jerry's | No co-author is named anywhere on the site. |
| TPTD collaborator | None; TPTD was entirely Jerry's | No collaborator mentioned. Role line: "My project end to end." |
| Extra content | Use as much of it as possible, woven into the story | Every screenshot and explainer is mapped to a chapter in `docs/discovery/README.md`. |
| Photo | Placeholder for now | About page gets a placeholder; no photo on Home. |
| Analytics | Basic, no cookies | Cloudflare Web Analytics (cookie-free). Add the token to `analyticsToken` in `site.yaml`, or switch it on in Cloudflare Pages. |
| Cin7 page | Not now | Not built. |
| Live preview | Wants to see the animations live | Hosted preview link, plus a GitHub Pages workflow (needs Pages switched on once). |

## Still open

1. **The v33 decision, in plain words.** In v33 you added the crowding fee and removed the per-tower build fee. The simulations then showed the attacker winning much less often (down 19 points with sabotage on and 26 with it off), which broke the "no more than 10 points" rule you'd set. What did you do next? For example: shipped it anyway because defenders needed help, retuned something in v33.1 or v33.2, or reverted part of it. One or two sentences is enough; it becomes a short "what I did when my own gate failed" story.
2. **A Mindkraft spec.** For the spec viewer I need one real spec you handed to Claude Code, as Markdown or a Doc. Ideally the Berserk redesign or the Quest Composer spec, because they have the sections the viewer highlights: Non-goals, Open decisions and tests. A whole file is fine; I'll pick the excerpt and show it to you first.
3. **The Airtribe briefs (optional).** Each case-study page opens with "The brief": the task the program gave you, in one or two lines (e.g. "Write a PRD to improve retention for a fitness app"). If you remember them, send one line per assignment. Otherwise I'll write each from what the PDF itself says it answers.

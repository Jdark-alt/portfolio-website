# Discovery: PM portfolio for Jerry Fernandes

Step 1 of 6 · 24 Nov 2026 · Status: **waiting for your answers** (section 8)

What's in here:

1. What I pulled and read
2. Content inventory: what's usable, what conflicts, what's missing
3. Sitemap
4. Chapter outlines for Mindkraft and TPTD, with the skill-ledger mapping
5. Case-study plan
6. Three visual directions (static mockups in `directions/`, screenshots in `directions/shots/`)
7. Stack: what I'd keep from your brief and what I'd change
8. Questions

---

## 1. What I pulled and read

Everything in Drive › `PM interview evidence` (76 files, 65 MB) is now in `/source`, byte for byte, in the same folder structure. Two exceptions:

- The folder `TPTD (Siegeline)` is saved as `source/TPTD/`, because you want the game called TPTD. The files inside are unchanged.
- The three Google Docs are exported twice: `.md` (readable, diffable) and `.docx` (closest to the original).

I read every file: both evidence packs, the work-experience doc, the résumé, `CAPTIONS.md`, the TPTD image index, all 9 Airtribe PDFs (98 pages) and all 57 images.

---

## 2. Content inventory

### 2.1 Documents

| Source | What it is | How the site uses it |
|---|---|---|
| `Mindkraft/Mindkraft PM Evidence Pack` | 90 chats, Mar–Nov 2026: skills, top 5 decisions, roadmap, gaps, shotlist | The source of truth for the Mindkraft page. Every claim on that page traces back to a line in it. |
| `TPTD/TPTD PM evidence pack` | 19 Oct–22 Nov 2026: skills, top 5 decisions, roadmap, gaps, shotlist | The source of truth for the TPTD page. |
| `Jerry Fernandes Work Experience` | Odoo and OpenXcell duties, MA thesis title and abstract | Experience page and the thesis section. |
| `Jerry_Fernandes_Resume_PM.pdf` | 1-page résumé | Download link; cross-check for every number. **Contains "Siegeline" twice** (Q4). |
| `Mindkraft/App screenshots/CAPTIONS.md` | Provenance for each Mindkraft screenshot (commit, date, demo data) | Becomes the caption and alt text source. |
| `TPTD/Screenshots/README – image index` | Provenance for each TPTD screenshot (build, commit, source file) | Same. |
| 9 Airtribe PDFs | 6 assignments; three of them have two documents | Six case-study pages (section 5). |

### 2.2 The proof bank (numbers I'm allowed to use)

Only these numbers appear on the site. Each one has a source, and nothing gets rounded up.

**Mindkraft**

| Number | Exact wording to keep | Source |
|---|---|---|
| 2 | Claude Haiku features in production (Weave My Web, Quest Composer) | Pack §2g |
| ≈ ₹2 | per query, **your own estimate** (the pack labels it that way, so the site will too) | Pack §2h |
| 50 / 26 | unique sign-ups / seven-day actives by 11 Jun, no paid marketing | Pack §1, GA |
| 2m 38s · 1.2 | average session · sessions per user (11 Jun); peak average 14m 52s (22 May) | Pack §1 |
| 5 of ~20 | early users who called themselves evangelists (19 Apr) | Pack §1 |
| 7 | modes | Pack §1 |
| 15+ | specs handed to Claude Code, Jul–Sep | Pack §2b |
| 161 | notes in the docs vault, 1,442 functions covered, 0 broken links | Pack §2b |
| 31 | checks in the Grit exploit test | Pack §2j |
| 3 / 7 days · 1 / 30 days · 20 / 7 days | Composer limit · Map rebuild limit · abuse ceiling | Pack §2h |
| 280 · 40 | max request characters · max activities sent to the model | Pack §2h |
| 2 | custom GA4 events firing at the 15 Jun audit (an honest gap) | Pack §1 |

**TPTD**

| Number | Exact wording to keep | Source |
|---|---|---|
| 25 builds, 5 weeks | v9 → v34, 19 Oct → 22 Nov | Pack §1 |
| 12+ | build specs | Pack §2b |
| 17 · 15 | acceptance tests in the v22 spec · tests in the v34 spec | Pack §2b |
| 258 | bot matches per mode for v33 | Pack §1 |
| 1,000 | generated maps checked for the starter maze | Pack §1 |
| 5 | prototype rounds on the attacker Wave screen | Pack §2i |
| 10+ | features cut or deferred | Pack §2c |
| 8 | iterations of sabotage, wall charges → weak walls | Pack §2j, image 31 |
| 5.6% → 9.9% | packed towers' leak, build fee → crowding fee (packing no longer the strongest layout) | Image 23 |
| Exploit fix | **conflict, see 2.3** | |
| v34 economy | **conflict, see 2.3** | |

### 2.3 Conflicts and corrections I found

These need a decision from you before they go on a page.

1. **Exploit fix, 19 → 2 or 18 → 5?** Your résumé and image `03-sim-ridge-table` say ridge designs breaching above 40% fell **from 19 to 2** (8 Nov sim study). Image `34-exploit-fix` re-ran the command recorded in the repo against the build that actually shipped (v22) and got **18 of 35 → 5 of 33**. Its own footnote says the 8 Nov document "is not in the repo". → **Q5**
2. **Was the v34 economy retuned?** The pack (22 Nov) and image `12-v34-sim-results` say v34 shipped "as is", slightly defender-biased, with tuning levers identified. Image `32-economy-iteration` says it was **retuned and shipped**: Prospectors +35% / +31%, Mine payback 3.2 waves, attacker wins vs bots 38%. → **Q6**
3. **v33 gate tripped, response unknown.** Attacker wins fell 19 points (sabotage on) and 26 (off). The pack says "no record of my response". Image 33 mentions v33.2 reverting a unit buff after you lost three matches as defender. A failed gate plus a clear response is one of the best stories on the page, so I need the response. → **Q7**
4. **Weak-wall percentage.** The shotlist says "Bridge here skips 42%"; the actual screenshot says 36%. **I'll use the screenshot.**
5. **Wave screen count.** The shotlist says "Swarm ×8"; the screenshot shows ×6. **I'll use the screenshot.**
6. **Demo data.** Every Mindkraft screenshot uses a fictional demo user ("Aarav", with friends Meera and Kabir). Numbers like "3,446 total XP" in `11-analytics.png` are not your metrics. Every Mindkraft image will carry a "demo data" caption so nobody mistakes them for traction.
7. **The word "Siegeline"** appears in the résumé PDF (twice), in the TPTD pack title, and inside the image `32-economy-iteration.png` (a quoted design-doc title). It won't appear in any page copy, alt text or metadata. For the image, I'll rebuild that diagram as HTML (see 2.5), so the word disappears there too. The résumé is the remaining issue. → **Q4**

### 2.4 Screenshot → chapter map

**Mindkraft** (phone shots are 1179×2556 and real builds on demo data)

| Chapter | Images |
|---|---|
| 1 Spark | `01-my-activities` (the core loop), explainer 01 timeline (as data) |
| 2 Framing | `A-activities-before` (the old 3-tile, tab-heavy screen) |
| 3 Decisions | `07-modes-picker`, `09-grit-header-ledger`, `02-map-web`, `07b-berserk-setup` |
| 4 Building | explainer 02 (as data for an animated diagram); **no real Mindkraft spec text exists in /source** → Q10 |
| 5 The AI inside | `03-map-goal-input` → `02-map-web` → `02b-map-web-wildcard` → `02c-map-branch`; `04-quest-composer-request` → `05-quest-composer-draft`; `12-privacy-ai-section`; explainer 03 (as data) |
| 6 Breakage | explainer 05 (Grit exploit) and 04 (Berserk) as data; `09b-grit-ledger` |
| 7 Feedback and iteration | **Slider 1:** `A-activities-before` ↔ `A-activities-after`. **Slider 2:** `D-modes-before-2-sheet` ↔ `D-modes-after-2-sheet`, plus `D-modes-before-3-scrolled` and `D-modes-after-3-settings` |
| 8 Measuring | explainer 06 numbers (rebuilt), `11-analytics` (labelled demo data) |
| 9 What's next | none needed |
| Spare | `06-quest-detail`, `08-berserk-active`, `10-versus-board`, composed `single-*` / `pair-*` (good for OG images) |

**TPTD** (2× captures of v34 unless stated)

| Chapter | Images |
|---|---|
| 1 Spark | `10-start-screen` ("Two Player Tower Defence"), `13-wave-in-motion` |
| 2 Framing | `31-sabotage-lifecycle` (as data), `05-weak-walls` |
| 3 Decisions | `21-before-after-tower-art` (the no-3D decision paid off in 2D), `06-prospector-toggle`, `07-mine-tooltip`, `35-modes` (as data) |
| 4 Building | `11-v34-spec-excerpt` (transcribed into the spec viewer), `33-workflow` (as data) |
| 5 The simulation gate | `34-exploit-fix` heatmaps and `03-sim-ridge-table` (rebuilt as an interactive heatmap), `12-v34-sim-results` |
| 6 Breakage | `32-economy-iteration` (rebuilt), `04-crowding-placement` |
| 7 Feedback and iteration | **Sliders:** `20` wave screen v21.1 ↔ v22, `22` starter maze v32 ↔ v33, `23` build fee ↔ crowding fee, `24` Splash/Chain v30 ↔ v31. **Annotated:** `30-annotated-wave-screen` (its six callouts become live hotspots on `01-wave-screen`). Mobile: `08-bet-panel-390px` |
| 8 Measuring | `12-v34-sim-results`, `22`'s 1,000-map medians |
| Spare | `09-art-sheet` |

### 2.5 How I'll treat the images

- **`/source` stays untouched.** A script writes optimised copies to `src/assets/` (AVIF/WebP via Astro's `<Image>`).
- **TPTD screens are framed composites**, with a baked-in title, caption and footnote. For the site I'll crop to the clean game UI. The footnote's provenance ("v34, commit e6e1ca6, seed 22") moves into the caption text. That provenance is a credibility asset, so it stays visible.
- **TPTD before/after composites** are split into separate before and after crops for the sliders.
- **The 6 Mindkraft explainers and TPTD images 31–35 are mostly text and tables in a picture.** I'll rebuild them as native HTML/SVG components: the timeline, the workflow, the AI pipeline, before/after cards, the heatmap and the modes table. That makes them readable on a phone, accessible, searchable and animatable. It also gets rid of "Siegeline". The PNGs remain the reference for every number.

### 2.6 What's missing

| Gap | Impact | Who |
|---|---|---|
| GitHub repo to push to | **Blocker.** The container is temporary; unpushed commits disappear. | Q1 |
| Final domain | Canonical URLs, sitemap, OG tags | Q2 |
| A real Mindkraft spec excerpt (e.g. the Berserk redesign or Quest Composer spec, with its Non-goals and Open decisions) | The Mindkraft spec viewer has nothing real to show | Q10 |
| "Why it mattered to me", for both projects | Chapter 1 needs your own voice | `TODO(Jerry)` |
| What you did after the v33 gate tripped | Chapter 6 of TPTD | Q7 |
| Approach, rationale and "what I'd do differently" for each Airtribe assignment | I can draft from the PDFs, but some of it only you can write | `TODO(Jerry)` |
| The Airtribe assignment briefs (prompt text) | Each case study opens with "the brief" | Q11 |
| Your part in the Zepto group work (vs Divakar's) | Ownership must be honest | Q12 |
| Lane-board prototype (`02-lane-board-prototype.png`, in the shotlist but not in the folder) | Nice to have for TPTD chapter 7 | Q13 |
| 50-sign-up story, 3.0 launch slide, vault graph view | Nice to have | Q13 |
| A photo of you | Optional, About page | Q14 |
| Loom walkthroughs | You said later; the component hides itself until a URL exists | none |

---

## 3. Sitemap

```
/                               Home: thesis, How I work, two project entrances, case studies, before product, contact
/work/mindkraft                 Project page, 10 chapters, skill ledger
/work/tptd                      Project page, 10 chapters, skill ledger
/case-studies                   Grid of 6, filterable by PM skill
/case-studies/b2b-ai-support    B2B AI customer-support platform strategy
/case-studies/vitafit-prd       VitaFit PRD
/case-studies/zepto-aov         Zepto AOV (group, with Divakar)
/case-studies/uber-pickup       Uber pickup research
/case-studies/matrimony-ux      Matrimony.com UX heuristic review
/case-studies/nykaa-ux          Nykaa UX analysis
/experience                     Odoo India, OpenXcell, the MA thesis
/about                          Short bio, résumé, email, LinkedIn
/404
/resume.pdf · /sitemap-index.xml · /robots.txt · /og/*.png (generated per page)
```

Home section order: Hero → How I work (the spine) → Mindkraft → TPTD → Case studies strip → "Before product" line → Contact.

**How I work.** Each step links to two real moments, one per project:

| Step | Mindkraft | TPTD |
|---|---|---|
| Frame | 3-level setup made optional, so new users earn XP first (ch. 2) | "Nerf wall charges" reframed as a two-sided tug-of-war (ch. 2) |
| Decide | Grit is earned, never bought (ch. 3) | Exploit fixed from sim data, not instinct (ch. 3) |
| Spec | Non-goals, open decisions, scenario tests A–H (ch. 4) | Why → rules → formulas → 15 tests → gate → out of scope (ch. 4) |
| Ship | Test repo → branch previews → 3.0 release (ch. 4) | 25 builds in 5 weeks; `main` only with your sign-off (ch. 4) |
| Measure | 50 / 26, reported with the gap (ch. 8) | 258 bot matches per mode before v33 (ch. 5) |
| Iterate | Map v1 → v3; the dated UI rebuilt into a design system (ch. 7) | Sabotage across 8 builds (ch. 7) |

---

## 4. Chapter outlines and the skill ledger

**Ledger rules.** There are 10 skills: Discovery, Problem framing, Requirements, Prioritisation, Roadmapping, Metrics, AI product judgement, UX, Execution, Go-to-market. Each chapter's content file lists the skills it lights, each with a short "proved by" label. The ledger is a side rail on desktop and a collapsible bottom bar on mobile, and it fills as you scroll. **It doesn't have to fill completely.** On TPTD, Go-to-market stays empty and says "not shown here, see Mindkraft". A ledger that admits a gap is more believable than one that lights up everything.

"Claude did / I did" markers appear wherever the pack says an idea was Claude's (e.g. "the reframe to hierarchy was Claude's; I accepted it", "ICP drafted by Claude, never validated", "Firebase over Supabase was Claude's recommendation").

### Mindkraft: "a habit app that pays you in effort" (working title)

| # | Chapter | Content (all from the pack) | Ledger: skill, proved by |
|---|---|---|---|
| 1 | The spark | Habit trackers are passive loggers; real-world feedback is too slow, so motivation fades. Mindkraft gives fast feedback until real results show. Started Feb 2026. Why it mattered: `TODO(Jerry)`, with a link to the MA thesis on meaning and motivation. | Discovery: "passive loggers, slow feedback" · Problem framing: "fast feedback until results show" |
| 2 | Framing | User: self-improvers who dropped habit apps; in practice friends and colleagues (the ICP was Claude-drafted and never validated, and the page says so). Positioning: "intent over automation" (yours, 19 Apr). The 3-level hierarchy blocking first XP → category made optional. Plateau at levels 17–19, then 30. Success metrics drafted in April, never instrumented. | Problem framing: "3-level setup → optional" · Discovery: "level-30 plateau, confirmed by users" · Go-to-market: "sold as a philosophy" |
| 3 | Decisions | Five Decision Cards (context → options → choice → why → cost): paid model with guardrails · Grit earned-only · Map rebuilt around real activities · Berserk fixed from usage data · level gates and the tour deleted. Plus the proposals you rejected: social feed, separate narrative screens, fog-of-war. | Prioritisation: "deferred features that need a big community" · AI product judgement: "Haiku behind one adapter" · UX: "deleted gates, not hid them" |
| 4 | Building | Timeline scrubber (Feb → Nov). Spec format: build order, "grep the live code first", non-goals, open decisions, paste-ready block. Scenario tests A–H. A living spec cut from 15 sections to 9 instructions. The vault: 161 notes, 0 broken links. Animated diagram: live file swaps → test repo → branch previews → spec handoff → vault. Spec viewer: needs Q10. | Requirements: "non-goals, open decisions, tests A–H" · Execution: "15+ specs, 161-page vault" |
| 5 | The AI inside | The animated pipeline: **user asks** (explicit trigger, ≤ 280 chars, ≤ 5 goals) → **limits** (3 plans / 7 days, 1 rebuild / 30 days, abuse cap 20 / 7 days, counted only on success, ≤ 40 activities, capped instances) → **minimal context** (no name, email, ID, friends) → **Claude Haiku** behind one adapter → **validator repairs** (merge duplicates, extra new habits → one-off tasks, drop loops and broken links) → **client re-validates** → **user accepts, links or rejects** (rejections feed the next prompt). Side panels: cost (≈ ₹2 a query, your estimate), licensing (NVIDIA free tier was dev-only → one-file switch), privacy (asia-south1, policy checked against code), the 1,024-token truncation catch, the "Revise" action removed. Then the honest panel: no evals, no bias review yet, and the 20-request eval set you'd build. | AI product judgement: "repair, don't reject" · Requirements: "prompt contract and output schema" · UX: "nothing added without a yes" |
| 6 | Breakage | Incident cards: 20 Mar merge broke streaks for live users → release process · 23–26 Apr data loss → 3 safeguards · complete → undo farmed Grit → symmetric fix and a 31-check test · Berserk target broken for every user · reminders 30–45 min late → scheduler · frozen XP/hr on leaderboards · strict validator threw away whole quests → repair. Plus "AI mistakes I caught", dated. | Execution: "31-check Grit test" · Discovery: "data loss traced from one report" · AI product judgement: "7 AI errors caught" |
| 7 | Feedback and iteration | "Dated UI" → design principles → rebuild (**slider**: Activities). Modes sheet → two-step (**slider**). Map v1 → v3. Quests mockups v1 → v3 with an 8-point punch list. Pilot testers shaped Group Challenges. Bigger expand button; in-app-browser sign-in fix. | UX: "one hero element per card" · Discovery: "pilot testers shaped Group Challenges" |
| 8 | Measuring | Count-up callouts: 50, 26, 2m 38s, 5 of ~20. Then, at the same size: only 2 GA4 events, no D7 tracking, level-gate removal never measured, usage declined by Nov. "What I'd measure now": the 5 events from your gap table. | Metrics: "reported 26 actives against 50 sign-ups" |
| 9 | What's next | Now / Next / Later from the pack, with "nothing in Next or Later is committed" kept visible. Monetisation principles: free = the whole game, Pro = limits, Grit never sold. | Roadmapping: "Now / Next / Later, labelled honestly" · Go-to-market: "Pro sells limits, never currency" |
| 10 | What this proves | The ledger summary; each skill links back to its chapter. | none |

### TPTD: "Two Player Tower Defence" (working title)

TPTD has no AI inside the product (the computer opponent is rule-based), so chapter 5 becomes **The simulation gate**. "AI product judgement" here means judgement about building with AI agents, and the label says so.

| # | Chapter | Content | Ledger: skill, proved by |
|---|---|---|---|
| 1 | The spark | Classic tower defence is single-player against fixed waves. Make both sides human, with hidden simultaneous planning. Reference: Age of Empires. Why it mattered: `TODO(Jerry)`. | Discovery: "TD is single-player by default" · Problem framing: "both sides human, planning at once" |
| 2 | Framing | Wall charges won almost every match → reframed as "a tug-of-war where both sides permanently reshape the map". Defender effort (3–5 min a round) vs attacker effort → sappers that must survive. Depth collapse (about 3 tower types). Targets written into specs: sapper landing 44–65%, economy +20–30%, Mine payback about 3 waves. No persona beyond friends, said plainly. | Problem framing: "tug-of-war, not 'nerf charges'" · Discovery: "found from playtests" · Metrics: "targets set before building" |
| 3 | Decisions | Five Decision Cards: exploit fixed with data · sabotage from a click to a risk · no to 3D · Prospectors over Looters, plus "scrape" (asymmetry you spotted) · expert exploit fixed without touching beginners (40-coin tower unchanged). Plus the cut list (3D, tiles, Haulers, Looters, a variety fee…). | Prioritisation: "10+ features cut" · UX: "the economy as one toggle" · Roadmapping: "layout → economy → power-ups" |
| 4 | Building | Timeline scrubber v9 → v34. Spec viewer: the v34 Economy excerpt (Why · Design rules · Gate · Tests) with Non-goals and Gate highlighted. Workflow: design in chat → spec → Claude Code → 4 test suites + bot sims → gate → ship; branch isolation and a protocol bump. Honest marker: "Claude drafted the specs. I set the scope, rules and corrections, and approved them." | Requirements: "17 tests in v22, 15 in v34" · Execution: "25 builds in 5 weeks" · AI product judgement: "specs exhaustive because agents guess" |
| 5 | The simulation gate | Gate rule: "if attacker win rate moves more than 10 points, or any strategy more than 20, flag it and don't retune; the user decides from the data". Interactive heatmap, health × speed, before ↔ after (Q5 decides the numbers). 258 matches per mode, 1,000 maps, 35 designs × 6 defences. Cost note: v34 sims kept small to save weekly usage. | Metrics: "exploit designs >40%: 19 → 2 / 18 → 5" · Execution: "every release behind a gate" |
| 6 | Breakage | v17/v18: Claude Code invented a compounding price counter → exact formulas in v18 · Claude's "move fees to the attacker" loop caught · the concentrated-tower exploit (wave 8, 0 of 30 through) · v33 gate tripped (Q7) · v34 economy missed both targets (Q6) · online play failing across networks (empty relay setting). | AI product judgement: "caught the agent's invented counter" · Execution: "exact formulas after a bad build" |
| 7 | Feedback and iteration | Wave screen: 5 prototype rounds (**slider** v21.1 ↔ v22; **annotated** screen with 6 hotspots). Starter maze (**slider**), crowding fee (**slider**), Splash/Chain chips (**slider**). Sabotage over 8 builds as a timeline. Helpers "good, not optimal". Everything fits at 390 px. | UX: "5 prototype rounds on one screen" · Discovery: "each step answered a playtest" |
| 8 | Measuring | What's measured is all bots, and the page says that first. What isn't: players, sessions, retention, match logs (none). What you'd add: an anonymous match log and 3 recorded playtests with newcomers. | Metrics: "bot data labelled as bot data" |
| 9 | What's next | Now (tuning levers, choose the next depth feature) / Next (Power-ups, target priority, formations) / Later (tiles, role crossover, music, Rewind, revisit 3D, monetisation). No dates exist; the page won't invent any. | Roadmapping: "modular: base game, then modes" |
| 10 | What this proves | Ledger summary; Go-to-market left visibly empty. | none |

---

## 5. Case-study plan

The order is for a Cin7 "PM, AI" reader, but it works generally. Each page has: the brief · my approach and rationale · key decisions · the PDF page viewer (pages pre-rendered to images, with a download link) · Loom (hidden until a URL exists) · what I'd do differently.

| Case study | PDFs | Skill tags | What I can draft / what's `TODO(Jerry)` |
|---|---|---|---|
| **B2B AI customer-support platform strategy** | 9 slides | Go-to-market, AI product judgement, Problem framing, Roadmapping | Draft: vision, 5-step problem statement, outcome-based pricing (per query solved, judged by no repeat query in 7 days), land-and-expand. Closest to Cin7 (B2B, ERP buyers, AI agents on enterprise data). TODO: brief, what you'd do differently. |
| **VitaFit PRD** | PRD (10 pp) + key-decisions deck (5) | Requirements, Metrics, Prioritisation | Draft: problem, 30-day retention target, 3-phase A/B plan with pass rules, guardrails, event pipeline, design and engineering briefs. TODO: brief (the PRD says "assuming VitaFit already offers streaks", so the brief matters). |
| **Zepto AOV** (group, with Divakar) | Deck (10) + research doc (26 pp) | Discovery, Prioritisation, Metrics | Draft: survey (n = 29) and 7 interviews, 4 segments, RICE (reminders 96), A/B with guardrails. TODO: your share of the work (Q12). |
| **Uber pickup research** | 10 slides | Discovery, Problem framing | Draft: 10 interviews, "situation, not demographic" segmentation, 3 of 10 switched apps, airport sizing (~23M pickups a year), 3 ideas. **Contains interviewees' full names** (Q9). |
| **Matrimony.com UX review** | Deck (7) + research notes (16 pp) | UX, Problem framing | Draft: 10 heuristics + Hick / Fitts / Jakob on one critical flow, severity ratings, 10 fixes. |
| **Nykaa UX analysis** | 12 slides | UX, Discovery | Draft: 3 flows, good/bad findings, 1 user review. The deck itself notes only one user was interviewed; that's a natural "what I'd do differently". |

**Adding a new one** = one Markdown file in `src/content/case-studies/` plus a folder of PDFs; `npm run pdf:render` makes the page images. (The README in step 6 will spell this out.)

---

## 6. Visual directions

Open `directions/*.html` in a browser, or look at `directions/shots/`. All copy is a draft. Fonts are free (OFL) and self-hosted.

### A · Working Draft: the portfolio as a living spec
`shots/a-working-draft-1440.png` · `shots/a-working-draft-390.png`

- **Mood:** an engineering spec someone typeset with love. Paper, ink, one signal colour. Numbered sections (§0, §1…), a document header borrowed from your own VitaFit PRD (Author · Role · Status), mono marginalia, visible column hairlines that fade out.
- **Type:** Archivo (variable, with a width axis: semi-condensed for display, normal for text) + Martian Mono for labels.
- **Palette:** paper `#F2F0E9` · ink `#111110` · graphite `#5C5A53` · rule `#D3CFC3` · **International orange `#FF4F00`** (fills and markers; text uses `#B23A00` for AA contrast).
- **Hero:** the past sentence set in warm grey, the present one in black, with an orange rule under "build" that draws in.
- **Motion:** column lines draw down on load. Headlines reveal line by line through masks. Section numbers tick. The ledger behaves like a traceability matrix whose cells fill with orange as chapters prove skills. Decision cards unfold. Spec excerpts get "redlined" as you read.
- **Risk:** the most "designed-document"; it needs restraint so it doesn't read like a theme.

### B · Long Read: the portfolio as a serious magazine feature
`shots/b-long-read-1440.png` · `shots/b-long-read-390.png`

- **Mood:** a long-form feature (FT Weekend, Stripe Press). Serif-led, a contents list, roman-numeral chapters, footnotes for "Claude did / I did", pull quotes. It leans into "tells the story of a product better than most PMs" and your philosophy background.
- **Type:** Newsreader (variable, with an optical-size axis: display cuts at 72 pt, text cuts at body size) + Schibsted Grotesk for labels and numbers.
- **Palette:** cream `#F5F1E8` · ink `#1A1814` · graphite `#5F594E` · **ultramarine `#1F3BD1`** (one flat colour, no gradients).
- **Hero:** a big serif statement with "Now I build it." in italic ultramarine, a standfirst, a byline, and a table of contents in place of a menu.
- **Motion:** the slowest and most literary. Words settle into place as the standfirst is read. Chapter openers get a drop-numeral. Footnotes slide in at the margin as the sentence that references them scrolls past. Screenshots sit as "plates" with captions.
- **Risk:** the least "technical-PM" signal at first glance; the AI pipeline and heatmaps have to carry the rigour.

### C · Night Blueprint: the portfolio as a drafting table at night
`shots/c-night-blueprint-1440.png` · `shots/c-night-blueprint-390.png`

- **Mood:** a blueprint sheet at night: a dot grid, crop marks, "Fig. 1" plates, instrument-style readouts. Your products' own UIs are dark (both apps), so screenshots sit natively instead of as dark rectangles on paper.
- **Type:** Instrument Sans (variable, condensed for display) + JetBrains Mono.
- **Palette:** near-black `#0E0F10` · bone `#ECE9E1` · dim `#9A978F` · **instrument amber `#FFB000`**.
- **Hero:** a condensed headline plus "Fig. 1: How I work", a loop diagram that draws itself, with the ledger beside it.
- **Motion:** plotter-style line drawing (SVG strokes drawn on scroll), readouts that count up, the loop's nodes lighting amber as you reach each step's evidence.
- **Risk:** dark plus amber plus mono can drift towards "developer tool". It needs editorial discipline to stay serious.

**My recommendation: A**, borrowing B's footnote device for "Claude did / I did". A turns the thing you're best at (specs with non-goals, open decisions and tests) into the visual language itself, so the site's form argues the thesis. It's also the most Cin7-legible: B2B, operational, precise. If you want the story-telling to lead, choose B. If you want the screenshots to look their best, choose C. Mixing is fine: e.g. A's system with C's dark "plates" for product screenshots.

---

## 7. Stack: what I'd keep and what I'd change

Keep: **Astro (static output, content collections, MDX, TypeScript)**, **GSAP + ScrollTrigger**, **Lenis** (off under reduced motion), Astro `<Image>` with AVIF/WebP, self-hosted variable fonts, the click-to-load Loom facade.

Changes, each with a reason:

1. **GSAP's full plugin set** (SplitText, Flip, DrawSVG, CustomEase). These are now free, and they give the "Framer-like" feel you asked for: SplitText for text that assembles, Flip for layout morphs (card → page hero), DrawSVG for self-drawing diagrams, custom spring-like eases.
2. **Native cross-document View Transitions** instead of a client-side router. The home card for Mindkraft morphs into the Mindkraft page hero, and pages stay plain static HTML. This works in Chrome, Edge and Safari 18.2+; Firefox simply navigates normally.
3. **No WebGL.** I'd skip the WebGL moment. Every effect in these directions is crisper as SVG/CSS, costs nothing on a mid-range Android, and has no fallback problem. If you still want one, the only candidate I'd defend is the Mindkraft "web" in the hero, and I'd prototype it last.
4. **PDF pages rendered locally and committed** (`npm run pdf:render`, using poppler's `pdftoppm`). Cloudflare Pages' build image has no poppler, and node-canvas is fragile there. The build only ever reads images, so deploys stay fast and deterministic.
5. **Schema-checked content.** Zod schemas on every collection (chapters, decisions, skills, metrics, case studies) and a build that **fails on unknown skill names, missing image alt text, or a metric with no source field**. That's the "never invent a number" rule enforced in code. `TODO(Jerry)` markers render as a visible yellow tag in dev and preview builds. Production builds list any remaining TODOs in the build log but still deploy.
6. **Cloudflare Web Analytics** (cookie-free, no banner). Optional, but measuring your own portfolio is on-brand. (Q15)

Budgets I'll hold myself to: under 100 KB of JS gzipped on project pages (less elsewhere), LCP under 2.0 s on a throttled Moto G-class profile, CLS under 0.05, and every animation with a reduced-motion state that is complete, not just faster.

---

## 8. Questions

Each one has my default in brackets, so you can answer only the ones you disagree with.

**Blockers**

1. **GitHub repo.** This container is temporary and has no remote. Which repo should I push to? Create an empty one (e.g. `jerry-portfolio`) and tell me its `owner/name`. *[No default: until then, commits are at risk.]*
2. **Domain.** What's the domain (or the one you plan to buy)? *[I'll use `https://jerryfernandes.com` as a placeholder in one config value.]*
3. **Visual direction:** A, B or C, or a mix? *[A, plus B's footnotes.]*

**Facts to confirm**

4. **Résumé.** The PDF says "Siegeline" twice. Will you send an updated PDF, or should the site link to this one for now? *[I won't ship the résumé until you replace it.]*
5. **Exploit numbers.** Use the 8 Nov study (19 → 2, matches your résumé), the shipped re-run (18 of 35 → 5 of 33), or both? *[Both: "the study predicted 19 → 2; the shipped build re-measured at 18 → 5". The gap between plan and outcome is itself a credibility signal. Your résumé would then need to match.]*
6. **v34 economy.** Did it ship as is, or was it retuned (Prospectors +35%, Mine payback 3.2)? *[Retuned, per image 32 and CLAUDE.md, but I need you to confirm.]*
7. **v33 gate.** When attacker wins dropped 19 and 26 points, what did you decide and why?
8. **Email.** The résumé says `1.jerrfernandes@gmail.com` (no "y" in "jerr"). Is that the address to show? Phone number on the site? *[That email; no phone, since the résumé has it.]*
9. **Uber interviews.** The PDF names all 10 interviewees in full. Can they be published? *[No. I'll replace names with U1–U10 in the rendered pages and ship a redacted PDF.]*

**Content only you have**

10. **One real Mindkraft spec** (`.md` or Doc) for the spec viewer: ideally the Berserk redesign or Quest Composer spec with its Non-goals and Open decisions. *[Without it, the Mindkraft spec viewer shows the format with a TODO.]*
11. **Airtribe briefs.** The prompt or brief text for each assignment, if you have it. *[TODO(Jerry) placeholders.]*
12. **Zepto group work.** Which parts were yours vs Divakar's? OK to name him? *[Name him; ownership marked TODO.]*
13. **Nice-to-haves:** the lane-board prototype screenshot, the 50-sign-up story, the 3.0 launch slide, the vault graph view, 2–3 public links to Odoo work (a customer-success video, a whitepaper). *[Built without them.]*
14. **Photo** for About? *[None. A typographic monogram instead.]*

**Preferences**

15. **Analytics** on the portfolio (Cloudflare Web Analytics, cookie-free)? *[Yes.]*
16. **The collaborator on TPTD:** credit them by name? *[Credit them as "a friend who co-designs and playtests", unless you give me a name.]*
17. **A tailored page for Cin7**, e.g. `/for/cin7`, unlisted and noindex, mapping your evidence to the PM, AI job description (and later your one-page spec for an AI reorder-point feature, which your gap table suggests). *[Not now; easy to add later.]*

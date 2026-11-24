# Siegeline (TPTD): PM evidence pack

*Source: this project's chats (19 Oct to 22 Nov 2026), its 9 docs, its memory notes and the synced copy of the `Jdark-alt/tptd` repo (specs, sim reports, tests). The live GitHub history wasn't checked, so the commit log and dates are unverified. Where an idea came from Claude and I only approved or rejected it, that's noted. Keep that line clear when telling these stories in interviews.*

---

## 1\. Project snapshot

**One-line pitch:** Siegeline is a 1v1 browser strategy game. One player designs and times an army, the other builds a maze of fully customisable towers, and both plan at the same time before the wave plays out.

**Target user:** Strategy and tower-defense players who want a player-vs-player match, starting with my friends and collaborator. Reference point: Age of Empires (simple units whose placement and interactions create depth). **No evidence** of a defined persona or market segment beyond that.

**Problem it solves:** Classic tower defense is single-player against fixed waves. Siegeline makes both sides human, with hidden simultaneous planning, so every match depends on reading your opponent.

**My role:** I own the product: vision, design rules, every decision. Claude (chat) helps with design, prototypes and specs. Claude Code does all the building. I don't write code. A friend collaborates on design and playtests.

**Timeline (inside this project):**

| Date (2026) | Milestone |
| :---- | :---- |
| 19 Oct | Project chats begin at **build v9**. Wall charges replaced by Bridges, tested on a separate `bridges` branch. Random terrain added |
| 19–22 Oct | Defender onboarding spec (hot tiles, starter segments, test run). Sapper sabotage rework. v18 pricing fix. v19–19.2 wave planner. Auto-maze, Remove & Inspect, Undo spec |
| 24 Oct | Online play fixed across networks (relay setting was empty). Players in India and Canada |
| 5 Nov | v21 spec: starter maze, scaling payout, Frost/Chain rework, 30-item UI audit. Retention ideas chosen |
| 8 Nov | Simulation study of the health × speed exploit. v22 attacker Wave screen after 5 prototype rounds |
| 10–11 Nov | v23 balance pass. v25 move-fee sims |
| 12–13 Nov | Decided against 3D. v31 art and slider spec. v32 polish spec |
| 15 Nov | Mode structure decided. Economy design doc. v33 layout spec (crowding fee, Auto-maze, pot, 30 s window) |
| 18 Nov | v33 built. v34 Economy spec |
| 22 Nov | **v34 live** ("works well, a bit biased toward the defender, acceptable for now"). Next depth features under discussion, none chosen |

**Current status:** v34 is live on GitHub Pages, with a relay server on Render's free tier. Two modes, Simple and Advanced (Advanced \= Sabotage \+ Economy). Play options: vs the computer (Easy, Normal, Hard), two players on one device, online multiplayer, and spectating.

**Current scale:**

- **Real users, sessions, retention: no evidence.** No analytics, player counts or match logs. Online play has been friends only (India and Canada).  
- **Playtests:** my own plus my collaborator's, written up qualitatively (e.g. "wave 8, keep 889/1000, 0 of 30 units through"). No count of playtests recorded.  
- **Builds shipped:** v9 to v34 in about 5 weeks.  
- **Simulation volume:** 258 bot matches per mode for v33; 1,000 generated maps checked for the starter maze and crystal sites; 35 unit designs on the exploit "ridge" tested against 6 defenses.  
- **Quality:** four automated test suites that every spec requires to pass.

---

## 2\. Skill evidence

### a) Discovery and problem framing

**1\. Wall charges made the game a one-trick pony**

- **What I did:** Noticed attackers almost always won with wall charges, and defenders' only counter was rebuilding the whole maze every wave.  
- **Decision \+ alternatives:** Reframed the goal as "a tug-of-war where both sides permanently reshape the map", not "nerf charges". Replaced charges with Bridges. Rejected a refund penalty on rebuilding.  
- **Why:** The penalty would have broken another goal: fluid, low-commitment maze planning.  
- **Outcome:** On the test branch, Bridges "work well and are fun" and the rising cost "felt right".  
- **Artifacts:** Bridges and terrain specs (19 Oct). Screenshot: a map with bridges and rock/rough terrain.  
- **Resume line:** Diagnosed a dominant-strategy problem from playtests and redesigned the mechanic into a two-sided map tug-of-war.

**2\. Defender effort vs attacker effort**

- **What I did:** Spotted that defenders spent 3–5 minutes a round tuning, while an attacker could win by scaling one basic army, and one missed gap let a bridge through.  
- **Decision \+ alternatives:** Made sabotage a physical "sapper" unit that must survive the maze. Rejected instant placement, and rejected a one-round warning delay as too weak.  
- **Why:** Effort and risk should match on both sides.  
- **Outcome:** Sapper landing rate became a tracked metric, target 44–65%.  
- **Artifacts:** "Sappers & Sabotage Rework" and v18 Claude Docs.  
- **Resume line:** Reframed a fairness complaint into a risk-for-reward sabotage system with a measurable landing-rate target.

**3\. The "concentrated tower" exploit, found in a playtest**

- **What I did:** A playtest showed three maxed, minimum-range towers in a looping maze stopping a full wave (wave 8, 0 of 30 through).  
- **Decision:** Treated it as a pricing problem, not a balance tweak. Constraint: don't change the game for new players, whose default 40-coin tower stays the same.  
- **Outcome:** See decision 5 in section 3\.  
- **Artifacts:** `v23-balance-pass.md` (the "Why" section).  
- **Resume line:** Turned a playtest edge case into a root-cause pricing fix that left the new-player experience unchanged.

**4\. Depth collapse and solo play**

- **What I did:** Framed the next problem (Nov): play had collapsed to about 3 tower types and cycling unit types, solo play against the computer was too easy, and another player isn't always available.  
- **Decision:** Set "map-wide builds and very diverse armies" as the depth goal. The Economy update was the first step.  
- **Artifacts:** The Economy design doc.  
- **Resume line:** Defined the product's next problem as strategic depth and set measurable spread and diversity goals for it.

**5\. Retention**

- **What I did:** Named the feeling that after a match there's "nothing to do" despite all the options.  
- **Decision:** From six ideas Claude proposed, picked three: Rewind, a round-by-round reveal with a near-miss stat, and shareable defenses.  
- **Outcome:** **No evidence** these were built.

**Weakness:** all discovery comes from my own and my collaborator's playtests and from bot simulations. No interviews or feedback from outside players.

### b) Requirements and specs

- **What I did:** Directed more than a dozen build specs for Claude Code: v18, v19, v19.1, v19.2, v21, v22, v23, v31, v32, v33 and v34, plus the defender onboarding spec, the Defender QoL spec, the sapper rework and the Economy design doc.  
- **Decision \+ alternatives:** Required "exhaustively detailed" specs, because Claude Code fills gaps with its own guesses. Learned after v17/v18, when Claude Code invented a compounding price counter and broke pricing.  
- **Structure each spec follows:** Why → design rules to keep → numbered changes with formulas → tests (acceptance criteria) → sims and a decision gate → docs → out of scope.  
  - v22 has 17 acceptance tests.  
  - v34 has 15 tests, including worked examples (a 15-coin Mine looted 10, then 5, then 0).  
- **Outcome:** Builds ship to spec. v33 and v34 both shipped with their sim reports.  
- **Honesty note:** Claude drafted the specs. I set the scope, the rules and the corrections, and approved them.  
- **Artifacts:** `v34-economy.md` (best example: modes table, tooltip table, gate), `v33-layout-pass.md`, `v22-attacker-wave-and-balance.md`.  
- **Resume line:** Directed 12+ implementation specs with acceptance tests and data gates, so an AI coding agent could ship builds without guessing.

### c) Prioritisation and trade-offs

| What | Cut, deferred or simplified | Why |
| :---- | :---- | :---- |
| 3D graphics | Deferred indefinitely (12 Nov) | Still in the balance phase; 3D adds debugging risk to a vibe-coded build |
| Special tiles (5 types designed) | Held; added interest only | Worried tiles would be hard to teach |
| Haulers / scrap | Dropped | Support units just die against a clean defense; wanted a different playstyle, not "one more unit" |
| Looters / Outposts | Dropped for Prospectors | Too complex and luck-based; keep roles true (defender \= buildings, attacker \= units) |
| v21 engagement ideas | Kept 2 of 6 (live pot meter, MVP summary) | Rejected the other new mechanics |
| v19 scope | Deferred hold points, route choice, kill map, two releases per round, planning timer | Kept the build focused |
| v18 scope | Deferred target priority, defender mines, scout | Ship and measure sappers first |
| Order of work | Layout update (v33) before Economy (v34) before Power-ups | Fix the base game before layering modes on it |
| Space-time chart in the wave screen | Cut after a prototype round | Not useful in practice |
| Unit variety fee | Rejected | No reason to punish single-design armies |
| Minimum route-length rule | Rejected | Added complexity |
| Sim run size (v34) | Kept small | "Consume as little weekly usage as possible" (cost trade-off) |

- **Resume line:** Cut or deferred 10+ features (3D, tiles, Looters, Haulers) to protect focus, learnability and AI build budget.

### d) Roadmap and vision

- **What I did:** Set a modular vision: a base game with optional modes layered on top, each balanced alone and together (Sabotage, Economy, Power-ups). Later simplified to two modes, Simple and Advanced.  
- **Sequencing (15–18 Nov):** layout pass (v33) → Economy (v34) → Power-ups → target priority, formations, tiles. Kept a list of parked topics.  
- **Long-range idea:** a role-crossover roadmap (attacker buildings, defender units such as interceptor spawners), to be done "fully" later rather than half-built now.  
- **Gap:** no dates, no capacity plan, no milestones beyond the next build.  
- **Resume line:** Sequenced a modular roadmap (base game, then optional modes) so each layer could be balanced on its own.

### e) Metrics and success criteria

**Defined targets (in specs):**

- Sapper landing rate: 44–65%.  
- Economy worth: a side that plays the economy well ends with about 20–30% more coins.  
- Interest banking strategy win rate: 35–55%.  
- Prospector earnings: 2–3× their bounty.  
- Mine payback: about 3 waves.  
- Spread metrics (towers owned, distance between towers, fill rate), new in v33.

**Decision gates:** if the attacker's overall win rate moves more than 10 points, or any strategy more than 20, flag it and don't retune, so "the user decides from the data".

**Outcomes:**

- **Exploit fix (8 Nov):** the toughness surcharge cut ridge designs breaching above 40% from 19 to 2, and mean ridge breach from 36.6% to 20.4%, with Brute, Runner and Swarm prices unchanged.  
- **v33:** crowding fee took packed towers from the strongest layout (5.6% leak) to level with spread-out towers (9.9%). But the gate **tripped**: attacker wins fell 19 points (sabotage on) and 26 points (off), mostly from removing the per-tower build fee. **No record** of my response.  
- **v34:** Prospectors came in at \+147–188% coins against a \+20–30% target; Mines at \+1%, payback 28–37 waves against 3\. I accepted the defender bias "for now". The sim report lists levers to fix it.  
- **Gap:** every metric is from bots. No player-facing metrics (retention, match length, win rate by player).  
- **Resume line:** Set data gates for every release; a bot-simulation study cut an exploit's top-breach designs from 19 to 2 without touching mainstream prices.

### f) Building with AI

1. **Spec-driven workflow.** Claude chat for design and specs, Claude Code for the build, risky changes on a branch (`bridges`), and a protocol version bump so test builds can't match against live ones. Nothing pushed to `main` without my approval, because `main` deploys live.  
2. **Caught wrong AI output.** v17/v18: Claude Code made unspecified assumptions that broke sabotage pricing (a shared, compounding counter). Fixed by reading the implementation and writing exact formulas into v18.  
3. **Corrected Claude's own proposals.** Caught that Claude's "move fees go to the attacker" rule created an exploitable loop. Pushed back when a proposed penalty punished defenders for succeeding.  
4. **Grounded output in code.** Claude read the actual pricing code and corrected its own earlier assumptions (fire rate wasn't exploitable; pricing already used the final tower state).  
5. **Prototype iteration loop.** The Wave screen went through 5 playable prototype rounds (lane board and later versions), each driven by my concrete feedback: too text-heavy, unclear labels, drag direction, highlight the group being edited.  
6. **Data over guesses.** Asked for exploit fixes "decided from simulation data, not guesses". Claude built a test harness (`xsim.py`) on the repo's sim tools, and every spec ends in a sim gate.  
7. **Cost awareness.** Kept v34 sim runs small to save weekly usage.  
8. **Model/tool choice:** **no evidence** of comparing models for this project.  
- **Resume line:** Shipped 25 builds in 5 weeks as a non-coder, steering AI agents through specs, prototypes, simulation gates and correcting AI errors.

### g) AI inside the product

**None.** The computer opponent (Easy, Normal, Hard) and the sim bots are rule-based code, not LLMs. Can be described as "an algorithmic opponent kept in step with every new mechanic": each spec has a "computer and bots" section so solo play doesn't break.

### h) AI risks considered

- **AI filling gaps wrongly** → exhaustive specs, "report, don't retune silently", acceptance tests.  
- **AI changing live production** → branch isolation and explicit approval before pushing to `main`.  
- **Cost** → small sim runs. Free-tier hosting was part of the no-3D decision.  
- **Determinism and fairness** → no random rolls in economy maths, so both devices and replays agree. The computer never sees the player's plan or bet.  
- **Copyright** (raised by Claude): a YouTube track for menu music isn't free to use; royalty-free music deferred.  
- **Privacy, bias, wrong answers to end users:** **no evidence.** No user-facing AI, so these never came up.

### i) UX and design decisions

**1\. Attacker Wave screen (v22)**

- **What I did:** Ran 5 prototype rounds: lane board → real map plus timeline → first-principles reset (order, density, timing, cover) → danger zones with numeric reports → final.  
- **Rejected along the way:** the lane board (too text-heavy, not game-like), the space-time chart, "Escort" (replaced by "Meet"), labels Lead/Bunch/Spread/Last (unclear).  
- **Why:** Army timing should become the attacker's signature skill, as tower placement is the defender's.  
- **Artifacts:** lane-board prototype, v22 spec.  
- **Resume line:** Led 5 prototype iterations of a core planning screen, cutting features that didn't earn their space.

**2\. Helpers are "good, not optimal"**

- Auto-maze, Auto-tune, Auto-army and Auto-spread kept deliberately beatable by a skilled player. They save time but mustn't become the game.

**3\. One-screen editing and no new screens**

- Every tower and unit option visible on one screen.  
- Remove became "Remove & Inspect", previewing the reroute without adding buttons.  
- Swipe removes walls, click deletes a tower with undo, drag moves it.

**4\. Clarity on small screens**

- Bet panel collapsed to one line; everything must fit at 390 px.  
- Tooltips at most two lines, with live numbers.  
- Splash and Chain became checkboxes that reveal a slider only when checked.  
- A kid-readable "How to use" for the wave planner.

**5\. Visual language**

- Unit shape shows speed, size shows health; no vehicle or bug look.  
- Tower silhouette shows attack type, and every setting on a tower stays visible.  
- Crowding shown as a faint red zone with a live price ("40 \+ crowding").  
- Weak-wall red dots, on by default but toggleable.

**6\. Hints on by default for everyone**, easy to switch off. Rejected a leak summary and "watch the computer defend".

### j) Full lifecycle

**Example 1: Sabotage, over five weeks**

1. Wall charges (dominant strategy)  
2. Bridges on a test branch ("fun")  
3. Sappers as physical units  
4. v18 pricing fix after a bad AI build  
5. v22 route fix: reroute only when a bridge lands  
6. v23: sapper armour, move fee paid to the attacker  
7. v25: move-fee rise tuned from sims  
8. v33: weak-wall hints and wall thickening (bridge cut 37% → 30%)

**Example 2: Economy**

1. Idea (Mines and Convoys)  
2. Looters and Outposts (dropped as too luck-based)  
3. Prospectors  
4. Design doc (15 Nov)  
5. v34 spec plus my fairness fix  
6. Built and sim-tested  
7. Live (22 Nov). Found defender-biased, Prospectors over target, Mines under. Accepted for now; levers identified.  
- **Resume line:** Took the sabotage system through 8 iterations from playtest problem to sim-validated release.

### k) Go-to-market, positioning, monetisation

- **Stated:** "a fun game before a business", with monetisation that's fair to the community.  
- **Distribution:** free hosting (GitHub Pages and Render's free tier). Online play with friends, plus spectator links (v26).  
- **Retention features chosen:** shareable defenses and Rewind. **No evidence** they were built.  
- **No evidence:** positioning statement, target channel, pricing model, launch plan, competitor scan. Weakest area.

---

## 3\. Top 5 decisions

**1\. Fixed an exploit with data, not instinct**

- **Context:** I suspected maxed health-and-speed units broke the game.  
- **Options:** steeper health table, bigger-unit surcharge, defender-side fixes (splash spill, % max-HP damage), or a new toughness surcharge.  
- **Choice:** insisted on sim data. It showed the exploit was a mid-cost "ridge", not max/max, and that per-stat fixes taxed normal units (the Brute's price would rise 35 → 46). Chose a toughness surcharge that *replaced* the old rule, so the rule count stayed the same.  
- **Result:** ridge designs over 40% breach fell from 19 to 2, mainstream prices unchanged.

**2\. Turned sabotage from a click into a risk**

- **Context:** wall charges won almost every match, and defenders could only rebuild.  
- **Options:** nerf charges, add a one-round warning, add rebuild penalties, or redesign.  
- **Choice:** Bridges, then Sappers that must survive the maze. Rejected penalties that would kill fluid rebuilding.  
- **Result:** a two-sided mechanic with a tracked landing rate (44–65% target), refined across 8 builds.

**3\. Said no to 3D**

- **Context:** tempted by full 3D through a Blender connector.  
- **Options:** 3D now, pre-rendered sprites, or stay 2D.  
- **Choice:** stay 2D and invest in custom 2D art and sound, because balance wasn't done and 3D adds debugging risk and hosting cost.  
- **Result:** v31–v32 art and polish shipped in days instead of a stalled rebuild.

**4\. Chose simplicity over cleverness in the Economy**

- **Context:** the Looters design (flying units that harvest Mines) was clever but complex and luck-based.  
- **Options:** keep tuning Looters, try attacker buildings, or use a unit toggle.  
- **Choice:** Prospectors, a simple toggle on any unit design, keeping roles true. Then spotted the asymmetry myself: the defender counters the attacker's economy passively, the attacker only actively. Added "scrape", a passive counter for the attacker.  
- **Result:** v34 shipped and works. Sims show it's mis-tuned, with levers ready to fix it.

**5\. Fixed an expert exploit without touching beginners**

- **Context:** three maxed, short-range towers stopped every wave.  
- **Options:** a special-case rule, rely on sabotage, or re-price.  
- **Choice:** linear range pricing, damage exponent 1.15 → 1.4, sapper armour and a move fee paid to the attacker, all two-sided. The default 40-coin tower unchanged.  
- **Result:** the playtest tower's price rose from about 178 to about 425\. In v33 the crowding fee then made packing no better than spreading out.

---

## 4\. Roadmap (as it stands, 22 Nov)

No dated six-month roadmap exists yet. This is the stated sequence, plus what's still open.

**Now**

- v34 Economy is live and slightly defender-biased (accepted for now).  
- Sim-flagged tuning: Prospector trickle too high (a cap of about 0.03–0.04 would hit the \+20–30% target); Mines can't pay back (raise income, lower cost, or cap scrape).  
- Choose the next "easy to understand, big benefit" depth feature. Candidates suggested by Claude: match conditions, veterancy, Overheat, Orders, a second gate, a daily seed. **Not yet chosen.**

**Next**

- Power-ups mode: Relays boost nearby towers; powered attacker units buff their group.  
- Tower target priority, plus an attacker counterpart controlling how units behave under fire.  
- Unit formations: groups move at the slowest member's speed.

**Later**

- Special tiles (designed, on hold over learnability).  
- Role crossover: attacker buildings and defender units, done fully.  
- Looping menu music (royalty-free).  
- Retention features picked earlier: Rewind, round reveal, shareable defenses.  
- Revisit 3D after mechanics are validated with real players.  
- Monetisation (only "fair to the community" so far).

---

## 5\. Gaps and one action each this week

| Skill | Evidence | One small, real action |
| :---- | :---- | :---- |
| Real-user metrics | None | Add a simple anonymous match log (mode, rounds, winner, match length). Run 5 matches with friends and report 3 numbers |
| Discovery with outside users | Weak (self and collaborator only) | Run 3 recorded 20-minute playtests with people who've never played. Write a one-page findings note (top 3 confusions) |
| AI inside the product | None | Write a one-page PRD for an LLM feature, e.g. a post-match coach that explains why a wave failed from the sim data, covering cost per call, wrong-answer risk and evals. Maps straight to Cin7's "PM, AI" role |
| AI risks (privacy, bias, cost) | Weak | Add a risk section to that PRD: hallucinated advice, cost cap per match, no personal data sent |
| Roadmap with dates | Weak | Turn section 4 into a dated Now/Next/Later with one success metric per item |
| Go-to-market and monetisation | None | One page: positioning statement, 2 competitors, the first channel (e.g. a subreddit or Discord), and 2 monetisation options checked against "fair to the community" |
| Acting on a failed gate | Unclear (v33 gate tripped) | Write a short decision note: what the v33 and v34 sims showed, what I decided and why |
| Model choice for building | None | Note which Claude models and tools were used for design vs build and why. Run one spec through two models and compare |

---

## 6\. Screenshot shotlist

Images go in the Screenshots folder next to this doc, named as below.

1. **01-wave-screen.png** — Attacker Wave screen (v22+): map, release timeline, "EDITING ● Swarm ×8". *Army timing as the attacker's core skill, after 5 prototype rounds.*  
2. **02-lane-board-prototype.png** — Lane-board prototype, next to \#1. *The prototype I cut: too text-heavy, not game-like.*  
3. **03-sim-ridge-table.png** — Sim findings ridge table (sections 1 and 5). *The exploit was a band of designs, not "max everything"; the fix cut \>40% breaches from 19 to 2\.*  
4. **04-crowding-placement.png** — Defender placement with crowding: red zones and the "40 \+ crowding" hover price. *Making the choke-point cost visible before you pay it.*  
5. **05-weak-walls.png** — Weak-wall red dots with "Bridge here skips 42% of the route". *Teaching defenders where sabotage will hit.*  
6. **06-prospector-toggle.png** — Prospector toggle and tooltip in the unit design editor. *The economy as one toggle with two-line rules.*  
7. **07-mine-tooltip.png** — Mine on a crystal site with its hover tooltip. *Two-sided economy; every income source can be taken.*  
8. **08-bet-panel-390px.png** — Bet panel open at phone width (390 px). *An optional mind game, collapsed by default.*  
9. **09-art-sheet.png** — Tower and unit art sheet (`gallery.py` render, v31/v32). *Silhouette \= attack type, shape \= speed, size \= health.*  
10. **10-start-screen.png** — Start screen with the three mode cards and the Simple/Advanced setting. *Base game plus optional depth.*  
11. **11-v34-spec-excerpt.png** — v34 spec: "Design rules to keep" and "Gate" sections. *Specs written so an AI agent can't guess.*  
12. **12-v34-sim-results.png** — v34 sim results table (economy worth: target vs actual). *Shipped, measured, found mis-tuned, levers ready.*
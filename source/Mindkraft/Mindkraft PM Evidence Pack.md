# Mindkraft: PM evidence pack (for Cin7 "Product Manager, AI")

**Sources:** about 90 chats in this project (20 Mar to 11 Nov 2026), the project memory, and the synced repo (code, the `vault/` docs, tests, privacy and terms pages). Work from February to 19 March 2026 isn't in this project, so it's not covered. Every number below comes from that record. When an idea came from Claude and not from me, the entry says so.

---

## 1\. Project snapshot

**One-line pitch:** Mindkraft (mindkraft.life) is a life-gamification web app that turns personal development into an RPG: XP, levels, streaks, an earned currency (Grit), challenge modes, social contests, and an AI-generated skill map.

**Target user:** Self-improvers who have tried habit apps and dropped them. In practice the users were friends and colleagues in India. A precise ICP (early 20s to mid 30s, has abandoned 2+ habit apps) was drafted by Claude in the April GTM plan. I never validated it.

**Problem it solves:** Habit trackers are passive loggers, and motivation fades because real-world feedback is too slow. Mindkraft gives fast feedback (XP, streaks, levels) until the real results show up. My positioning, from 19 Apr: *"in a world where effort can be automated, intent is the only meaningful differentiator."*

**Timeline**

| When | Milestone |
| :---- | :---- |
| Feb 2026 | Started as a passion project |
| 20 Mar | Already live with users. Bug audit and Git workflow fixed after a bad merge broke streaks and XP for live users |
| 22–24 Mar | Bought the domain (Cloudflare), chose GitHub Pages plus Firebase on cost grounds |
| 27 Mar–9 Apr | Profile page, friends and leaderboard (with a privacy-safe public profile), Challenges and Group Challenges |
| 15–19 Apr | GTM plan, logo, viability review, philosophy positioning |
| 29 Apr–1 May | Activities no longer need a category first, first-run tutorial, editing past entries |
| 7–24 May | Full design-system and UI overhaul (Activities, Analytics, Profile, Onboarding) |
| 28 May–15 Jun | Production-readiness plan (privacy, security, error reporting), analytics audit, mobile-store path |
| 11 Jun | **50 unique sign-ups** |
| 7–18 Jul | AI tech tree v1, v2, v3 and the Quests system |
| 27 Jul | Notifications moved from GitHub Actions to Firebase Cloud Functions (Blaze plan) |
| 7–23 Aug | Plateau problem led to the Grit economy, 7 Modes, Versus Challenges and the AI Quest Composer (Claude Haiku) |
| 30–31 Aug | Moved from the test repo to production, privacy and terms rewritten for AI, branch previews, **"Mindkraft 3.0: Grit, Gifts & Games Update"** |
| Sep | Modes bug fixes, Berserk redesign, Grit exploit fix, week-boundary consistency, Node 22 upgrade |
| 5–6 Oct | 161-note documentation vault in the repo, plus a `mindkraft-spec` skill for the spec workflow |
| 11 Nov | Usage decline diagnosed: new users find it too complex, old users forget to log. I have mostly stopped using it myself |

**My role:** I own the product: problem framing, priorities, specs, design direction, accepting or rejecting changes, testing on device (Samsung S23). I build with Claude (planning and specs) and Claude Code (implementation). I don't write code.

**Current scale (everything measurable on record)**

- 19 Apr: about 20 users, all friends and colleagues. About 15 occasional, **5 committed users** who call themselves evangelists.  
- 29 Apr: under 50 users.  
- 11 Jun (from my GA screenshots): **50 unique sign-ups, 26 seven-day actives, 2m 38s average session, 1.2 sessions per user**, peak average session 14m 52s (22 May).  
- 11 Nov: usage declined. No newer numbers on record.  
- Product size: 7 modes, 2 AI features, 161-note vault covering 1,442 functions, automated test suites (for example a 31-check Grit test).  
- Playtests: none formal. Colleagues acted as pilot testers and shaped Group Challenge design (8 Apr).  
- Analytics maturity: a 15 Jun audit found **only 2 custom GA4 events firing**.

---

## 2\. Skill evidence

### a) Discovery and problem framing

**1\. Data-loss incident from a user report (23–26 Apr)**

- What I did: A user lost her data. I checked Firestore, saw onboarding template data, and guessed she had logged out and re-entered onboarding.  
- Decision \+ alternatives: Find the root cause and add safeguards, or restore case by case. I chose root cause.  
- Why: If one user could hit it, any returning user could.  
- Outcome: My guess was right. Three safeguards shipped: a stricter onboarding trigger, removal of a premature blank write, and a template write that refuses to run over existing data. Her data couldn't be recovered.  
- Artifacts: the chat diagnosis. No screenshot.  
- Resume line: *Diagnosed a user data-loss incident from a support report and Firestore records; shipped three safeguards preventing onboarding from overwriting returning users' data.*

**2\. Activation friction: the 3-level hierarchy (29 Apr)**

- What I did: Saw that new users had to set up Dimension, Path and Activity before earning any XP.  
- Decision \+ alternatives: Make category optional (my proposal), simplify onboarding only, or keep the hierarchy. I chose optional category, with a nudge to organise later.  
- Why: Get users into the core loop (create, complete, earn XP) first.  
- Outcome: Shipped 1 May: an "Uncategorized" bucket, an "Organize →" nudge, a categorisation prompt at level 5 or day 7, and a 4-step tutorial.  
- Artifacts: activity-creation screen with category optional, the Organize nudge.  
- Resume line: *Cut onboarding friction by making a 3-level setup hierarchy optional, letting new users earn XP before organising anything.*

**3\. Engagement plateau (4 Apr, 7 Aug, 16 Aug)**

- What I did: Noticed the novelty fading around levels 17–19 (Apr), then a plateau around level 30 that other users confirmed (Aug).  
- Decision \+ alternatives: Claude proposed narrative beats, a social feed, prestige, seasons and reflection cards. I rejected passive social feeds as a growth driver, made Challenges the growth engine, and kept narrative ambient, not a separate screen.  
- Why: Feeds don't bring new users. A separate narrative screen feels like homework, and most users' activities are too mundane for it.  
- Outcome: The Grit economy, 7 Modes and Versus Challenges were designed and shipped (Aug–Sep).  
- Artifacts: Modes picker, Grit header, Versus board.  
- Resume line: *Reframed a level-30 engagement plateau into a layered game economy (currency, modes, social wagers), shipped within six weeks.*

**4\. "Dated UI" complaints (17 May)**

- What I did: Users said the UI looked dated. I thought the cause was too much information on screen.  
- Decision \+ alternatives: Claude reframed it as a hierarchy problem. I accepted and ran an audit, a design system, then a screen-by-screen rebuild, not more themes.  
- Why: Density was a symptom. Fixing hierarchy fixes every screen.  
- Outcome: Design brief plus a rebuild of Activities, Analytics, Profile, Categories and Onboarding (May).  
- Artifacts: before/after of the Activities tab (the old "hospital journal" light theme vs the new dark system).  
- Resume line: *Turned user complaints about a dated UI into a design-system audit and a five-screen redesign.*

**5\. Retention decline framing (11 Nov)**

- What I did: Framed two separate problems: new users find it too complex, and existing users forget to log.  
- Decision \+ alternatives: Claude traced both to "effort before value" and suggested checking GA4 to see which is bigger. **Not decided yet.**  
- Outcome: Open. See Gaps.  
- Resume line: none yet.

### b) Requirements and specs

**1\. A standard spec format, used for 15+ handoffs (Jul–Sep)**

- What I did: Set the structure every spec follows: build order, "grep the live code first" safety steps, non-goals, open decisions, and a paste-ready block for Claude Code.  
- Decision \+ alternatives: Specs that describe outcomes vs specs that dictate code. I chose outcomes, and let the implementer own architecture.  
- Why: I don't code, and spec descriptions of code can be wrong.  
- Outcome: Specs included notifications, quests, tech tree v1–v3, modes, Versus, Quest Composer, repo migration, social push plus privacy, the Grit exploit, the Berserk redesign and the Node 22 upgrade.  
- Artifacts: open a `.md` spec showing the Non-goals and Open decisions sections.  
- Resume line: *Wrote 15+ implementation specs with non-goals, open decisions and verification steps, handed to AI coding agents for build.*

**2\. Acceptance criteria as test scenarios (10 May)**

- What I did: Commissioned a streak and shield spec with test scenarios A–H, each with expected values (for example "Expected: streak=2, shields consumed=1, remaining=2").  
- Why: Earlier fixes kept regressing.  
- Outcome: Used to verify the rebuilt system on a test account.  
- Artifacts: the `mindkraft_spec.docx` test-scenario page.  
- Resume line: *Defined scenario-based acceptance criteria for a streak-protection system, ending a cycle of regressions affecting live users.*

**3\. Modes spec: 7 modes (23 Aug)**

- What I did: Specced Habit, Berserk, Recovery, Insurance, Stake, Pact and Focus Window, covering UX states and rules but not data structures, plus a separate document on conflicts if modes ever run at the same time.  
- Key requirements: Stake needs at least 5 days and 5 completions (anti-exploit). Recovery is purely additive and never touches the fragile streak engine. No AI-written copy in this phase.  
- Outcome: Shipped. Bugs were found and fixed in September.  
- Artifacts: the Modes picker, each mode's setup sheet.  
- Resume line: *Specified a seven-mode engagement system with anti-exploit rules, rolled out with one bug-fix pass.*

**4\. Living spec pruned to actions only (21 Sep)**

- What I did: Resolved 4 open decisions, then cut the doc from 15 sections to 9 change instructions.  
- Why: Implementers need actions, not the history of the discussion.  
- Resume line: *Cut a 15-section spec to 9 actionable instructions after resolving all open decisions.*

**5\. Documentation vault plus spec skill (5–6 Oct)**

- What I did: Decided to rebuild the docs as a vault inside the repo (dropping Google Drive). Every spec must now include a "vault update" section.  
- Outcome: 161 notes, 0 broken links enforced by a checker, a "Change Impact Guide" (what ripples where), and the `mindkraft-spec` skill.  
- Artifacts: the Obsidian graph view, the Change Impact Guide page.  
- Resume line: *Set up a 161-page product documentation system in the repo so every change ships with its documentation update.*

### c) Prioritisation and trade-offs

**1\. Social build order and what I deferred (23 Mar, 6 Apr)**

- Decision: Profile page, then public challenges, then friends and leaderboard. Community quests and accountability pairs were deferred to "season 2". A public challenge feed was replaced with a curated template library.  
- Why: Build in order of how much each depends on having many users. A public feed is costly and empty at low user counts.  
- Resume line: *Ordered social features by how much each depended on user numbers, and deferred two that needed a bigger community.*

**2\. Infrastructure: stage it, don't rewrite (16 Jul, 23 Aug)**

- Decision: Keep tech-tree generation on GitHub Actions at first. Move it to Firebase only **after** the smaller Quest Composer proved the pattern.  
- Why: Don't debug new plumbing and the biggest AI prompt at the same time.  
- Resume line: *Staged a backend migration behind a lower-risk pilot feature, so infrastructure and AI prompt changes never shipped together.*

**3\. Versus: real infrastructure over a stopgap (30 Aug)**

- Decision: Build a scheduled server function to resolve Versus challenges, not a minimal client-side workaround.  
- Why: Versus is a major social feature and worth the investment.

**4\. Minimal-scope fixes (Sep)**

- Berserk: I declined to make the 7-day average adaptive, keeping the change small. No separate mode-history field ever. Old mode-history entries skipped, no backfill. Accepted that switching to a Monday week boundary would re-evaluate mid-cycle activities on the day it shipped.  
- Icon migration was deferred to its own pass instead of being folded into the Modes redesign (29 Aug).  
- Resume line: *Kept fixes small: shipped targeted changes over redesigns and recorded every accepted trade-off in the spec.*

**5\. Kept Firebase over moving to Supabase (23 Aug)**

- What happened: A Firestore cost audit (Claude) found no cost problem until about 800–1,000 daily users. The real risk was the 1 MiB document size cap. A migration would touch about 90 call sites. I stayed on Firebase.  
- Note: this was Claude's recommendation and I accepted it.

### d) Roadmap and vision

**1\. Early roadmaps (20 Mar, 27 Mar):** Profiles, daily planner, tags, analytics, public challenges. On 27 Mar Claude put these into a 7-phase build order by dependency at my request. Profiles and social shipped in about 2 weeks.

**2\. Economy vision (16 Aug):** Grit spend categories (insurance, discovery, social). The free tier holds the whole game; Pro unlocks limits. Shipped as the 3.0 release.

**3\. Phased GTM (15 Apr):** Foundation, Audience (500 monthly active users), Retention (2,000), Monetization (10,000). Claude drafted it at my request. **None of the targets were tracked or hit.**

**4\. Mobile-store path (15 Jun):** Error reporting (Sentry), then a build step (Vite), then wrapping the web app (Capacitor), then Android, then iOS. The rejected alternative was a React Native or Flutter rewrite. This was a council recommendation and is **not started**.

**5\. Versioned public release (31 Aug):** "Mindkraft 3.0: Grit, Gifts & Games Update", with a 7-slide announcement (cover, one slide per feature, CTA).

- Artifacts: the 3.0 cover slide.

### e) Metrics and success criteria

**1\. Launch milestone reported honestly (11 Jun)**

- What I did: Published a 50-sign-up milestone, asking for copy that admits active users are fewer than sign-ups.  
- Outcome: 50 sign-ups, 26 seven-day actives, 2m 38s average session, 1.2 sessions per user.  
- Artifacts: the milestone Instagram story with GA screenshots.  
- Resume line: *Reached 50 sign-ups and 26 weekly active users in about four months with no paid marketing.*

**2\. Retention signal (19 Apr):** 5 of about 20 users were committed evangelists (about 25%). The council flagged it as a strong signal. I never used it (no testimonials or referral asks).

**3\. Economy calibration from realistic bounds (31 Aug)**

- What I did: Gave realistic limits (up to about 40 completions and 10 activities per quest). The quest Grit payout was refit to `effort = completions + 3 × distinct activities`, with the floor dropped from 15 to 5 so three trivial quests can't approach one real one. I caught an arithmetic error in Claude's edge case.  
- Resume line: *Rebalanced an in-app currency formula using realistic usage limits, closing a quest-spamming exploit.*

**4\. Defined but never measured (15 Apr):** D7 retention 40%, 14-day streak continuation 60%, share taps 15% of monthly users, Supporter conversion 2% (Claude-drafted). **No instrumentation was built.**

**5\. Cost metrics:** Firestore writes are free until about 800–1,000 daily users. Server compute allows about 3,000 tree generations a month free. ChatGPT Ads estimate: ₹725/day minimum and roughly ₹55–135 per sign-up (the conversion rate was Claude's flagged assumption).

**6\. Metric integrity fix (6 May):** One user's XP-per-hour stayed frozen on every friend's leaderboard. Root cause: the value had no date stamp. Fixed for all inactive users with no data migration.

### f) Building with AI

**1\. Making the AI workflow safer over time**

- What I did: In March, Claude produced whole files and I swapped them into the live repo. A branch merge broke streaks and XP for live users (20 Mar).  
- Then: tags before every update (Mar), a separate test repo (about 3 months), a migration to production (30 Aug), Cloudflare preview URLs per branch (31 Aug), spec handoffs to Claude Code, and the vault plus spec skill (Oct).  
- Why: Every incident pointed at the same fix: separate testing from live users and make changes verifiable.  
- Artifacts: a diagram of this evolution (to draw), the Cloudflare branch preview.  
- Resume line: *Evolved an AI-assisted build process from direct live-file swaps to spec handoffs, branch previews and documented releases, after live-user incidents.*

**2\. A tool for each job**

- Claude chat for discovery and specs. Claude Opus/Fable in Claude Code for implementation. Claude Design (with the Mindkraft design system loaded) for mockups. Nanobanana for images. Suno and Lyria for music. Custom skills I built: Philosopher, Marketeer, Carousel, Motion, Spec.  
- Rule: test a skill's output before changing the skill (May).

**3\. Checking AI output before approving it**

- Standing rules: before approving a build step, require quoted code with file and line references. Never treat a spec's description as truth about the code. Every spec tells the implementer to grep first.  
- Resume line: *Set verification gates for AI coding agents: quoted code before approval, grep before build, explicit open decisions.*

**4\. AI mistakes I caught (with dates)**

- 22 Aug: Claude claimed backdating was limited to 48 hours and cost 15 Grit. It's free and unlimited. I made it trace where the claim came from and set the rule "verify against the repo".  
- 6 Sep: a meaningless "open decision" in the Stake spec (Stakes need at least 5 days, so instant win is impossible). I called it out.  
- 31 Aug: arithmetic error in a payout edge case.  
- 24 Aug: a competitor table listed an AI feature we hadn't built. I removed it.  
- 21 Sep: an over-scoped draft merged Grit and XP histories. I corrected the scope.  
- 7 Jul: I noticed NVIDIA's sample code caps output at 1,024 tokens, which would cut off the tech-tree JSON. Token budgets per call type plus truncation handling were added.  
- 31 Aug: rejected a photorealistic AI render as off-brand and switched to flat vector art.  
- Resume line: *Caught and corrected AI-generated errors in specs, maths and competitor claims before they reached users.*

**5\. Mockup iteration loops:** Quests mockup v1 to v3 with my 8-point punch list (14 Jul). Tech tree: 3 mockups (16 Jul) plus a v3 mockup (18 Jul). Motion scenes: 3 creative rounds (18 Jun).

### g) AI inside the product

**1\. "Weave My Web": the AI tech tree / Map (shipped; v1 7 Jul, v3 18 Jul, instant generation from Aug)**

- What it does: The user writes 1–5 goals. Claude Haiku builds a web from their **own** activities: anchors (existing activities), upgrades, fusions that link two life areas, and wildcards (random serendipity). Hidden nodes are revealed with Grit. Nothing is added unless the user accepts, links or rejects it, and rejections are fed back into future prompts.  
- Decision \+ alternatives: Serendipity is the core value, not an optional setting. Model: NVIDIA's free tier for prototyping, then Claude Haiku for production.  
- Artifacts: the Map screen (hidden nodes, fusion diamond, wildcard spark) and the goal input screen.  
- Resume line: *Conceived and shipped an AI skill map that turns user goals and habits into a personalised, user-approved path of next practices.*

**2\. Quest Composer: "Plan it for me" (shipped Aug)**

- What it does: A plain-language request (up to 280 characters) becomes a structured quest built mostly from the user's existing activities. The draft opens in the quest builder for editing. Nothing is saved until the user accepts it.  
- Resume line: *Shipped an AI quest planner that turns a one-line goal into an editable plan built from the user's own habits.*

**3\. Proposed, not shipped:** Weekly "Mirror" reflection (May; costed for 100 users), AI identity badges (Apr), Sunday AI status bubbles (Aug), natural-language logging (Claude suggestion, Nov).

### h) AI risks considered

**1\. Licensing (7 Jul):** NVIDIA's free tier is for development only, so serving real users would breach its terms. The model call sits behind one adapter, so switching to Claude Haiku was a one-file change.

**2\. Cost (Aug–Oct)**

- About ₹2 per query (my estimate, which drove the Haiku choice).  
- Quest Composer: 3 per rolling 7 days. Full Map rebuild: once per 30 days. Abuse ceiling: 20 weaves per 7 days.  
- **Usage only counts when a call succeeds.** Requests are cut to 280 characters, at most 40 activities are sent, and server instances are capped.  
- Pro tier sells higher AI limits, never core features.  
- Resume line: *Kept AI costs under control with server-side rate limits, success-only usage counting and input caps, about ₹2 per query.*

**3\. Wrong or malformed answers**

- The user is always in the loop: nothing is added without acceptance.  
- Server and client validators **repair, not reject**: duplicate activities are merged, excess new activities are turned into one-off tasks, dependency loops are removed, and unresolvable links are dropped.  
- Context: an earlier strict validator threw away whole quests, which is why "quests never generated".  
- The terms page warns that AI output may be wrong, especially on health, training or diet.

**4\. Privacy (30 Aug, 9 Oct)**

- Haiku is sent activity and goal text only. No name, email, account ID, friend code or social data.  
- Data is stored in Firestore in India (asia-south1).  
- Privacy policy and terms rewritten for AI (effective 30 Aug). The spec required every legal claim to be checked against the code.  
- 9 Oct: wrote an API-use justification that separates current uses, confirmed plans, and ideas that aren't specced yet.

**5\. Keeping AI use light (28 Aug):** Removed the per-node "Revise" AI action in favour of manual edits. No AI round-trips for small changes.

**6\. Bias: no evidence.** See Gaps.

### i) UX and design decisions

1. **Life categories (23 Mar):** Removed from creation and collected later, when a user makes a challenge public. The rejected alternative was forced categories at onboarding. Why: it contradicted the app's user-defined philosophy.  
2. **Tech tree (16 Jul):** I rejected fog-of-war (the excitement comes from wanting a destination and finding the path, not from discovery) and rejected a yes/no "does your goal have a finish line?" question (it leaked data-model concerns into the UI). On 18 Jul I removed goal boxes in favour of an activity-centred web, with every node labelled.  
3. **Narrative (16 Aug):** I rejected Claude's separate narrative screens (they felt like homework) and chose ambient narrative across the app instead.  
4. **Map input (28 Aug):** Kept one row per goal instead of a free-text paragraph, so each goal keeps its own coloured thread on the web.  
5. **Quest completion (23 Aug):** Made it a deliberate two-step action. Ticking a step never pays out; only the "Complete quest" button does.  
6. **Removed level-gating and the onboarding tour (30 Aug):** My reasoning: *artificial progression walls cost more in lost users than they gain.* The code was deleted, not left switched off.  
7. **Berserk UI (6 Sep):** One real progress bar (for a target with an end point) and a live number (for earnings), labelled as conditional.  
8. **Small usability fixes:** Enlarged the expand button so users stopped completing activities by accident (6 May). Detected Instagram's and LinkedIn's in-app browsers so users from promo links could sign in and install (9 Jun). Replaced native dropdowns with searchable ones for large activity lists (29 Aug).  
9. **Design principles (20 May):** I set 5 rules: one hero element per card, cut redundancy, one component library, one job per colour, more breathing room. These became the design brief ("earned hierarchy, single primitives, restraint"; the wording is Claude's).  
- Resume line: *Made and documented UX trade-offs across 10+ flows, including removing level-gating to reduce new-user churn.*

### j) Full lifecycle

**1\. Quest Composer (Aug 2026\)**

- Idea (23 Aug), then a spec covering the prompt contract, output schema, rate limit and cost, then a stub deployed first to prove the plumbing.  
- Then the Haiku call, validators, client re-validation, and unit tests.  
- Then shipped, with the privacy policy updated (30 Aug), followed by "Map migrates after the Composer proves the pattern".

**2\. Grit exploit (2 Sep onwards)**

- Found: complete then undo farmed unlimited Grit.  
- Fix spec: each completion records the Grit it paid, and undo or delete takes back exactly that amount.  
- Shipped with a **31-check automated test** proving complete/undo loops mint nothing.  
- Resume line: *Found and closed a currency exploit in production, and the fix shipped with a 31-check automated test.*

**3\. Notifications (27 Jul onwards)**

- Problem: reminders arrived 30–45 minutes late. Moved to a scheduler with a delivery guarantee.  
- The old and new systems ran side by side until the new one was confirmed stable.  
- Then fixed social pushes failing with a 401 error (2 Sep), then random delays caused by Android battery saving, fixed by marking pushes high priority (24 Sep).

**4\. Map / tech tree arc:** v1 (7 Jul), v2 (16 Jul), v3 (18 Jul), instant generation (Aug), Grit-paid reveal loop (23 Aug), "start over" explored (Aug 30, not specced).

### k) Go-to-market, positioning, monetisation

**1\. Positioning (19 Apr):** I worked out myself that Mindkraft should be sold as a *philosophy* (intent over automation), not a feature list. Principles: content is value-first, not contrarian, and the product appears only after the insight lands.

- Resume line: *Positioned a consumer app around a clear philosophy, and set content rules that kept promotion secondary to value.*

**2\. Monetisation principles (4 Apr, 16 Aug)**

- Free tier \= the complete game. Pro \= higher limits (free cap 50 activities, more mode slots, more AI use, export). Grit can **never** be bought.  
- My model: one Pro user should cover about 100 free users. Supporter one-time purchase first. Pricing (about \$3–5 a month) was Claude's suggestion. **Nothing launched.**

**3\. Acquisition planning:** GTM plan (15 Apr); first-100-users playbook on my preferred channels (word of mouth, Reels, Reddit; 29 Apr); ChatGPT Ads cost model (8 Oct); competitor table vs Habitica, Todoist and TickTick (24 Aug).

**4\. Content engine:** Built 4 custom content skills. Produced the 3.0 launch carousel, a 50-sign-up story, teaser and founder reels. Started a Remotion reel pipeline (Sep).

---

## 3\. Top 5 decisions

**1\. Moving the AI features to a paid model, with guardrails (Jul–Aug)**

- Context: The AI tech tree was prototyped on NVIDIA's free tier.  
- Options: stay on the free tier, use a big paid model, or use a cheap paid model with limits.  
- Choice: Claude Haiku behind one adapter, user-triggered only, rate-limited, usage counted only on success, no identifying data sent, outputs repaired instead of thrown away, nothing saved without user acceptance.  
- Result: Two AI features live at about ₹2 per query, with a privacy policy that matches the code.

**2\. Grit can only be earned, and the economy has to hold (Aug–Sep)**

- Context: A currency to fix the plateau.  
- Options: sell it (revenue) or make it earned-only.  
- Choice: earned-only, because effort is the only legitimate source. When a complete/undo exploit appeared, I fixed it symmetrically instead of patching the symptom.  
- Result: Currency integrity protected by a 31-check test. The monetisation model (Pro sells limits, not currency) stays intact.

**3\. Rebuilding the Map around the user's real activities (16–18 Jul)**

- Context: v2 showed walls of text, unlabelled dots and goal boxes, and the quest suggestions were suppressed by the prompt.  
- Options: polish v2, add fog-of-war, ask users goal-type questions, or rebuild around their real activities.  
- Choice: an activity-centred web, serendipity as the core value, no fog-of-war, no setup question, and quests that absorb new activities.  
- Result: v3 shipped and became the base for the paid reveal loop.

**4\. Fixing Berserk Mode from usage data (6 Sep)**

- Context: Modes had shipped a week earlier, so every user had less than 28 days of history. A target divided by 28 shrank toward zero, so the 40 XP/hr floor bound everyone.  
- Options: lower the floor only, add separate mode-tracking fields, or fix the maths.  
- Choice: divide by the real days of history (capped at 28), drop the floor to 20, and add win conditions (a completion count plus a target measured in base XP) so one heavily bonused tap can't win. The penalty question was left as an explicit open decision.  
- Result: Shipped. The code now has the adaptive baseline, the 20 XP/hr floor and both conditions.

**5\. Removing level-gating and the tour (30 Aug)**

- Context: The tour pointed at navigation that no longer existed, and features were locked behind levels.  
- Options: rebuild the tour, keep the gates, or remove both.  
- Choice: remove everything. Any future blocker system gets built fresh.  
- Result: All features open from day one and the dead code is gone. The impact was never measured, which is a gap.

---

## 4\. Roadmap (as it stands)

There's no committed roadmap document after the 11 Nov retention discussion. This is put together from open items, and nothing in Next or Later is committed.

**Now (Nov–Dec 2026\)**

- Pick the retention priority: split new-user drop-off from lapsed users in GA4.  
- Close open items: Pact friend-picker showing "Adventurer" instead of names (status not checked here); the Focus Window undo still pays Grit back wrongly (noted in the vault); 24 logged issues in the Change Impact Guide.  
- Test Haiku 5 on the Quest Composer before the Map.

**Next (Jan–Feb 2027\)**

- Evening check-in push with one-tap logging, and a simpler first run with templates (Claude's recommendations, pending my choice).  
- Error monitoring (Sentry) and a first analytics funnel.  
- Map "start over" option (explored, not specced).

**Later (Mar–May 2027\)**

- Build step (Vite), app wrapper (Capacitor), Android, then iOS.  
- Session-replay analytics (PostHog) alongside GA4.  
- Supporter purchase, then the Pro tier.  
- Remotion reel pipeline for content.

---

## 5\. Gaps and one small action each

| Skill | Evidence | One real action this week |
| :---- | :---- | :---- |
| Metrics / analytics | **Weak**: 2 custom events, success metrics never measured | Add 5 GA4 events (sign-up, first activity, first completion, day-2 return, AI feature used) and write a one-page metrics definition with targets |
| User research | **Weak**: bug reports and pilot feedback only, no interviews | Do five 20-minute calls with lapsed users; write a one-page synthesis that answers the Nov 11 question (complexity or forgetting) |
| Experimentation | **None** | Run one before/after test, e.g. evening reminder copy or timing, tracked on 7-day return |
| AI evaluation | **None** (stated: no evals or RAG experience) | Build a 20-request test set for the Quest Composer, score each output on 4 criteria, and compare Haiku 4.5 vs 5 |
| AI bias / safety | **None** | Review 20 Map outputs for health, diet or training advice and for cultural assumptions; log findings and add one prompt guardrail |
| PRD writing (problem, outcome, metric) | **Partial**: specs focus on implementation | Rewrite the Quest Composer as a one-page PRD: problem, users, success metric, non-goals, risks |
| Stakeholders / cross-functional work | **Weak**: solo build | Send a short changelog plus a "what should we fix next?" poll to the 5 committed users and record the replies |
| Pricing validation | **None**: nothing launched | Add a "Support Mindkraft" fake-door button and count taps for 2 weeks |
| B2B / inventory / ERP domain | **None in this project** | Write a one-page spec in the same format for an AI feature in Cin7 (e.g. reorder-point suggestions), including the evaluation and risk sections |
| Roadmap upkeep | **Weak**: no current roadmap doc | Save the Now/Next/Later above as a project doc and review it monthly |

---

## 6\. Screenshot shotlist

1. **Map (Weave My Web)** with hidden nodes, a fusion diamond and a wildcard. Caption: *AI turns your goals and habits into a personalised web of next steps.*  
2. **Map goal input** (one row per goal). Caption: *One row per goal, so each goal keeps its own coloured thread.*  
3. **Quest Composer** request box next to the draft in the builder. Caption: *One line in, an editable plan built from your own habits out.*  
4. **Modes picker plus Berserk active** (red app theme). Caption: *Seven modes add stakes; Berserk turns the whole app red.*  
5. **Grit header plus Grit ledger or shop.** Caption: *An earned-only currency, protected by automated tests.*  
6. **Versus live board.** Caption: *Friend-vs-friend wagers as the growth loop.*  
7. **Activities tab before vs after (May redesign).** Caption: *From "hospital journal" to a deliberate design system.*  
8. **50 sign-ups milestone story** (GA numbers). Caption: *50 sign-ups, 26 weekly actives, no paid marketing.*  
9. **A spec excerpt** (Berserk redesign: Non-goals and Open decisions). Caption: *Specs state what's out of scope and what's still undecided.*  
10. **Vault in Obsidian** (graph view plus Change Impact Guide). Caption: *161 pages of living product documentation.*  
11. **Privacy policy, AI section.** Caption: *What we send to the AI, and what we never send.*  
12. **Workflow diagram** (to create): direct file swaps, then test repo, then branch previews, then spec handoff, then vault. Caption: *How the AI-assisted build process got safer after live incidents.*
# Mindkraft portfolio images: captions

All screens are the real app (current `main` = `df2ed8d`, 5 Oct 2026, unless stated) booted in headless
Chromium against an in-memory Firestore stub, signed in as a fictional demo user ("Aarav", friends
"Meera" and "Kabir"). No real user data, no Firestore reads, no model calls: the two AI callables are
answered by the real server-side validators run over hand-written model JSON.
Phone shots: 393×852 @3x (1179×2556). Composed: 1600×1000.

## screenshots/ (Part 1, current main)
- `01-my-activities.png`: My Activities with completion rings; Morning run, Drink 3L water and Meditate are done today, each with an Undo.
- `02-map-web.png`: The Map's Sky view after "Weave my web": anchors (stars = mastered, rings = in progress), goal-coloured threads, the dashed fusion diamond and dark silhouette nodes.
- `02b-map-web-wildcard.png`: The same web scrolled to its right edge, showing the wildcard (sparkle) and the deepest silhouette tiers.
- `02c-map-branch.png`: Branch view of the Half-marathon thread: every node labelled with its state (mastered, doing, open) and the Grit price of unrevealed ones.
- `03-map-goal-input.png`: The goal screen before the first weave, with three goals typed in.
- `04-quest-composer-request.png`: "Plan it for me" request sheet with a typed request, shape "Something to finish" and size "A few weeks".
- `05-quest-composer-draft.png`: The composed draft open in the quest builder, linking existing activities and badging one new practice ("becomes an activity").
- `06-quest-detail.png`: Quest detail for "PM portfolio sprint": 69% progress, the Next up step, a completed sequence and a checklist group.
- `07-modes-picker.png`: The Modes catalog with each mode's Grit price.
- `07b-berserk-setup.png`: Berserk setup sheet: window length, the history-based target and the win/miss stakes.
- `08-berserk-active.png`: Berserk running: red app theme, banner, progress bar and live "Earned this window" XP after two real completions.
- `09-grit-header-ledger.png`: Rewards page: Grit balance (also in the header chip), this week's bonus bar and the shop.
- `09b-grit-ledger.png`: The Grit ledger ("Recent activity"): every earn and spend, newest first.
- `10-versus-board.png`: Versus: a pending invite from Kabir and a live board against Meera (7/12 vs 5/12, 100 Grit pot) with the breakdown open.
- `11-analytics.png`: Analytics tab: totals, XP per hour, highest streak and cumulative XP over time.
- `12-privacy-ai-section.png`: privacy.html §4 "AI features" (desktop, 1280 wide): what is and is not sent to the model.

## before-after/ (Part 2, same demo data on both sides)
- `A-activities-before.png`: Activities tab before the May 2026 overhaul. Commit `569f2b7` (27 Apr 2026), the last commit before the 24 May overhaul upload (`74afcca`…`af4b5bd`).
- `A-activities-after.png`: Activities tab today. Commit `df2ed8d` (current main).
- `D-modes-before-2-sheet.png`: Insurance Mode setup before the two-step sheets: picker and settings stacked in one sheet, with the list scrolling inside it. Commit `783f9d0` (21 Sep 2026).
- `D-modes-before-3-scrolled.png`: The same single sheet with its inner list scrolled. Commit `783f9d0`.
- `D-modes-after-2-sheet.png`: Step 1 of 2 today: pick activities, then "Next". Commit `df2ed8d` (two-step sheets landed in `091002d`, 22 Sep 2026).
- `D-modes-after-3-settings.png`: Step 2 of 2: term, coverage and cost. Commit `df2ed8d`.
- Pairs B (Map v2 → v3) and C (Versus redesign): not produced. See README.md.

## composed/ (Part 3, 1600×1000)
- `pair-A-activities.png`: "From cluttered to deliberate": Activities tab, `569f2b7` → `df2ed8d`.
- `pair-D-mode-picker.png`: "Mode picker: pick first, then configure": Insurance setup, `783f9d0` → `df2ed8d` (`091002d`).
- `single-02-map.png`: The Map: habits as anchors, fusions and wildcards for serendipity, nothing added without a yes.
- `single-05-quest-composer.png`: Quest Composer: a draft built from your own activities, editable before saving.
- `single-08-berserk.png`: Berserk: a history-based target where both completions and base XP have to land.
- `single-10-versus.png`: Versus: Grit escrowed at the invite, only live completions count, ties refund both.

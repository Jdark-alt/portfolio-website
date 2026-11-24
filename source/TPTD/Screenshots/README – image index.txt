TPTD (Siegeline) portfolio images: index
All screenshots are real captures of the game running locally (headless Chromium, 2x). Builds are git commits of jdark-alt/tptd. Every number comes from a repo file named below, from the game's own screen, or from a scan re-run with the command recorded in the repo.

01-wave-screen.png | Attacker's Wave step with Swarm split into A/B, forecast at 12 s | v34 e6e1ca6, seed 22; CLAUDE.md "Wave step"
04-crowding-placement.png | Tower hover beside T1: "40 + 12 CROWDING − 5", crowding squares, Shift ranges | v34; CLAUDE.md "What v33 changed"; docs/specs/v33-layout-pass.md
05-weak-walls.png | Weak-wall dots; hover "BRIDGE HERE SKIPS 36% OF THE ROUTE" | v34; docs/specs/v33-layout-pass.md §4-5
06-prospector-toggle.png | Unit editor with Prospector on and its tooltip | v34; docs/specs/v34-economy.md §5
07-mine-tooltip.png | Mine on a crystal site beside the route, hover words | v34; docs/specs/v34-economy.md §4
08-bet-panel-390px.png | Defender's Bet panel open on a 390 px phone | v34; docs/specs/v34-economy.md §6
09-art-sheet.png | Tower specimen sheet and unit shapes | tools/art/sheet.py on v34
10-start-screen.png | Start screen: Waves, Clock, Mode; three mode cards | v34; CLAUDE.md v25/v30/v31/v34
13-wave-in-motion.png | Live wave: towers firing, Prospector Runners, bridged wall, Mine | v34
20-before-after-wave-screen.png | Wave step v21.1 vs v22 (same seed/state) | c601237 vs 10cb02d; docs/specs/v22-attacker-wave-and-balance.md
21-before-after-tower-art.png | Board art v30 vs v32.6, same towers and army | tools/art/gallery.py --seed 1; CLAUDE.md v31/v32
22-before-after-starter-maze.png | Starter maze v32.6 vs v33 on one map; medians 34→53 walls, route 55→71 | docs/research/v33-sim-results.md §5
23-before-after-tower-pricing.png | Same layout priced by build fee (4th tower 70) vs crowding (48); packed 5.6% vs 9.9% | in-game prices; docs/research/v33-sim-results.md
24-before-after-chain-splash.png | Tower card v30 vs v31: Splash/Chain as chips that open a slider | c351ae9 vs ebee68d; docs/specs/v31-chain-slider-and-art.md
30-annotated-wave-screen.png | 01 with six numbered callouts | CLAUDE.md "Wave step"
31-sabotage-lifecycle.png | Sabotage from wall charges (v1) to weak walls (v33) | CLAUDE.md history; docs/specs; docs/research
32-economy-iteration.png | v34 economy: spec → sims flag (+188%/+147% vs +20-30%) → retune (+35%, Mine payback 3.2) | docs/specs/v34-economy.md; docs/research/v34-sim-results.md
33-workflow.png | Chat design → spec → Claude Code → tests + sims → gate → ship | CLAUDE.md; spec "Sims and report" gate wording
34-exploit-fix.png | Health × speed heatmap before/after the toughness surcharge (18 → 5 over 40%) | scan.py re-run on v22 (10cb02d), matches docs/research/v22-sim-results.md
35-modes.png | Simple vs Advanced | docs/specs/v34-economy.md §1-2

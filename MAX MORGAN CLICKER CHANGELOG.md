# Max Morgan Clicker — Changelog

Changelog for `MAX MORGAN CLICKER.html` only, built from this repo's git
history. Newest first.

## 2026-09-25 — Quests, Codex, and the Morganverse trim

- **Quests rebalanced and expanded.** Daily Contracts grew from 8 to 13
  templates (added spinning the Wheel, cracking the Vault, buying shares,
  and depositing at the Bank of Sam) and now roll 4 a day instead of 3;
  a few underpaying rewards were bumped up. Career Milestones grew from
  15 to 25, adding later-game goals (Vault cracks, Key hoarding, Wheel
  spins, Rebirth 5, a 500-share portfolio, a full pet roster, Layer 150,
  Guac Smash, a 150 combo, and clearing every achievement).
- **The Morgan Codex grew by 50 entries** (20 → 70), all newly linked to
  the Quests tab instead of lifetime burritos: one per Career Milestone
  (25) and 25 more for cumulative Daily Contracts claimed, from your
  first contract up to a 500-contract "Five Hundred Club."
- **Removed the Cosmos and Mythos facility tabs** (Star Nodes,
  Black-Hole Oven, Chrono-Kitchen, Rift Gate, Paradox Engine, Oracle,
  Climate Control, Council, Alchemy Lab, Expeditions, Pantheon, Gene
  Lab, Museum, Arena, Recipe Compiler, and Card Sets) — only Industry
  and Finance remain. Fixed a couple of now-dangling references (a
  mining-drop hook and a stats-tab line) that depended on the removed
  Museum facility.
- **Added some humor to the Statistics tab** — most stat labels now
  carry a dry aside ("Total clicks (RIP mouse)", "Pickaxe tier (still
  technically a spoon)," etc.) instead of a plain label.

## 2026-09-25 — Wheel/Vault rebalance and a Dev Panel

- Removed the Paid Spin option from the Wheel of Maxwell; only the free
  5-minute spin remains.
- Increased the odds of finding a Maxwell Key from clicks, Golden Sams,
  and raid bosses.
- Maxwell's Vault now favors the player (ties count as a win, plus a
  chance to forgive a wrong guess) and pays out 10 Keys per crack
  instead of 1.
- Added a password-gated "Dev Panel" in Settings (password:
  `developer`) with one-click buttons to grant each currency.

## 2026-09-25

- **Maxwell's Vault is now an actual game.** Replaced the old "click a
  button, get a random 22% roll" gamble with a real nine-pile hi-lo card
  game (à la Golf/Treehouse-style higher-lower pyramids): open the vault to
  deal nine piles from a shuffled standard 52-card deck, pick a pile, and
  guess whether the next card is higher or lower. A correct guess replaces
  that pile's card; a wrong guess (or a tie — aces low, kings high) busts
  the pile for good. Clear the whole deck before all nine piles bust to
  crack the vault for a 🔑 Maxwell Key and a burrito bonus; busting out
  early still pays a scaled burrito consolation. Added a "How to play"
  popup and a "Walk Away" forfeit option. Same 🔑 Key economy as before,
  just an actual game instead of a coin flip.

## 2026-09-24 — `gambling`

- Added Maxwell's Loan Shark (borrow burritos, pay steep compounding
  interest, auto-garnished income until repaid).
- Introduced 🔑 Maxwell Keys as a new, deliberately rare currency —
  Pet Eggs, Artifact Crates, Maxwell Skin cases, and Theme cases now cost
  Keys instead of burritos. Keys come from hand-catching Golden Sams,
  downing raid bosses, tiny per-click odds, or the original one-click
  "Crack the Vault" gamble (now the full card game above).
- Large economy/balance pass across the shop, market, and prestige systems.

## 2026-09-24 — `actually fix - version fully works`

- Restored the hidden mustache cosmetic (SVG path was missing entirely,
  not just hidden) so the mustache accessory works again.
- Added `sellPet()` and related fixes so pets can be sold back for
  burritos.
- Assorted save/version fixes to get the reformatted build (see below)
  working end-to-end again.

## 2026-09-24 — `fix again dangit`

- Reformatted the entire file from a minified single-line HTML/CSS/JS blob
  into readable, indented markup and code. No intentional functional
  changes — this was a pure formatting pass (18.8k insertions / 6.7k
  deletions, almost entirely whitespace).

## 2026-09-24 — `fix animations`

- Moved the `requestAnimationFrame(tick)` call to the start of the game
  loop instead of the end, fixing frame timing/animation stutter.

## 2026-09-24 — `Remove mustache`

- Removed a hidden, unused mustache `<g>` element left over in the
  Maxwell SVG.

## 2026-09-24 — `Fixed full delete and made it him.`

- Added Max Samuel Morgan's actual photo (`MaxSamuelMorgan.png`) as the
  clickable portrait, overlaid on the SVG, with cosmetic tiers
  (mustache/shades/hat/crown/halo/aura) still layered on top.
- Added a favicon using the same photo.
- Hardened `hardReset()` with a `resetting` guard so a full save wipe
  can't be immediately re-written by an in-flight autosave.

## 2026-09-23 — `massive clicker upgrade 240k tokens`

- Very large content update (3.1k+ line additions): expanded buildings,
  upgrades, prestige layers, and the "Morganverse" facility system.

## 2026-09-23 — `Updated CLICKER`

- Incremental balance and UI fixes following the automation update below.

## 2026-09-23 — `Steal a Morgan and added automation to clicker`

- Added automation options (auto-buy / auto-ascend style modules) to the
  clicker.

## 2026-09-18 — `thank you claude opus 5 ultra`

- Major systems pass (3.5k+ line additions): rebirth/ascension tiers, Sam
  Shards, Cosmic Dust, pets, gacha cases, stock/crypto exchange, and other
  core progression systems that the game still runs on today.

## 2026-09-17 — `Add files via upload`

- Cleanup/restructuring pass on the original single-file game (712
  insertions, 929 deletions).

## 2026-09-17 — `max Morgan`

- Initial commit of the clicker game (as `MAX MORGAN CLICKER.html`),
  1,180 lines.

# Max Morgan Clicker — Changelog

Changelog for `MAX MORGAN CLICKER.html` only, built from this repo's git
history. Newest first.

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

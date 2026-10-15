# Repository guidance

This repository contains the public Kirokun website and privacy policy. The Flutter application is maintained in [takyaC/kirokun-app](https://github.com/takyaC/kirokun-app).

## Privacy policy changes

- Read the relevant app implementation, SDK automatic collection/defaults and release configuration before changing disclosures. Check both the app's current `dev1` and any pending PR whose behavior is being described; distinguish planned support from released behavior.
- Update `privacy-policy.md` and `en/privacy-policy.md` together, keeping dates, data categories, recipients, retention, and stop/delete controls equivalent. Preserve their URLs and language links.
- Separate user-entered record contents from usage counts, technical diagnostics and SDK-generated installation identifiers. Do not describe identifier-based analytics as completely anonymous, or promise that a setting also stops an independent service without checking the implementation.
- Changes to website analytics also require a policy check. Keep app and website services distinguishable.
- Link the companion app PR and identify any App Store Privacy/in-app explanation work. Record what was actually checked and what still depends on a pending release.

## Delivery

- Open Draft PRs against `dev1`. Do not merge or publish without the owner's instruction.
- GitHub Pages publishes from `master` via `.github/workflows/deploy.yml`; merging into `dev1` alone does not publish the policy. Report this distinction and verify both live language pages after an authorized publication.
- Run `git diff --check` and the Jekyll build when available. For prose-only changes, check rendered headings, lists, links and language parity; do not add implementation-mirroring tests.
- Keep internal guidance out of the generated site using `_config.yml` exclusions.

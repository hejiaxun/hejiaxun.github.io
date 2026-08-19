# Jiaxun He's research portfolio

This repository hosts the public source for [hejiaxun.github.io](https://hejiaxun.github.io).

## Information architecture

- **Home** — research identity and selected work.
- **Research** — peer-reviewed publications.
- **Projects** — research, embodied-intelligence, and robot-system project pages.
- **Experience** — public education and experience outline.
- **CV** — placeholder for a privacy-reviewed downloadable CV.

The first complete project page covers the published IEEE RA-L work on tendon-state estimation. Other pages are intentionally staged as reviewed placeholders and will be expanded from verified public materials.

## Public-content rules

- Do not publish company-confidential material, recruiting records, private contact information, or unapproved internal metrics.
- Clearly distinguish open-source reproduction from personal extensions.
- State maturity boundaries: simulator calibration is not policy Sim-to-Real deployment; estimator deployment is not ownership of the pre-existing controller.
- Keep claims traceable to a paper, released artifact, or private evidence ledger before publication.

## Local development

The site uses the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.

```bash
bundle install
bundle exec jekyll serve
```

Pushes to `main` trigger the GitHub Actions deployment workflow. The repository's Pages source should be configured to use the generated `gh-pages` branch.

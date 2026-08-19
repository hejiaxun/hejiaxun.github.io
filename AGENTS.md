# Public portfolio instructions

## Purpose

This repository is the public portfolio for Jiaxun He. Keep it concise, technically credible, and safe to publish.

## Publishing rules

- Never publish private contact details, recruiting records, application status, company-confidential material, source archives, or unapproved internal metrics.
- Distinguish open-source reproduction from personal contributions.
- Do not infer missing facts. Add a reviewed placeholder when evidence or disclosure permission is incomplete.
- Preserve technical boundaries: simulator–measurement calibration is not policy Sim-to-Real deployment; estimator deployment is not ownership of the pre-existing controller.
- Prefer a small number of evidence-rich project pages over a long list of shallow cards.

## Site structure

- `_pages/` contains the five top-level pages: Home, Research, Projects, Experience, and CV.
- `_projects/` contains one page per public project.
- `_bibliography/papers.bib` is the publication source of truth for the Research page.
- `assets/img/` contains only assets cleared for public use.
- `assets/css/site.css` is the self-contained public layout. Do not reintroduce external CSS/JS as a critical layout dependency.

## Language and design

- Chinese is the primary public language for the current release. Add English later as a parallel route backed by the same facts, not a second drifting copy.
- Keep the visual system quiet and research-led: one accent color, one content column, restrained cards, fixed image dimensions, and no decorative dashboard components.
- The site must remain readable if all third-party CDNs are unavailable. Do not add `polyfill.io`, remote Bootstrap, Google Fonts, or remote icon libraries as required resources.

## Quality checks

Before publishing:

1. Check YAML front matter and internal links.
2. Build the Jekyll site or confirm the GitHub Actions build passes.
3. Review desktop and mobile layouts.
4. Search for template sample content and private information.
5. Commit one coherent public-site change set.

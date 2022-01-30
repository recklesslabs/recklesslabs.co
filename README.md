# recklesslabs.co

Source code for Reckless Labs' website - [recklesslabs.co](https://recklesslabs.co/).

## Design

I like the Github's HTML styling for their READMEs, therefore this website was built by forking [`markdown-to-html-github-style`](https://github.com/KrauseFx/markdown-to-html-github-style).

The `style.css` is borrowed directly from there. However, major improvements are made to the site generation program. The deployment is done via Firebase Hosting + Github Actions.

---

## Future

This is the start of a WYSIWYG website builder that lives on Github, and deploys automatically on every commit. The natural extension of the current project would be to add support for multiple pages and linking across them. This should be done by post-processing local links in the generated HTML. In the future, the site generator could be hoisted out into a library.

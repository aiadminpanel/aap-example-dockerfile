# aap-example-dockerfile

A minimal **Dockerfile** app, kept as a deploy example for [AI Admin Panel](https://aiadminpanel.com).

AI Admin Panel deploys it from this repository with **Git Deploy** (and **AI Deploy**) and checks
the result regularly: the page at `/` must contain the marker `aap-example:dockerfile`. Use it to see how
your own Dockerfile project is built, or as a starting point.

This repository brings its own `Dockerfile`, so the panel builds it with `docker build` instead of guessing the stack.

- The app listens on `$PORT` (default 8080).
- No secrets in this repository.
- License: MIT.

#!/usr/bin/env bash
# Build both CV PDFs and copy them into public/cv/ (served at /cv/*.pdf).
# Requires a LaTeX toolchain (pdflatex + latexmk); TeX Live / MacTeX both work.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p ../public/cv

for f in cillian-hourican-cv-academic cillian-hourican-cv-freelance; do
  echo "Building $f ..."
  TEXINPUTS=".:" latexmk -pdf -interaction=nonstopmode -halt-on-error "$f.tex" >/dev/null
  cp "$f.pdf" ../public/cv/
done

# clean intermediate build files (keep the .pdf here too for convenience)
latexmk -c >/dev/null 2>&1 || true
echo "Done. PDFs copied to ../public/cv/"

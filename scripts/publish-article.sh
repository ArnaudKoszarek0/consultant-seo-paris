#!/bin/bash
# publish-article.sh - Publie un article de blog et push sur GitHub
# Usage: ./publish-article.sh "slug" "title" "description" "date" "tags" "content_file"

SLUG="$1"
TITLE="$2"
DESC="$3"
DATE="$4"
TAGS="$5"
CONTENT_FILE="$6"
REPO_DIR="/root/clawd/projects/consultant-seo-paris"
BLOG_DIR="$REPO_DIR/src/content/blog"

# Create frontmatter + content
cat > "$BLOG_DIR/$SLUG.md" << FRONTMATTER
---
title: "$TITLE"
description: "$DESC"
date: "$DATE"
tags: [$TAGS]
---

FRONTMATTER

cat "$CONTENT_FILE" >> "$BLOG_DIR/$SLUG.md"

# Git commit and push
cd "$REPO_DIR"
git add -A
git commit -m "Article: $TITLE"
git push origin main 2>&1

echo "Published: $SLUG"

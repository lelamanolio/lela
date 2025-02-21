---
layout: ../../layouts/MarkdownPostLayout.astro
title: "How to convert kebab-case into camelCase"
pubDate: 2022-07-01
description: "This is the first post of my new Astro blog."
author: "Astro Learner"
image:
  url: "https://docs.astro.build/assets/rose.webp"
  alt: "The Astro logo on a dark background with a pink glow."
tags: ["astro", "blogging", "learning in public"]
---

# How to convert kebab-case into camelCase

Regex to convert a kebab-case (foo-bar) string into camelCase (fooBar)

```js
let string = "foo-bar";

string.replace(/-([a-z])/g, function (g) {
	return g[1].toUpperCase();
}); // it converts the string into fooBar
```

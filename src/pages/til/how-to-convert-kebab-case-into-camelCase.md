---
layout: ../../layouts/MarkdownPostLayout.astro
title: "How to convert kebab-case into camelCase"
date: February 22, 2025
tags: ["js", "regex"]
---

# How to convert kebab-case into camelCase

Regex to convert a kebab-case (foo-bar) string into camelCase (fooBar)

```js
let string = "foo-bar";

string.replace(/-([a-z])/g, function (g) {
	return g[1].toUpperCase();
}); // it converts the string into fooBar
```

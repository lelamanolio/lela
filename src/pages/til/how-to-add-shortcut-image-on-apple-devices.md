---
layout: ../../layouts/TilPost.astro
title: "How to add shortcut image on Apple devices"
date: February 22, 2025
tags: ["html", "mobile devices"]
---

# How to add shortcut image on Apple devices

On both Android and iOS devices, it is possible to add a shortcut in the home screen to a website. On Android devices all a developer has to do is set a favicon in the website to properly show the icon on the shortcut, but the same can't be said for iOS devices.

You have to set the touch icon to display the icon on the shortcut on Apple devices like so:

```html
<link rel="apple-touch-icon" href="/path/to/file" />
```

In order for the icon to work correctly, it should be save as a PNG.
If you want to have the best resolution on all your iOS devices, you can set multiple icon with the property `sizes`.

```html
<link rel="apple-touch-icon" sizes="180x180" href="/path/to/file" />
```

Here a table displaying the correct icon size per device.
| Device | Icon size |
| ------ | --------- |
| iPhone | 180px x 180px |
| iPhone (X/Plus) | 120px x 120px |
| iPad Pro | 167px x 167px |
| iPad, iPad mini | 152px x 152px |

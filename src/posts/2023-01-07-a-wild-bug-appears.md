---
title: a wild bug appears
layout: blog
---
Turns out that there's a [known bug](https://github.com/netlify/netlify-cms/issues/6300) with the markdown widget in Netlify CMS that prevents input on Android devices. Which is unfortunate because that's a huge reason for why I chose a CMS in the first place: to write posts on mobile.

I changed the main content input to use the `text` widget, and wonder if my blog will render markdown regardless. If it does, that might be good enough.

Since Netlify CMS is open source, I have half a mind to attempt to debug the issue, but I haven't picked up my phone yet today and I'm trying to resist looking at it for as long as I can. If I did want to give it a go, there's some setup I can try first: see how to run Netlify CMS locally in development mode, figure out where the rich text editor lives, etc. But weekend time is precious, and I'm not sure if I want to spend it up to my elbows in mobile web debug.
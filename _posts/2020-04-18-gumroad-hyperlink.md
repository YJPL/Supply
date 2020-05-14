---
title: Gumroad hyperlink
layout: post
description_markdown: >-
  Using a simple Gumroad hyperlink with Supply.
date: 2020-04-23 12:48:59 +0100
categories: [Jekyll, tutorial, Gumroad]
tags: [hyperlink]
---
Sometimes all you need is a [simple hyperlink](https://gum.co/soon-jekyll) to your product on Gumroad.
{% include gumroad-link.html id="soon-jekyll" %}

First, write your hyperlink in Markdown, as you'd normally do.

In this example, we have

``` markdown
{% raw %}[simple hyperlink](https://gum.co/soon-jekyll){% endraw %}
```

then add this include

```liquid
{% raw %}{% include gumroad-link.html id="soon-jekyll" %}{% endraw %}
```

Now we have a [simple hyperlink](https://gum.co/soon-jekyll) with a Gumroad overlay.

## Related file:

`gumroad-link.html` in `_includes`

---
title: Gumroad hyperlink
layout: post
description_markdown: >-
  How to use a simple Gumroad hyperlink with Supply.
date: 2020-04-23 12:48:59 +0100
categories: [Jekyll, tutorial, Gumroad]
tags: [hyperlink]
---
Sometimes all you want is a [simple hyperlink](https://gum.co/soon-jekyll) to your product on Gumroad.
{% include gumroad-link.html id="soon-jekyll" %}

To do this, first, write your hyperlink in Markdown, as you’d normally do.

In this example, we write

``` markdown
{% raw %}[simple hyperlink](https://gum.co/soon-jekyll){% endraw %}
```

then add this include

```liquid
{% raw %}{% include gumroad-link.html id="soon-jekyll" %}{% endraw %}
```

And the result is a [simple hyperlink](https://gum.co/soon-jekyll) with a Gumroad overlay.
(click on the link to check the product overlay)

## Related file:

`gumroad-link.html` in `_includes`

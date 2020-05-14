---
name: Post with products
layout: post
description_markdown: >-
  This is an example post with a product with Gumroad overlay.
date: 2020-04-17 12:48:59 +0100
id: supply
price: Free
text-button: I want to use this theme!
image: /images/templates/assignments/assignments_tracker_spreadsheet.png
categories: [Jekyll, tutorial, Gumroad]
tags: [hyperlink, embed, overlay]
---

# How to a product(s) to a post
On top of your products collection, you can of course add a product in a regular post, using the [hyperlink](/gumroad-hyperlink), [embed](/gumroad-embed/) or the [overlay](/gumroad-overlay/) methods.


## Soon, a coming soon page template for Jekyll
There is an easy way to add a product overlay with a simple link, like this: [Soon](https://gum.co/soon-jekyll) is a *coming soon* Jekyll template page.

{% include gumroad-link.html id="soon-jekyll" %}


In the hyperlink example above, we have:

``` markdown
{% raw %}[simple hyperlink](https://gum.co/soon-jekyll){% endraw %}
```

to which we add this include:

```liquid
{% raw %}{% include gumroad-link.html id="soon-jekyll" %}{% endraw %}
```


## Supply, an e-commerce theme for Jekyll + Gumroad
[Supply](https://gum.co/supply) is an e-commerce template for [Jekyll](https://jekyllrb.com/) + [Gumroad](https://gumroad.com) designed by [alternatyves](https://alternatyves.com/). Browse through a [live demo](https://templates.supply).

<a href="https://gum.co/supply" class="no-underline pv2 grow db"><img class="w-100" src="/images/screenshot.png"></a>

{% include gumroad-overlay.html id="supply" %}


You can of course add a product in a post, using the [embed](/gumroad-embed/) or [overlay](/gumroad-overlay/) snippets include.

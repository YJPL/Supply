---
name: Post with products
layout: post
description_markdown: >-
  This is an example post with a product with Gumroad overlay.
date: 2020-04-23 12:48:59 +0100
id: supply
price: Free
text-button: I want to use this theme!
image: /images/templates/assignments/assignments_tracker_spreadsheet.png
categories: [Jekyll, tutorial, Gumroad]
tags: [hyperlink, embed, overlay]
---

# How to add product(s) to a post
On top of your product collection, you can, of course, add a product in a regular post, using the [hyperlink](/gumroad-hyperlink), [embed](/gumroad-embed/), or the [overlay](/gumroad-overlay/) methods.


## Hyperlink method
There is an easy way to add a product overlay with a simple link, like this: [Soon](https://gum.co/soon-jekyll "Soon, a coming soon page template for Jekyll") is a *coming soon* page template for Jekyll.

{% include gumroad-link.html id="soon-jekyll" %}
(click on the link to check the product overlay)

In the hyperlink example above, we have:

``` markdown
{% raw %}[simple hyperlink](https://gum.co/soon-jekyll){% endraw %}
```

to which we add this include:

```liquid
{% raw %}{% include gumroad-link.html id="soon-jekyll" %}{% endraw %}
```

## Gumroad embed
You can easily embed a product from Gumroad within your site or page.

Suppose we have a Gumroad product: [Supply](https://gum.co/supply){: .pink .hover-light-pink}, an e-commerce template for [Jekyll](https://jekyllrb.com/) + [Gumroad](https://gumroad.com), designed with [Tachyons CSS](https://github.com/tachyons-css/tachyons) by [alternatyves](https://alternatyves.com/).

To embed this product, we need to add a short include with the product id to our page or post.
In this example, the ID is `supply`, so we add this include with that:

```liquid
{% raw %}{% include gumroad-embed.html id="supply" %}{% endraw %}
```

```liquid
{% raw %}{% include gumroad-embed.html id="supply" %}{% endraw %}
```

That will output the product directly on your page:

{% include gumroad-embed.html id="supply" %}

## Gumroad Overlay
Here is how to add a Gumroad overlay to an image on your site:
```html
{% raw %}<a href="https://gum.co/supply" class="no-underline pv2 grow db"><img class="w-100" src="{{site.baseurl}}/images/screenshot.png"></a>

{% include gumroad-overlay.html id="supply" %}{% endraw %}
```

That will output

<a href="https://gum.co/supply" class="no-underline pv2 grow db"><img class="w-100" src="{{site.baseurl}}/images/screenshot.png"></a>

{% include gumroad-overlay.html id="supply" %}


Clicking on this image will prompt the Gumroad overlay on your page.

The overlay method lets users buy securely from Gumroad without leaving your site!

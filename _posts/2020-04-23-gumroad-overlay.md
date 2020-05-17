---
title: Gumroad Overlay
layout: post
description_markdown: >-
  How to use Gumroad overlay code snippets with Supply.
date: 2020-04-23 12:48:59 +0100
image:
text-button: I want this theme!
categories: [Jekyll, tutorial, Gumroad]
tags: [overlay]
---
Gumroad Overlay is a nice function that lets users on desktop computers buy products from you without ever having to leave your website.

You can read [more about Gumroad Overlay here](https://help.gumroad.com/article/135-setting-up-the-gumroad-overlay-on-your-website).
{: .notice}

## How to use Gumroad Overlay with Supply
You'll find Gumroad integration snippets in `_includes`.
There are two ways to post a Gumroad product on your site: embed or overlay.
In this post, we will look at how to use the overlay method.

To create a *buy* button that with an overly to your product published on Gumroad, all you need is its ID.

```liquid
{% raw %}{% include gumroad-overlay.html id="soon-jekyll" %}{% endraw %}
```
will output a Gumroad button:

{% include gumroad-overlay.html id="soon-jekyl" %}

Please note that you should customize the button text in your post or page front matter.

If you click on this button, you'll get an overlay of the product page on your post page.

Now, it would be a lot nicer if we had an actual product image linking to Gumroad overlay, right?
For this, we simply need to add a link to an image of the product.
For example, let's start this Gumroad link: [https://gum.co/soon-jekyll](https://gum.co/soon-jekyll){: .pink .hover-light-pink}
Let's add a product image in the `images` folder of our site, then we can write this above our button include liquid snippet:

```html
{% raw %}<a href="https://gum.co/soon-jekyll" class="no-underline pv2 grow db"><img class="w-100" src="/images/templates/jekyll/Soon_Jekyll-template-sample.png"></a>

{% include gumroad-overlay.html id="soon-jekyll" %}{% endraw %}
```

Note that you can add class to style your html and image.
{: .notice}

It now looks much better:

<a href="https://gum.co/soon-jekyll" class="no-underline pv2 grow db"><img class="w-100" src="/images/templates/jekyll/Soon_Jekyll-template-sample.png"></a>

{% include gumroad-overlay.html id="soon-jekyll" %}

Clicking on this image will prompt the Gumroad overlay on your page.

The overlay method lets users buy securely from Gumroad without leaving your site!

Last, here is how you can [make your custom buttons with Overlay](https://help.gumroad.com/article/106-using-custom-buttons-with-overlay).

## Related files:

`gumroad-overlay.html` in `_includes`


You can also include your product Gumroad ID in your post or page front-matter.
{: .notice}

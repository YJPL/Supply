---
title: Use Gumroad Embed
layout: post
description_markdown: >-
  Built-in site search functionality.
date: 2020-04-23 12:48:59 +0100
image:
categories: [Jekyll, tutorial, Gumroad]
tags: [embed]
---
You'll find Gumroad integration snippets in `_includes`.
There are two ways to post a Gumroad product on your site: embed or overlay.
On this post we will look how to use the embed method.

## Gumroad embed

Let's start with a Gumroad link to a product: [https://gum.co/soon-jekyll](https://gum.co/soon-jekyll){: .pink .hover-light-pink}

Now this snippet:

```liquid
{% raw %}{% include gumroad-embed.html id="soon-jekyll" %}{% endraw %}
```
will output the link to our product:

{% include gumroad-embed.html id="soon-jekyll" %}

If you click on it, you'll get to that product page on Gumroad.

Now, it would be a lot nicer if we had an actual product image linking to Gumroad overlay, right?
Let's write this above our include liquid snippet:

```html
{% raw %}<a href="https://gum.co/soon-jekyll" class=""><img class="w-100" src="/images/templates/jekyll/Soon_Jekyll-template-sample.png"></a>{% endraw %}
```

```liquid
{% raw %}{% include gumroad-embed.html id="soon-jekyll" %}{% endraw %}
```

Note that you can add class to style your html and image according to your site styling and layout.
{: .notice}

That will output the following:

<a href="https://gum.co/soon-jekyll" class="no-underline pv2 grow db"><img class="w-100" src="/images/templates/jekyll/Soon_Jekyll-template-sample.png"></a>
{% include gumroad-embed.html id="strip" %}

It now looks much better.

Clicking on the image or button will link to a new page: the embed code takes the visitor to the Gumroad product page.

Don't forget to add your custom ```text-button```copy in your page front matter.

## Related files:

`gumroad-embed.html` in `_includes`

You can also include your product Gumroad ID in your post or page front-matter if you prefer.
{: .notice}

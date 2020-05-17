---
title: Gumroad Embed
layout: post
description_markdown: >-
  How to use Gumroad embed code snippets with Supply.
date: 2020-04-23 12:48:59 +0100
image:
categories: [Jekyll, tutorial, Gumroad]
tags: [embed]
---
You'll find Gumroad integration snippets in `_includes`.
There are two ways to post a Gumroad product on your site: embed or overlay.
In this post, we will look at how to use the embed method.

## Gumroad embed
You can easily embed a product from Gumroad within your site or page.

Suppose we have a Gumroad product: [https://gum.co/supply](https://gum.co/supply){: .pink .hover-light-pink}

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

> If you have an SSL Certificate set up, the buying process is completely inline. If your site is not secured with HTTPS, you can redirect customers to the payment form in a new, secured tab.
—[GUMROAD Documentation](https://help.gumroad.com/article/44-build-gumroad-into-your-website)

## Related files:

`gumroad-embed.html` in `_includes`

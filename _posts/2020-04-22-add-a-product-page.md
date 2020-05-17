---
title: How to add a product page
layout: post
description_markdown: >-
  How-to create a new product page in your products collection.
date: 2020-04-22 12:48:59 +0100
categories: [Jekyll, tutorial, Gumroad]
tags: [front matter, product, page, customization]
---

## Jekyll collections front matter type
To add a new product page, simply add a file in the `_products` directory and include the necessary front matter.

Take a look at the product pages samples source to get an idea about how it works, you can these in the `_products` collection folder. By design, all the products are on display on the home page, in Supply, that is `ìndex.html`.

You can manually create pages to [sort your product collection by custom variable](/custom-variables/).

You can also add Gumroad overlay for products in posts thanks to an include.

Write something like:

``` liquid
{% raw %}<a href="https://gum.co/supply" class="no-underline pv2 grow db"><img class="w-100" src="/images/screenshot.png"></a>
{% include gumroad-overlay.html id="supply" %}{% endraw %}
```

Since Jekyll 4.0, the `link` tag now comes with the `relative_url` filter incorporated into it. You should no longer prepend `site.baseurl` to `link foo.md` For further details: [https://github.com/jekyll/jekyll/pull/6727](https://github.com/jekyll/jekyll/pull/6727)
{: .notice}

to get a product display like this:

<a href="https://gum.co/supply" class="no-underline pv2 grow db"><img class="w-100" src="/images/screenshot.png"></a>

{% include gumroad-overlay.html id="supply" %}

Don't forget to customize your Gumroad button text in your post of product page front matter.
For instance, the front matter of this post reads like this:

``` yaml
---
title: Theme setup
layout: post
description_markdown: >-
  Start your site using Jekyll + Gumroad with the Supply theme.
date: 2020-04-16 12:48:59 +0100
categories: [Jekyll, tutorial]
text-button: I demand Supply!
---
```

You can of course [design your own "buy me" button](https://help.gumroad.com/article/106-using-custom-buttons-with-overlay) instead of the Gumroad overlay icon
{: .notice}

---
title: Using custom variables
layout: post
description_markdown: >-
  Using custom variables in front matter and creating custom pages to sort through products collection.
date: 2020-04-16 12:48:59 +0100
categories: [Jekyll, tutorial, Gumroad]
tags: [front matter, variable, customization]
---

## Jekyll collections front matter type

[Supply](/) is a Jekyll theme for e-commerce, based on a collection called ```products```.

This collection has its own custom front matter variable, or type, with different attributes.

This post is about how you can write your front matter variables on top of the Jekyll defaults, that you can later access in Liquid.

In our Supply sample case, one variable would be ```cat```, standing for categories, another could be ```software```,  ```price```, etc.

You can create variables of your own, like for instance ```apparel``` if you have T-shirt and hoodies designs,  ```prints```if you are selling prints, and so on.

This is particularly useful for collections. For example, the front matter for one of our products post could look like this:

``` yaml
---
title: 2 free anime storyboard templates
layout: product
software: PDF
cat: [anime]
description_markdown: >-
  Two free PDF Ghibli-style Anime storyboard templates, in Japanese, for 1.85:1 aspect ratio on A4 vertical.
date: 2020-01-27 12:09:50 +0100
last_modified_at: 2020-02-26 09:24:48 +0100
id:
price: Free
text-button: Cool! Give me this template, please!
image: /images/templates/free-pdf-storyboards/Japanese_Anime_storyboard-template_1.85x1_A4-vertical.png
---
```

Now suppose we would like to browse only the ```Free``` items from the ```products``` collection, Liquid templating language makes this simple to do manually. First, we need to write a page to sort the templates with the ```Free``` variable.

{% highlight html linenos %}
{% raw %}
---
title: Free products
subtitle: This is an example page to display product by genre
permalink: /free-products-samples/
hero: Free products
layout: default
---
<div itemscope itemtype="http://schema.org/ItemList" class="content" id="products">
	<section class="cf pb5 ph6-ns ph2">
		<div class="container flex-wrap flex">

    {% assign products = site.products | where_exp: "product", "product.price contains 'Free'" %}
    {% for product in products reversed %}

		<div itemprop="itemListElement" itemscope itemtype="http://schema.org/Product" class="product-list w-100 w-50-m ph2-m w-third-l ph3">
          <div itemprop="image" class="style aspect-ratio aspect-ratio--1x1" >
            <a href="{{ product.url }}" style="background-image:url({{ product.image }});"
            class="db bg-center cover aspect-ratio--object" /><h4 class="f4 helvetica bg-green no-underline white shadow-2 grow pa2 pv3 dib mr3">$ {{ product.price }}</h4>
            </a>
					</div>
						<article itemprop="itemListElement" itemscope itemtype="http://schema.org/Offer" class="product-details dib v-mid lh-copy avenir">
							<h3><a class="f5 f4-ns mb0 link black-90 link dim avenir" href="{{ product.url }}"><span itemprop="name">{{ product.title }}</span></a></h3>
							<h4 itemprop="itemOffered">Software: {{ product.software }}</h4>
							<div itemprop="description" class="product-description f6 f5 fw4 mt1 black-60 pb2">

								{{ product.description_markdown | truncate: 92 | markdownify }}

							</div>
						</article>
					</div>
				{% endfor %}
    </div>
    <h4 class="f4 helvetica">Not what you are looking for?</h4>
    {% include site-search.html %}
  </div>
</section>
</div>
{% endraw %}
{% endhighlight %}


See in [line 12](https://github.com/YJPL/Supply/blob/5b5dea526eb3b06db02c5738631d37826ad07de6/_pages/free-products.html#L12):

``` html
{% raw %}
{% assign products = site.products | where_exp: "product", "product.price contains 'Free'" %}
{% endraw%}
```

And that's it, Liquid is pretty straightforward. We can now visit the [free products page](/free-products-samples/){: .b .light-green .hover-lightest-blue}.

With Tachyons, it is easy to style your custom pages differently.
{: .notice}

---
title: Site Search
layout: post
description_markdown: >-
  Built-in site search functionality.
date: 2020-04-21 12:48:49 +0100
image:
categories: [Jekyll, tutorial, search]
---
## Built-in site search functionality

The Supply theme has **search** baked in to prompt the pages relevant to any given inquiry. To display a search box on a post or a page, you need to add one line of code. This snippet

```liquid
{% raw %}{% include site-search.html %}{% endraw %}
```

Will output the following:

{% include site-search.html %}

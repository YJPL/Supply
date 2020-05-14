---
title: Site Search
layout: post
description_markdown: >-
  Built-in site search functionality.
date: 2020-04-24 12:48:49 +0100
image:
categories: [Jekyll, tutorial, search]
---
## Built-in site search functionality

Supply theme has **search** backed in within the site, which will prompt pages relevant to a given inquiry. To add search to a post or a page, you can simply add an include:

```liquid
{% raw %}{% include site-search.html %}{% endraw %}
```

Will output the following:

{% include site-search.html %}

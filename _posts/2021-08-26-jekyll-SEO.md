---
name: SEO with Supply
layout: post
description_markdown: >-
  Add metadata tags for search engines and social networks to better index you site using Supply.
date: 2021-08-26
image: /images/templates/assignments/assignments_tracker_spreadsheet.png
categories: [Jekyll, tutorial]
tags: [SEO]
---

# SEO
Supply comes with the [Jekyll SEO Tag](https://jekyll.github.io/jekyll-seo-tag/) plugin installed.


## How it works
Jekyll SEO Tag adds metadata tags for search engines and social networks to better index and display your site’s content.

## Uninstall Jekyll SEO Tag
There are other ways to implement search engine optimisation with Jekyll, or you may not need this.

In case you would like to uninstall the plugin, here is how to do it: 

Remove this line in your Gemfile: ```gem 'jekyll-seo-tag'```.

In your default.html file in ```_layouts```, remove [line 20](https://github.com/YJPL/templates-supply/blob/d8db8e425a3373e7cff1660fced6e6d8d6acb651/_layouts/default.html#L20).


In your site’s _config.yml, remove 


```
plugins:
- jekyll-seo-tag
```

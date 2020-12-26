---
title: Theme setup
layout: post
description_markdown: >-
  Start your site using Jekyll + Gumroad with the Supply theme.
date: 2020-04-16 12:48:59 +0100
categories: [Jekyll, tutorial]
text-button: I demand Supply!
---
## Getting started with Jekyll + *Supply*
Supply is designed to sell products through [Gumroad](https://gumroad.com), but you can also use the theme to start a regular Jekyll blog.

## Setup

1. Install [Jekyll](https://jekyllrb.com/docs/installation/)
2. Add your site and author details in `_config.yml`.
3. Get a workflow going to see your site's output with Jekyll locally using Jekyll commands or Gulp.

*Supply* was built with [Jekyll](http://jekyllrb.com/) version 4.0.0, and should support newer versions as well.

Install the dependencies with [Bundler](http://bundler.io/):

~~~bash
$ bundle install
~~~

Run `jekyll` commands through Bundler to ensure you're using the right versions:

~~~bash
$ bundle exec jekyll serve
~~~

### Config
Add your custom configuration in the ```_config``` file.

### Navigation

Exposed as a data file to give clients better access
Set in the *Data* / *Navigation* section, look for ```navigation.yml``` in  ```_data```.

### Footer
Look for ```footer.html``` in ```_includes``` to add and change your footer links.

### Contact Page
To add you formcarry endpoint url to `_config.yml`, you'll need a fromcarry account, please refer to [formcarry documentation](https://formcarry.com/documentation/getting-started)

Add your map coordinates if you want to display a map. Please refer to the [jekyll-leaflet plugin](https://davidjvitale.com/tech/jekyll-leaflet/getting-started/) and [Leaflet](https://leafletjs.co
  m) documentation for customizing your map(s).

### Product Pages
If you have products on Gumroad, you can start right away by adding your product pages. Within the Supply theme you'll find sample of product page with free products, located in ```_pages```.

## Develop

### Building front-end assets: styles and scripts

Install Node module dependencies:

~~~bash
npm install
~~~


### Tachyons

You can change the site styling using [Tachyons](http://tachyons.io), look for `sup-theme` in the `src` folder.

Please refer to Tachyons documentation, you can also start with [https://github.com/dwyl/learn-tachyons](https://github.com/dwyl/learn-tachyons)

### Gulp commands with browser reload

In the terminal, simply run

~~~bash
gulp build
~~~

to build your site concatenate your css (in `asset` -> `css`)


Use


~~~bash
gulp watch
~~~

This command builds the site locally on port 3000, with [Browsersync](https://www.browsersync.io) so you can quickly revise design changes.


Preview your site with browser reload at: [localhost:3000](http://localhost:3000)
Use the address localhost:3001 for additional help like grid preview, css highlight and more during development.


## Editing

### Posts

* Add, update or remove a post in the *Posts* collection.
* Change the defaults when new posts are created in `_posts/_defaults.md`.

### Collections
You can find products samples in the `_products` collection folder. By design all the products are on display on the home page.
You can manually create pages to sort the template collection by custom variable.

You can also add Gumroad overlay for products or templates in posts thanks to an include.

Write something like:

``` liquid
{% raw %}<a href="https://gum.co/supply" class="no-underline pv2 grow db"><img class="w-100" src="/images/screenshot.png"></a>
{% include gumroad-overlay.html id="supply" %}{% endraw %}
```

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

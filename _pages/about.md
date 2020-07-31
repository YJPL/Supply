---
permalink: /about/
title: About
hero: About
text-button: I demand Supply!
---
## Supply, a Jekyll theme
Supply is an e-commerce template for [Jekyll](https://jekyllrb.com/) + [Gumroad](https://gumroad.com), designed with [Tachyons CSS](https://github.com/tachyons-css/tachyons) by [alternatyves](https://alternatyves.com/).
If you are a Gumroad creator, you can use Supply with Jekyll to display products within your site or blog.

[Supply Code on GitHub](https://github.com/YJPL/Supply/){: .btn .btn-outline--secondary }

[Demo Site with documentation](/){: .btn .btn-outline--info }

[Templates Supply](https://templates.supply){: .btn .btn-outline--success }


<a href="https://gum.co/supply" class="no-underline pv2 grow db"><img class="w-100" src="/images/templates/jekyll/Supply-temp.png"></a>

{% include gumroad-overlay.html id="supply" %}

Find more [templates, themes, and Jekyll tutorials](https://jekyllrb.com/resources/).

## Features

- [x] List & display products, thanks to Jekyll's collections
- [x] Take payment online using [Gumroad](https://gumroad.com)
- [x] Contact form with [formcarry](https://www.formcarry.com)
- [x] Map with [Leaflet](https://leafletjs.com "Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps.") thanks to the [jekyll-leaflet plugin](https://github.com/DavidJVitale/jekyll-leaflet)
- [x] [jekyll-archives](https://github.com/jekyll/jekyll-archives) to build and sort through categories & tags pages
- [x] Custom variables
- [x] RSS/Atom feed
- [x] SEO tags
- [x] Microdata markup
- [x] [Gulp.js](https://gulpjs.com) + [Browsersync](https://www.browsersync.io) for fast development
- [x] Built-in site search

## Setup

1. Install [Jekyll](https://jekyllrb.com/docs/installation/)
2. Add your site and author details in `_config.yml`.
3. Get a workflow going to see your site's output with Jekyll locally.

*Supply* was built with [Jekyll](http://jekyllrb.com/) version 4.0.0 and should support newer versions as well.

Install the dependencies with [Bundler](http://bundler.io/):

~~~bash
$ bundle install
~~~

Run Jekyll commands through Bundler to ensure you're using the right versions:

~~~bash
$ bundle exec jekyll serve
~~~

### Config
Add your custom configuration in the ```_config``` file.

### Navigation

* Exposed as a data file to give clients better access
* Set in the *Data* / *Navigation* section, look for ```navigation.yml``` in  ```_data```.

### Footer
Look for ```footer.html``` in ```_includes``` to add and change your footer links.

### Contact Page
To add you formcarry endpoint URL to `_config.yml`, you'll need a fromcarry account, please refer to [formcarry documentation](https://formcarry.com/documentation/getting-started)

Add your map coordinates if you want to display a map. Please refer to the [jekyll-leaflet plugin](https://davidjvitale.com/tech/jekyll-leaflet/getting-started/) and [Leaflet](https://leafletjs.co
  m) documentation for customizing your map(s).

### Product Pages
If you have products on Gumroad, you can start adding product pages right away. Within the Supply theme, you'll find a sample of a product page with free products, ```free-products.html```, located in ```_pages```.


## Develop

### Building front-end assets: styles and scripts

4. Install Node module dependencies:

~~~bash
npm install
~~~

### Tachyons

You can change the site styling using [Tachyons](http://tachyons.io), look for the CSS in the `sup-theme` file, located in the `src` folder.

Tachyons is a CSS toolkit and design system based on using components. Please refer to [Tachyons documentation](http://tachyons.io/docs/), you can also start with [https://github.com/dwyl/learn-tachyons](https://github.com/dwyl/learn-tachyons)

### Gulp commands with browser reload

Supply uses a couple of custom Gulp.js commands. To build your site concatenate your CSS (in `assets` -> `CSS`), simply run:

~~~bash
gulp build
~~~

in Terminal.

Then use


~~~bash
gulp watch
~~~

This command builds the site locally on port 3000, with [Browsersync](https://www.browsersync.io) so you can quickly revise design changes.


Preview your site with browser reload at [localhost:3000](http://localhost:3000)
Use the address [localhost:3001](http://localhost:3001) for additional features like grid preview, CSS highlighting, and more during development.


## Editing

### Posts

* Add, update, or remove a post in the *Posts* collection.
* Change the defaults when new posts are created in `_posts/_defaults.md`.

### Collections
To display products, Supply uses a collection called ```product```
You will find a series of product samples in the `_products` collection folder. By design, all the products are on display on the home page, in Supply, that is `ìndex.html`.
You can manually create pages based on this index to [sort your products or any other collection by custom variable](/custom-variables/).

You can also add your products in regular posts, using the Gumroad [overlay](/gumroad-overlay/), [embed](/gumroad-embed/), and [hyperlinks](/gumroad-hyperlink/) method, thanks to an include snippet.

Write something like:

```html
{% raw %}<a href="https://gum.co/supply class="no-underline pv2 grow db"><img class="w-100" src="/images/screenshot.png"></a>

{% include gumroad-overlay.html id="supply" %}{% endraw %}
```

to get a product display like this:

<a href="https://gum.co/supply" class="no-underline pv2 grow db"><img class="w-100" src="/images/screenshot.png"></a>

{% include gumroad-overlay.html id="supply" %}

## Open-source

[Get Supply](https://github.com/YJPL/Supply/archive/master.zip){: .btn .btn-outline--secondary }

<iframe src="https://github.com/sponsors/YJPL/button" title="Sponsor YJPL" height="35" width="107" style="border: 0;"></iframe>

<a href="https://www.buymeacoffee.com/alternatyves/" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

Please use and contribute to [Supply on GitHub](https://github.com/YJPL/Supply/){: .b .blue .hover-light-blue}
{: .notice}

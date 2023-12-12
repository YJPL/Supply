## Supply, an e-commerce Jekyll theme with Gumroad integration

[![Netlify Status](https://api.netlify.com/api/v1/badges/d0fa21a2-19fa-45da-a77a-024c58295e7f/deploy-status)](https://app.netlify.com/sites/supply-demo/deploys)

Supply is an e-commerce template for [Jekyll](https://jekyllrb.com/) + [Gumroad](https://gumroad.com), designed with [Tachyons CSS](https://github.com/tachyons-css/tachyons).

If you are a Gumroad creator, you can use Supply with Jekyll to display and sell products on your site or blog.

[Demo Site with documentation](https://supply.templates.supply)

Browse through a live demo: [https://templates.supply](https://templates.supply).

![Supply template screenshot](/images/screenshot.png)

Supply is designed by [alternatyves](https://alternatyves.com/).

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
- [x] Jekyll `livereload` + NPM for fast development
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

Run `jekyll` commands through Bundler to ensure you're using the right versions:

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

Once you are done with your style changes, run:

Run the npm run 
~~~bash
build:css
~~~

That will process all your CSS files in one readable file located in `assets/css/sup-tachyons.css`. 

to minify your css you can run 

```
npm run minify-css
```

or 

```
npm run start
```

to minify and build the site locally.


### npm commands with browser reload

Supply uses a couple of custom Postcss npm scripts. Make sure your dependencies are installed: `npm install`. Type `npm outdated` to see if you have outdated versions, then install any outdated dependencies.

Once that is done, to build your site & concatenate your CSS (in `assets` -> `CSS`), simply run:

```
npm run start
```

This command builds the site locally on port 4000, you can quickly revise design changes thanks to `livereload`.

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

## Copyright / License
*Supply* is designed by [alternatyves](https://alternatyves.com/) and licensed under the [MIT license](https://github.com/YJPL/Supply/blob/master/LICENSE).

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/YJPL/Supply/pulls)

Please use and [contribute to *Supply* ](https://github.com/YJPL/Supply/pulls).

<a href="https://www.buymeacoffee.com/alternatyves/" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## Who is using this?

- [x] [templates.supply](https://templates.supply)

Are you using Supply? [Let me know!](https://github.com/YJPL/supply/edit/master/README.md)

---
title: Post formatting
layout: post
description_markdown: >-
  Everything you need to format your posts.
date: 2020-04-16 12:48:59 +0100
image: /images/templates/assignments/assignments_tracker_spreadsheet.png
categories: [Jekyll, tutorial]
---
## Everything you need to format your posts

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

***


# Headings
Here are paragraph headings:

# Heading One

## Heading Two

### Heading Three

#### Heading Four

##### Heading Five

###### Heading Six

***


# Images

Add images to your post using markdown.

{% highlight markdown %}
![Mountain](/images/image-1200.jpg)
{% endhighlight %}


![Mountain](/images/image-1200.jpg)


### Image with caption

### Centered image with caption

{% include figure image_path="/images/image-600.jpg" alt="image" caption="Mountain" %}{: .full .tc}

![Mountain](/images/image-600.jpg)
{: .tc}
<figcaption>Mountain</figcaption>
{: .tc}

### Image aligned left

![Mountain](/images/image-600.jpg)
{: .tl}


### Image aligned right

![Mountain](/images/image-600.jpg)
{: .tr}


### Post width image


### Full width image


Using Markdown:

Input:
```markdown
{% raw %}![Mountain](/images/image-600.jpg)
{: .full .tc}
{% endraw %}
```

Result:

![Mountain](/images/image-1200.jpg)
{: .full tc}

Make sure your [block inline attribute lists](https://kramdown.gettalong.org/syntax.html#inline-attribute-lists){: .blue .hover-blue} like `{: .full .tc}` is not on the same line as your image markup to render styling properly
{: .notice }

# Responsive Videos


### YouTube

{% include video.html src="https://www.youtube-nocookie.com/embed/lP2ABiIFGcw" %}


### Vimeo

{% include video.html src="https://player.vimeo.com/video/198045963" %}


# Blockquotes
Single line blockquote:

>I have no idea


Multi line blockquote with a cite reference:

>I have no idea, but I do have ideas.
>
> --- <cite>Yves Capelle</cite>

***


# Tables
Table.

| Employee                 | Salary |                            |
| ------------------------ | ------ | -------------------------- |
| [John Joe](#)            | $1     | Needs a better salary      |
| [Jane Doe](#)            | $10K   | Blogging intern            |
| [Joe Bloggs](#)          | $25k   | Photographer               |
| [Jane Bloggs](#)         | $100k  | Marketer & Copywriter      |


<br>

Table with a footer.

| Header1  | Header2 | Header3  |
|:---------|:-------:|---------:|
| cell1    | cell2   | cell3    |
| cell4    | cell5   | cell6    |
|-------------------------------|
| cell1    | cell2   | cell3    |
| cell4    | cell5   | cell6    |
|===============================|
| Footer1  | Footer2 | Footer3  |

<br>

***


# Codeblocks
Minimal codeblock.

```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```

Codeblock with line numbers.

{% highlight ruby linenos %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}

Command line prompt.

```shell
$ gem install jekyll
```

This is what `<html>` code looks like in a paragraph of text.

***


# List Types
### Definition Lists

Definition
:   An exact statement or description of the nature, scope, or meaning of something: *our definition of what constitutes poetry*.


### Unordered Lists (Nested)

* List item one
    * List item one
        * List item one
        * List item two
        * List item three
        * List item four
    * List item two
    * List item three
    * List item four
* List item two
* List item three
* List item four


### Ordered List (Nested)

1. List item one
    1. List item one
        1. List item one
        2. List item two
        3. List item three
        4. List item four
    2. List item two
    3. List item three
    4. List item four
2. List item two
3. List item three
4. List item four

***

# Buttons
[primary](#){: .btn .btn--primary}
[secondary](#){: .btn .btn--secondary}
[success](#){: .btn .btn--success}
[warning](#){: .btn .btn--warning}
[danger](#){: .btn .btn--danger}
[info](#){: .btn .btn--info}
[light](#){: .btn .btn--light}
[dark](#){: .btn .btn--dark}

[primary](#){: .btn .btn-outline--primary}
[secondary](#){: .btn .btn-outline--secondary}
[success](#){: .btn .btn-outline--success}
[warning](#){: .btn .btn-outline--warning}
[danger](#){: .btn .btn-outline--danger}
[info](#){: .btn .btn-outline--info}
[light](#){: .btn .btn-outline--light}
[dark](#){: .btn .btn-outline--dark}

[extra large](#){: .btn .btn-outline--primary .btn--x-large}
[extra large](#){: .btn .btn--primary .btn--x-large}

[large](#){: .btn .btn-outline--primary .btn--large}
[large](#){: .btn .btn--primary .btn--large}

[small](#){: .btn .btn-outline--primary .btn--small}
[small](#){: .btn .btn--primary .btn--small}

[Block level button](#){: .btn .btn--primary .btn--block}
[Block level outline button](#){: .btn .btn-outline--primary .btn--block}

[uppercase](#){: .btn .btn--primary .ttu}
[capitalised](#){: .btn .btn-outline--primary .ttc}
[LOWERCASE](#){: .btn .btn--primary .ttl}

[grow](#){: .btn .btn-outline--primary .grow}
[glow](#){: .btn .btn--primary .glow .o-80}
[dim](#){: .btn .btn--primary .dim}

***

# Alerts/Notices

Beautiful notices that are designed to grab a visitors attention.
{: .notice }

Beautiful notices that are designed to grab a visitors attention.
{: .notice .notice--primary}

Beautiful notices that are designed to grab a visitors attention.
{: .notice .notice--secondary}

Beautiful notices that are designed to grab a visitors attention.
{: .notice .notice--success}

Beautiful notices that are designed to grab a visitors attention.
{: .notice .notice--warning}

Beautiful notices that are designed to grab a visitors attention.
{: .notice .notice--danger}

Beautiful notices that are designed to grab a visitors attention.
{: .notice .notice--info}

Beautiful notices that are designed to grab a visitors attention.
{: .notice .notice--light}

Beautiful notices that are designed to grab a visitors attention.
{: .notice .notice--dark}

***

## Links / Anchor Tag

[Primary link](#) - You can set custom primary colors in `sup-theme.css`.

[Open link in new tab](https://google.com){:target="_blank"}

[Link title on hover](# "Google")

[Dim on hover](#){: .hover-black .dim}

[Link without underline](#){: .link}

[Underline on hover](#){: .link .underline-hover .hover-black}


[blue link](#){: .blue .hover-blue}
[black link](#){: .black .hover-black}
[green link](#){: .green .hover-green}
[gray link](#){: .gray .hover-gray}
[yellow link](#){: .yellow .hover-yellow}
[gold link](#){: .gold .hover-gold}
[orange](#){: .orange .hover-orange}
[light-purple link](#){: .light-purple .hover-light-purple}
[pink/ hover light pink](#){: .pink .hover-light-pink}
[dark-pink/ hover hot pink](#){: .dark-pink .hover-hot-pink}
[red link/ hover dark red](#){: .red .hover-dark-red}

***

## HTML Tags

### Address Tag

<address>
  1 Infinite Loop<br/> Cupertino, CA 95014<br/> United States
</address>

### Abbreviation Tag

The abbreviation CSS stands for "Cascading Style Sheets".

*[CSS]: Cascading Style Sheets

### Cite Tag

"Code is poetry." ---<cite>Automattic</cite>

### Strike Tag

This tag will let you <strike>strikeout text</strike>.

### Emphasize Tag
The emphasize tag should *italicize* text.

### Insert Tag
This tag should denote updated text <ins>inserted</ins> in a blog post.

### Keyboard Tag
This scarcely known <kbd>keyboard tag</kbd> emulates represents user input and produces an inline element displayed in the browser's default monospace font.

### Footnotes
I get 10 times more traffic from [Google] [^1] than from
[Yahoo] [^2] or [MSN] [^3].

### Strong Tag
This tag makes **bold text, try not to overuse it tho**.

### Subscript Tag
C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>

### Superscript Tag
E = mc<sup>2</sup>

### Variable Tag
The variable tag allows you to denote <var>variables</var>.

### Horizontal Rules

***

### Mark Tag
The <mark>mark tag allows you to highlight parts</mark> of your text.


Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: http://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

[^1]: http://google.com/        "Google"
[^2]: http://search.yahoo.com/  "Yahoo Search"
[^3]: http://search.msn.com/    "MSN Search"

---
title: Post with code blocks
layout: post
date: 2020-04-17 10:48:48 +0100
description_markdown: >-
  Start a blog or a static site with Jekyll.
image: /images/templates/assignments/assignments_tracker_spreadsheet.png
categories: [Jekyll, tutorial]
tags: [codeblocks, linenos, syntax highlighting]
---


This is how to add codeblocks to your posts


### Codeblocks

Input:

{% highlight text %}
``` ruby
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
```
{% endhighlight %}

Output:

``` ruby
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
```


### Codeblocks with line numbers

Input:

{% highlight text %}
``` text
{% highlight ruby linenos %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
{% endhighlight %}
```
{% endhighlight %}

Output:

{% highlight ruby linenos %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}


### Command line prompt

Input:

{% highlight text %}
```text
$ gem install jekyll
{% endhighlight %}
```

Output:

```shell
$ gem install jekyll
```

### Code in a paragraph

Input:

```
{% raw %}This is what `<html>` code looks like in a paragraph of text.{% endraw %}
```

Output:

This is what `<html>` code looks like in a paragraph of text.

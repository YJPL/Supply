---
title: Post with responsive videos
layout: post
date: 2020-04-20 13:20:50 +0100
description_markdown: >-
  Start a blog or a static site with Jekyll.
image: /images/templates/assignments/assignments_tracker_spreadsheet.png
categories: [Jekyll, tutorial]
tags: [video]
---

Here are two examples of how to add responsive video to a post or page.

### YouTube

{% include video.html src="https://www.youtube-nocookie.com/embed/RjggipNdmXw" %}


Add a responsive Youtube video by using the video include.

Input:
```liquid
{% raw %}{% include video.html src="https://www.youtube-nocookie.com/embed/RjggipNdmXw" %}{% endraw %}
```

Output:

```html
<div class="aspect-ratio aspect-ratio--16x9 w-100 mb4">
  <iframe class="aspect-ratio--object" src="https://www.youtube-nocookie.com/embed/RjggipNdmXw" frameborder="0" allowfullscreen></iframe>
</div>
```

### Vimeo

{% include video.html src="https://player.vimeo.com/video/198045963" %}

Add a responsive Vimeo video by using the video include.

Input:

```liquid
{% raw %}{% include video src="https://player.vimeo.com/video/198045963" %}{% endraw %}
```

Output:

```html
<div class="aspect-ratio aspect-ratio--16x9 w-100 mb4">
  <iframe class="aspect-ratio--object" src="https://player.vimeo.com/video/198045963" frameborder="0" allowfullscreen></iframe>
</div>
```

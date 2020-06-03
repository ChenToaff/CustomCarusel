# Custom Carousel

## A carousel with multiple elements at once.

<img src="readme files/CustomCarousel.png" />

# Usage:

```HTML
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
<link rel="stylesheet" type="text/css" href="CustomCarousel.css" />
<script src="CustomCarousel.js"></script>
```

```HTML
<h1 class="CustomCarousel-header">
     Header
</h1>
<div class="CustomCarousel" data-padding="3">
     <div class="CustomCarousel-inner"></div>
     <button class="btn-prev"><</button>
     <button class="btn-next">></button>
</div>
```

## Optional:

data-padding= 'X'.
<br>
Adds padding between the items.
<br>
<br>

# Columns Version:

adding "Columns" - gives you the ability to decide how many items will show per screen ratio.

```HTML
<div class="CustomCarousel"  data-items="2,4,5,6,8">
...
</div>
```

<p>
<h3><b>just add:</b> data-items= 'X, X, X, X, X'. (replace with numbers)
</h3>

\*The screen ratios are identicale to the bootsrtap ones:
<img src="readme files/sizes.png" />

</p>

# Extras:

<img src="readme files/CustomCarousel.gif" />
The extras.css is used to create an hover affect.
<br>
it should be used with "CustomCarousel-footer":

```HTML
<link rel="stylesheet" type="text/css" href="extra.css" />
```

```HTML
<h1 class="readme files/CustomCarousel-header">
     ...
</h1>
<div class="CustomCarousel">
     <div class="CustomCarousel-inner">
          ...
     </div>
     <button class="btn-prev"><</button>
     <button class="btn-next">></button>
</div>
<div class="CustomCarousel-footer"></div>
```

# AngularParallaxJS
AngularParallaxJS is an AngularJS module with a goal to provide all the parallax functionality you could possibly dream of.

## Current Parallax Features

- Move element horizontally on horizontal mouse movement.
- Move element vertically on page scroll.

## TODO Parallax Features

- Move element vertically on mouse movement.
- Move element horizontally on page scroll.

## Usage

Add the ```parallax``` attribute to the element you are wanting to use parallax on.

```
<div class="redBox" parallax></div>
```

Add the ```x``` attribute to the element.  Set it equal to the desired x-position of the element.

```
<div class="redBox" parallax x="100"></div>
```

Add the ```y``` attribute to the element.  Set it equal to the desired y-position of the element.

```
<div class="redBox" parallax x="100" y="100"></div>
```

Add the ```paratype``` attribute to the element.  Set it equal to the desired parallax effect (See the [API](https://github.com/michaeldistler/angular-parallaxJs#api) for details).

```
<div class="redBox" parallax x="100" y="100" paratype="mousemove"></div>
```

Add the ```move``` attribute to the element.  Set it equal to the speed that you want the element to move (See the [API](https://github.com/michaeldistler/angular-parallaxJs#api) for details).

```
<div class="redBox" parallax x="100" y="100" paratype="mousemove" move=".05"></div>
```

## API

### Attributes

##### x="[x-position]"

The **x** attribute is the desired x-position of the element, from the top of the window, that you are adding parallax functionality to. 

##### y="[y-position]"

The **y** attribute is the desired y-position of the element, from the left side of the window, that you are adding parallax functionality to.

##### paratype="[parallax type]"

The **paratype** attribute is the type of parallax functionality you are looking to use on the element.  Currently, AngularParallaxJS offers parallax functionality
on a horizontal ```mousemove``` and vertically ```onscroll```.

##### move

The **move** attribute is the speed that you want the parallax element to move.  This attribute should be set as a decimal ranging from ```.05``` - ```2```.
Anything higher than ```2``` moves the element too fast but feel free to experiment.

#### License

MIT 
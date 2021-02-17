# reefer

A minimal library to make shit move.

![reefer gif](https://fredmercy.com/files/misc/reefer.gif)

<small>(video is slowed down a bit; that's when I made it into a gif...)</small>

1. try it; but maybe don't use it in production
2. it's ripped-off from [React Motion](https://github.com/chenglou/react-motion)'s "step" function algorithm
4. it has silly name but I like it 🌊 (it's from `raf`, *requestAnimationFrame*, and *reef*, because I love a good reef)

## Demo

- Open `index.html` (on a server; you may use `http-server`)
- Click the buttons

## Getting started

It's not a npm package yet, so for now, just copy those two files and dump them in your project (or, if you know how to manage that, use the github repo as a dependency in your `package.json`? I don't know...)

```js
import reefer, { onReef } from './folder-where-you-placed-it/reefer';

// grab some element from the DOM
const someElement = document.querySelector('.some-element');

const animated = {
  x: reefer(50), // this sets up an animateable value; starting with 50
  y: reefer(50),
  rotate: reefer(0),
  radius: reefer(50),
  scale: reefer(1),
})

// the callback in onReef is called on each animation frame
onReef(function() {
  // the .get() function retrieves the currently interpolated value
  someElement.style.transform = `translate(-50%, -50%) rotate(${animated.rotate.get()}deg) scale(${animated.scale.get()})`;
  someElement.style.top = `${animated.y.get()}%`;
  someElement.style.left = `${animated.x.get()}%`;
  someElement.style.borderRadius = `${animated.radius.get()}%`;
});
```

You can act on reefers using the `set` method:

```js
animated.rotate.set( 90, { stiffness: 200, damping: 16 });
```

It uses React Motion's parameters as a second parameter. You can play around with [Cheng Lou's tool](http://chenglou.github.io/react-motion/demos/demo5-spring-parameters-chooser/) to figure out the best parameters!

**reefer** will interpolate the property according to the params you've chosen. As it is interpolated, the value grabbed in the `onReef` function will update the DOM :)

## Roadmap

- detect a "rest" in the animation, and possibly fire a callback?
- use a better nomenclature
- improve the demo page
- allow animation to be time-based by translating the react-motion style parameters into real-life milliseconds, and back again
- come up with a similar thing as the [parameter chooser](http://chenglou.github.io/react-motion/demos/demo5-spring-parameters-chooser/)

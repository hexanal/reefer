# reefer

A minimal library to make shit move.

![reefer gif](https://fredmercy.com/files/misc/reefer.gif)

<small>(video is slowed down a bit; that's when I made it into a gif...)</small>

It's also:

1. a work in progress!
2. ripped-off from [React Motion](https://github.com/chenglou/react-motion)'s "step" function algorithm
3. not production ready (*duh!* see 1.)
4. using a silly name, but I like it 🌊 (it's from `raf`, *requestAnimationFrame*, and *reef*, because I love a good reef)

## Demo

- Open `index.html` (on a server; you may use `http-server`)
- Click the buttons

## Getting started

It's not a npm package yet, so for now, just copy those two files and dump them in your project (or, if you know how to manage that, use the github repo as a dependency in your `package.json`? I don't know...)

```js
// grab some element from the DOM
const someElement = document.querySelector('.some-element');

// initialize a reefer with some numeric values, in an object
const someElementAnimations = reefer({
  x: 50,
  y: 50,
  rotate: 0,
  radius: 50,
  scale: 1,
})
    // the function you pass to the `onFrame` method will be fed an object,
    // containing the current value of each defined property:
  .onFrame(({x, y, rotate, radius, scale}) => {
      // in there, you can apply whatever you want
    someElement.style.transform = `translate(-50%, -50%) rotate(${rotate}deg) scale(${scale})`;
    someElement.style.top = `${y}%`;
    someElement.style.left = `${x}%`;
    someElement.style.borderRadius = `${radius}%`;
  });
```

Then, you can act on that reefer using the `set` method:

```js
someElementAnimations.set({ rotate: 90 }, { stiffness: 200, damping: 16 });
```

It uses React Motion's parameters as a second parameter. You can play around with [Cheng Lou's tool](http://chenglou.github.io/react-motion/demos/demo5-spring-parameters-chooser/) to figure out the best parameters!

The code above sets the `rotate` property to `90`; reefer will interpolate the property according to the params you've chosen. Whatever uses that property in the `onFrame` method will get updated :)

## Roadmap

- figure out a gif or whatever Github accepts to display on a README? gotta figure out everything, man...!
- clean up the codebase
- improve the demo page
- use a better nomenclature
- figure out how to provide a callback
    - detect a "rest" in the animation, and fire a callback?
- allow animation to be time-based by translating the react-motion style parameters into real-life milliseconds, and back again
- come up with a similar thing as the [parameter chooser](http://chenglou.github.io/react-motion/demos/demo5-spring-parameters-chooser/)

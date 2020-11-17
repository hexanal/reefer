# reefer

A minimal library to make shit move.

<video><source src="https://fredmercy.com/files/misc/reefer.webm" type="video/webm"></video>

It's also:

1. a work in progress!
2. ripped-off from [React Motion](https://github.com/chenglou/react-motion)'s "step" function algorithm
3. not production ready (*duh!* see 1.)
4. using a silly name, but I like it 🌊 (it's from `raf`, *requestAnimationFrame*, and *reef*, because I love a good reef)

## Demo

- Open `index.html` (on a server; you may use `http-server`)
- Click the buttons

## Getting started

It's not a npm package yet, so for now, just copy those two files and dump them in your project.

Or if you know how to manage that, use the github repo as a dependency in your `package.json`? I don't know...

## Roadmap

- clean up the codebase
- improve the demo page
- use a better nomenclature
- figure out how to provide a callback
    - detect a "rest" in the animation, and fire a callback?
- allow animation to be time-based by translating the react-motion style parameters into real-life milliseconds, and back again
    - come up with a similar thing as the [parameter chooser](http://chenglou.github.io/react-motion/demos/demo5-spring-parameters-chooser/)

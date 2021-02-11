import stepper from './stepper.js'

// TODO how to dispose of the callbacks?
export function onFrame(fn, timestamp = 0) {
  fn(timestamp)

  requestAnimationFrame( function(timestamp) {
    onFrame(fn, timestamp)
  } )
}

// TODO extract reefer to be targeting ONE prop at a time; while running the raf?
export default function reefer(startWith = 0) {
  // in state object instead?
  let target = startWith
  let interpolated = startWith
  let currentVelocity = 0
  let spring = { stiffness: 250, damping: 25 }

  // init
  onFrame( () => framer(target, interpolated, currentVelocity) )

  // on every frame, do this
  function framer(target, start = 0, velocity = 0) {
    if (typeof target !== 'number' || typeof start !== 'number') return

    const [nextValue, nextVelocity] = stepper( start, velocity, target, spring.stiffness, spring.damping )

    interpolated = nextValue
    currentVelocity = nextVelocity
  }

  function set(newTarget, newSpring) {
    if ( typeof newTarget !== 'number' ) {
      interpolated = newTarget
      return
    }

    if ( newSpring ) spring = { ...newSpring }

    target = newTarget

    return methods
  }

  function get() {
    return interpolated
  }

  const methods = {
    set,
    get,

    getCurrentTarget: () => target,

    instantSet: value => {
      target = value
      interpolated = value
    },

    // withSpring?
    // withInertia? // acceleration?
    // withCubicBezier // change in acceleration?!!??!
  }

  return methods
}

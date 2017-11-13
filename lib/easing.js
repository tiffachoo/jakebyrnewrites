/**
 * Elastic
 */
const PERIOD = 0.3
const OVERSHOOT = PERIOD / 4
const AMPLITUDE = 1
function elasticIn (x) {
  let z = x
  if (z <= 0) {
    return 0
  } else if (z >= 1) {
    return 1
  } else {
    z -= 1
    return -(AMPLITUDE * Math.pow(2, 10 * z)) * Math.sin((z - OVERSHOOT) * (2 * Math.PI) / PERIOD)
  }
}

/** Utils */
const interpolate = (y, from, to) => (from * (1 - y) + to * y)
const flip = fn => x => 1 - fn(1 - x)

export const easingUtils = {
  interpolate,
  flip,
  createEasing (fn) {
    let fnFlipped = flip(fn)
    return {
      easeIn (x, from, to) {
        return interpolate(fn(x), from, to)
      },
      easeOut (x, from, to) {
        return interpolate(fnFlipped(x), from, to)
      },
      easeInOut (x, from, to) {
        const y = (x < 0.5)
          ? (fn(2 * x) * 0.5)
          : (0.5 + fnFlipped(2 * (x - 0.5)) * 0.5)
        return interpolate(y, from, to)
      }
    }
  }
}

/** Exported */
export const EASING = {
  Elastic: easingUtils.createEasing(x => 1 - elasticIn(1 - x))
}

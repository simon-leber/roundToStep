interface RoundingOptions {
    direction?: 'up' | 'down' | 'commercial',
    interval?: number,
    offset?: number,
}

/**
 * Round numbers to a step. Accepts an interval and optional offset.
 * @param value Value to round
 * @param options Rounding options
 * @returns Rounded value
 */
 function roundToStep(value: number, options: RoundingOptions): number {
    const defaults: Required<RoundingOptions> = { direction: 'up', interval: 1, offset: 0 }
    const { direction, interval, offset } = { ...defaults, ...options }

    const deltaToPrevious = (value - offset) % interval

    const directionUpOrDown = (() => {
        if (direction !== 'commercial') {
            return direction
        }
        return deltaToPrevious < interval
            ? 'down'
            : 'up'
    })()

    if (directionUpOrDown === 'down') {
        return value - deltaToPrevious
    }

    const deltaToNext = (interval - deltaToPrevious) % interval
    return value + deltaToNext
}

export { roundToStep }
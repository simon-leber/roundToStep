/**
 * Round numbers to a step. Accepts an interval and optional offset.
 * @param value Value to round
 * @param options Rounding options
 * @returns Rounded value
 */ function $149c1bd638913645$export$71a5f5b5925a4147(value, options) {
    const defaults = {
        direction: "up",
        interval: 1,
        offset: 0
    };
    const { direction: direction , interval: interval , offset: offset  } = {
        ...defaults,
        ...options
    };
    const deltaToPrevious = (value - offset) % interval;
    const directionUpOrDown = (()=>{
        if (direction !== "commercial") return direction;
        return deltaToPrevious < interval ? "down" : "up";
    })();
    if (directionUpOrDown === "down") return value - deltaToPrevious;
    const deltaToNext = (interval - deltaToPrevious) % interval;
    return value + deltaToNext;
}


export {$149c1bd638913645$export$71a5f5b5925a4147 as roundToStep};
//# sourceMappingURL=index.js.map

interface RoundingOptions {
    direction?: 'up' | 'down' | 'commercial';
    interval?: number;
    offset?: number;
}
/**
 * Round numbers to a step. Accepts an interval and optional offset.
 * @param value Value to round
 * @param options Rounding options
 * @returns Rounded value
 */
export function roundToStep(value: number, options: RoundingOptions): number;

//# sourceMappingURL=index.d.ts.map

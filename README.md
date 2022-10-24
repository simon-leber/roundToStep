# roundToStep

Round numbers to a step. Accepts an interval and optional offset.

``` js
const rounded = roundToStep(45, { offset: 20, interval: 10 })
console.log(rounded) // 50
```

``` js
const rounded = roundToStep(45, { offset: 20, interval: 10, direction: 'down' })
console.log(rounded) // 40
```

## Options

## How to use

``` bash
npm install round-to-step
```

``` js
import { roundToStep } from 'round-to-step'
```
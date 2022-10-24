# roundToStep

Round a number to a step. Accepts an interval and optional offset.

``` js
const rounded = roundToStep(45, { offset: 20, interval: 10 })
console.log(rounded) // 50
```

``` js
const rounded = roundToStep(45, { offset: 20, interval: 10, direction: 'down' })
console.log(rounded) // 40
```

## Options

<table>
    <tr>
        <th>Option</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>offset</td>
        <td>0</td>
        <td>The start of the series</td>
    </tr>
    <tr>
        <td>interval</td>
        <td>1</td>
        <td>The distance between the numbers</td>
    </tr>
    <tr>
        <td>direction</td>
        <td>commercial</td>
        <td><code>up</code>, <code>down</code> or <code>commercial</code></td>
    </tr>
</table>


## How to use

``` bash
npm install round-to-step
```

``` js
import { roundToStep } from 'round-to-step'
```
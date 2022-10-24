import { roundToStep } from './index'

test('rounds a number up to the next available step', () => {
    const rounded = roundToStep(45, { offset: 20, interval: 10 })
    expect(rounded).toBe(50)
})

test('rounds a negative number up to the next available step', () => {
    const rounded = roundToStep(-45, { offset: -60, interval: 10 })
    expect(rounded).toBe(-40)
})

test('rounds a number down to the previous available step', () => {
    const rounded = roundToStep(45, { offset: 20, interval: 10, direction: 'down' })
    expect(rounded).toBe(40)
})

test('rounds a negative number down to the previous available step', () => {
    const rounded = roundToStep(-45, { offset: -60, interval: 10, direction: 'down' })
    expect(rounded).toBe(-50)
})

test('rounds a number commercially to the previous available step', () => {
    const rounded = roundToStep(45, { offset: 20, interval: 10, direction: 'commercial' })
    expect(rounded).toBe(40)
})

test('default values are applied', () => {
    const rounded = roundToStep(1.5, {})
    expect(rounded).toBe(2)
})
import { classNames } from './classNames'

describe('classNames', () => {
    test('simple', () => {
        expect(classNames('App', {}, [])).toBe('App')
    })
    test('with mods', () => {
        const expected = 'App hovered'
        expect(classNames('App', { hovered: true, disabled: false }, [])).toBe(expected)
    })
    test('with additions', () => {
        const expected = 'App class1 class2'
        expect(classNames('App', {}, ['class1', 'class2'])).toBe(expected)
    })
    test('combine all', () => {
        const expected = 'App foo1 foo3 someClass1 someClass2'
        expect(classNames('App', { foo1: true, foo2: false, foo3: true }, ['someClass1 someClass2'])).toBe(expected)
    })
})

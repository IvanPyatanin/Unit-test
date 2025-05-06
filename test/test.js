import { person } from '/Users/ivanpyatanin/Documents/Python/tests/src/index.js'

test('one', () => {

	const pers = [{name: 'Маг', health: 90}]

	const res = person(pers)

	expect(res).toBe('healthy')
})

test('two', () => {
	const pers = [{name: 'Лучник', health: 40}]	

	const res = person(pers)

	expect(res).toBe('wounded')
})

test('three', () => {
	const pers = [{name: 'мечник', health: 10}]	

	const res = person(pers)

	expect(res).toBe('critical')
})

import { person } from '../src/index.js'

let dataList = [
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]


test('тест проверки hp', () => {

	let data = dataList.sort(function(a, b) {
		return b.health - a.health
	})

	for (const res of data) {

		let resData = person(res);

		if (res.health >= 50) {
			var resTest = 'healthy'
		} else if (res.health >= 15) {
			var resTest = 'wounded'
		} else {
			var resTest = 'critical'
		}
		expect(resData).toEqual(resTest)
	}
	
})
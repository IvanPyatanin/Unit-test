
export function person(result) {

	for (const res of result) {
			if (res.health >= 50) {
				return 'healthy'
			} else if (res.health >= 15) {
				return 'wounded'
			}
			return 'critical'
	}
}
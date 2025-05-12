
export function person(result) {

	if (result.health >= 50) {
		return 'healthy'
	} else if (result.health >= 15) {
		return 'wounded'
	}
	return 'critical'
}
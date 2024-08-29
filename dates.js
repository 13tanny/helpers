function getDayByTimestamp(timestamp) {
	const date = new Date(timestamp)

	const fullYear = date.getFullYear()
	const year = fullYear.toString().substring(2)
	const month = getNumberWithPrefixZero(date.getMonth() + 1)
	const day = getNumberWithPrefixZero(date.getDate())
	const dayIndex = !date.getDay() ? 6 : date.getDay() - 1
	const hours = date.getHours()
	const minutes = date.getMinutes()
	const seconds = date.getSeconds()
	const fullDate = `${ day }.${ month }.${ fullYear }`

	return {
		 fullYear,
		 year,
		 month,
		 day,
		 dayIndex,
		 hours,
		 minutes,
		 seconds,
		 fullDate
	}
}
function getNumberWithPrefixZero(number) {
	return number < 10 ? `0${ number }` : number
}

function getLimitedList(list, limit) {
	return list.slice(0, limit)
}

function getDeclination(count, arr) {
	if (count === 1 || count % 10 === 1 && count !== 11) return arr[0]
	else if (count >= 2 && count < 5 || count % 10 < 5 && count % 10 !== 1 && count % 10 !== 0 && count > 20) return arr[1]
	else if (count >= 5 && count <= 10 || count % 10 >= 5 || count % 10 === 0 || count === 11 || count % 10 >= 2 && count < 20) return arr[2]
}
// Currency formatter
export const currency = (amount: number): string => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
	});
	return (formatter.format(amount))
}
export const stringify = (params) => Object.entries(params)
	// eslint-disable-next-line eqeqeq
	.map(([key, value]) => value != null ? `${key}=${
		(typeof value === 'string')
			? value.replace(/\s/g, '+')
			: value
	}` : key).join('&');
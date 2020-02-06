const { queryParamsStringify } = require('./googleCalendar');

describe('queryParams', () => {
	it('should be able to obtain string from object', () => {
		const query = queryParamsStringify({ data: 'z' });
		expect(query).toEqual('data=z');
	});
});
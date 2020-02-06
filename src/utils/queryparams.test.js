const { stringify } = require('./queryparams');

describe('queryParams', () => {
	it('should be able to obtain string from object', () => {
		const query = stringify({ data: 'z' });
		expect(query).toEqual('data=z');
	});

	it('should be able to add stringify undefined values', () => {
		const query = stringify({ data: undefined });
		expect(query).toEqual('data');
	});

	it('should be able to parse boolean values', () => {
		const query = stringify({ data: true });
		expect(query).toEqual('data=true');
	});

	it('should encode 0 correctly', () => {
		const query = stringify({ data: 0 });
		expect(query).toEqual('data=0');
	});

	it('should be able to url encode string', () => {
		const query = stringify({ data: 'Wesele Grezelków' });
		expect(query).toMatchSnapshot();
	});

	it('should be able to connect multiple keys', () => {
		const query = stringify({ data: 'space', module: undefined, data2: 'zamarin' });
		expect(query).toMatchSnapshot();
	});

	it('should create full query params', () => {
		const queries = {
			dates: '20200501T120000Z/20200502T040000Z',
			text: 'Space suits warp with life!',
			location: 'Reproduce patiently like a bare crew.',
			details: undefined,
			sf: true,
			ctz: 'America/New_York'
		};
		const query = stringify(queries);
		expect(query).toMatchSnapshot();

	});
});
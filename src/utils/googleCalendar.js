//https://calendar.google.com/calendar/r/eventedit?dates=20200501T120000Z/20200502T040000Z&text=Wesele+Grezelk%C3%B3w&location=Ko%C5%9Bci%C3%B3%C5%82+NMP+Matki+Ko%C5%9Bcio%C5%82a+w+Bol%C4%99cinie&details&sf=true

// eslint-disable-next-line no-unused-vars
const queries = {
	dates: '20200501T120000Z/20200502T040000Z',
	text: 'Wesele+Grezelk%C3%B3w',
	location: 'Ko%C5%9Bci%C3%B3%C5%82+NMP+Matki+Ko%C5%9Bcio%C5%82a+w+Bol%C4%99cinie',
	details: undefined,
	sf: true
};

export const queryParamsStringify = (params) => Object.entries(params).map(([key,value]) => `${key}=${value}`).join('&');

export const createLink = () => `https://calendar.google.com/calendar/r/eventedit`;
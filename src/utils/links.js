import { stringify } from './queryparams';

export const getFormLink = ({ url, name }) => `${url}${name}`;

export const createLink = (calendar) => `https://calendar.google.com/calendar/r/eventedit?${stringify(calendar)}`;

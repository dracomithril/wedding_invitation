import { stringify } from './queryparams';

export const createLink = (calendar) => `https://calendar.google.com/calendar/r/eventedit?${stringify(calendar)}`;
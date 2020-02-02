import { DEFAULT_GUEST_NAME } from '../constants';

export function encode(str) {
	return window.btoa(unescape(encodeURIComponent(str)));
}

export function decode(str) {
	try {
		return decodeURIComponent(escape(window.atob(str)));
	}
	catch (e) {
		console.error(e);
		return DEFAULT_GUEST_NAME;
	}
}
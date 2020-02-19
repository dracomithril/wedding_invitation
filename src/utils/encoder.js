export function encode(str) {
	return window.btoa(unescape(encodeURIComponent(str)));
}

export function decode(str) {
	try {
		return decodeURIComponent(escape(window.atob(str)));
	}
	catch (e) {
		return void 0;
	}
}

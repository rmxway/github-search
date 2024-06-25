export const searchParams = (searchParam: string) => {
	const location = window.location.search;
	const paramsPair = location.slice(1, location.length).split('&');

	let value = '';

	for (const param of paramsPair) {
		const keys = param.split('=');
		if (keys[0] === searchParam) value = keys[1];
		break;
	}

	return value;
};

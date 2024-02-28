import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay = 300): T {
	const [debounce, setDebounce] = useState(value);

	useEffect(() => {
		const timer = setTimeout(() => setDebounce(value), delay);
		return () => clearTimeout(timer);
	}, [debounce, delay, value]);

	return debounce;
}

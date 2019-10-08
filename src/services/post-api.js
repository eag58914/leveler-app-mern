const BASE_URL = '/api';

export function getAll() {
	return fetch(BASE_URL).then((res) => res.json());
}

export function create({ author, post, votes }) {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({ author, post, votes })
	});
}

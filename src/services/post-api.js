const BASE_URL = '/api';

export function getAll() {
	return fetch(BASE_URL).then((res) => res.json());
}

export function create(post) {
	return fetch(BASE_URL, {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify(post)
	}).then((res) => res.json());
}

//delete function is not grabbing the ID talk to Chris
export function deleteOne(id) {
	return fetch(`${BASE_URL}/${id})`, {
		method: 'DELETE'
	}).then((res) => res.json());
}

export function getOne(id) {
	return fetch(`${BASE_URL}/${id}`, {
		method: 'GET'
	}).then((res) => res.json());
}

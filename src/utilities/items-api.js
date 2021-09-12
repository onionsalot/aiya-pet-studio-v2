import sendRequest from './send-request.js'
import { getToken } from "./users-service";
const BASE_URL = '/api/items'

export async function getAll() {
	return sendRequest(BASE_URL);
}

export async function create(data) {
return sendRequest(`${BASE_URL}/create`, 'POST', data);
}

export async function deleteOne(id) {
	return sendRequest(`${BASE_URL}/delete/${id}`, 'DELETE');
}

export async function update(data, id) {
	return sendRequest(`${BASE_URL}/update/${id}`, 'PUT', data);
}
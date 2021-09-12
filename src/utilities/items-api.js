import sendRequest from './send-request.js'
import { getToken } from "./users-service";
const BASE_URL = '/api/items'

export async function getAll() {
	return sendRequest(BASE_URL);
}

export async function create(data) {
return sendRequest(`${BASE_URL}/create`, 'POST', data);
}

export async function deleteOne(data) {
	return sendRequest(`${BASE_URL}/delete/${data.id}`, 'DELETE');
}

export async function update(data) {
	return sendRequest(`${BASE_URL}/update/${data.id}`, 'PUT', data);
}
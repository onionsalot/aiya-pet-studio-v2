import sendRequest from './send-request.js'
import { getToken } from "./users-service";
const BASE_URL = '/api/carts'


export async function getCart() {
	return sendRequest(BASE_URL);
}

export async function addItem(id) {
	return sendRequest(`${BASE_URL}/add/${id}`, 'PUT');
}

export async function updateQuantity(id, data) {
	return sendRequest(`${BASE_URL}/update/${id}`, 'PUT', data);
}

export async function deleteOne(id) {
	return sendRequest(`${BASE_URL}/delete/${id}`, 'DELETE');
}
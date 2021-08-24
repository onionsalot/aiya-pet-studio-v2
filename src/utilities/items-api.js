import sendRequest from './send-request.js'
import { getToken } from "./users-service";
const BASE_URL = '/api/items'

export function getAll() {
    // const token = getToken();
    return sendRequest(BASE_URL)
}
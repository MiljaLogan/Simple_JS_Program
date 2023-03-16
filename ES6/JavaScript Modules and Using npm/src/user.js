//import base64 from 'base-64';
import { url } from './config.js';

export function gravatar(email) {
    const hash = email;
    const photoURL = `https://www.gravatar.com/avatar/${hash}`;
    return photoURL;
}

export default function user(name, email, website) {
    return { name, email, website };
}
export function createUrl(name) {
    return `${url}/users/${(name)}`;
}
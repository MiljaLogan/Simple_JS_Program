import { apiKey as key, url, sayHi, old, dog } from "./src/config.js";
console.log(key, '\n', url, '\n', old, '\n', dog);
sayHi('Milja')

import user, { createUrl, gravatar } from "./src/user.js";
const wes = new user('Milja Else', 'miljaea@gmail.com', 'wesbos.com');
const profile = createUrl(wes.name);
const image = gravatar(wes.email);
console.log(image);


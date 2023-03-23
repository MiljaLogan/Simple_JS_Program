const person = { name: 'Milja', age: 34 };
const personProxy = new Proxy(person, {
    get(target, name) {
        //console.log('someone is asking for ', target, name);
        return target[name].toUpperCase();
    },
    set(target, name, value) {
        if (typeof value === 'string') {
            target[name] = value.trim().toUpperCase() + '✂️';
        }
    }
});
personProxy.name = 'Paari'
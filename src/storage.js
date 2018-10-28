export default {
    get: name => window.localStorage.getItem(name),
    set: (name, value) => window.localStorage.setItem(name, value)
}

function isPlainObject(value:any) {
    if (
        !(typeof value === "object" && value !== null) ||
        Object.prototype.toString.call(value) !== "[object Object]"
    ) {
        return false;
    }
    if (Object.getPrototypeOf(value) === null) {
        return true;
    }
    let proto = value;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
}

export default isPlainObject;
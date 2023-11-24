

export function getObject<T = any>(name: string) {
    const result = localStorage.getItem(name);
    return result === null || undefined ? undefined : <T>JSON.parse(result);
}

export function setObject<T = any>(name: string, data: T) {
    localStorage.setItem(name, JSON.stringify(data));
}
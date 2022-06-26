const userKey = 'userKey';

export const saveUser = (user) => localStorage.setItem(userKey, JSON.stringify(user));
export const readUser = () => JSON.parse(localStorage.getItem(userKey));

const userKey = 'userKey';

const readUser = () => JSON.parse(localStorage.getItem(userKey));
const saveUser = (user) => localStorage.setItem(userKey, JSON.stringify(user));

export const createUser = (user) => new Promise(() => {
  const emptyUser = {
    name: '',
    password: '',
  };
  saveUser({ ...emptyUser, ...user });
});

export const getUser = () => new Promise(() => {
  let user = readUser();
  if (user === null) {
    user = {};
  }
});
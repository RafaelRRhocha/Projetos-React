const userKey = 'userKey';

const readUser = () => JSON.parse(localStorage.getItem(userKey));
const saveUser = (user) => localStorage.setItem(userKey, JSON.stringify(user));

export const createUser = (user) => {
  const emptyUser = {
    name: '',
    password: '',
  };
  saveUser({ ...emptyUser, ...user });
};

export const getUser = () => {
  let user = readUser();
  if (user === null) {
    user = {};
  }
};
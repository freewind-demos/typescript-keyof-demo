const user = {
  name: 'javascript',
  age: 3
};

type UserType = typeof user

function modifyUser<T extends keyof UserType>(key: T, value: UserType[T]) {
  user[key] = value
}

modifyUser('name', 'typescript');
modifyUser('age', 100);

modifyUser('name', 123);
modifyUser('age', 'xxx');
modifyUser('unknown', 100);

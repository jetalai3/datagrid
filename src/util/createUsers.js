import faker from "faker";

const createUser = () => {
  return {
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    zipcode: faker.address.zipCode(),
    visits: faker.random.number(30),
    bio: faker.lorem.sentence(),
    avatar: faker.internet.avatar(),
    active: faker.random.boolean(),
    weekday: faker.date.weekday(),
  };
};

const createUsers = (numUsers = 1000) => {
  return Array.from({ length: numUsers }, createUser);
};

export default createUsers;

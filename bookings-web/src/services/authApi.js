import request from 'superagent';
const URL = 'http://localhost:7890/api/v1/users';

export const signupUser = async ({ firstName, lastName, email, password }) => {
  // path: /create
  // required: username, password, email
  const username = `${firstName}_${lastName}`;
  const res = await request
    .post(`${URL}/create`)
    .send({ username, email, password });

  return res.body;
};

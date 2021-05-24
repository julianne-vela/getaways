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

export const loginUser = async ({ email, password }) => {
  const res = await request.post(`${URL}/login`).send({
    email,
    password,
  });

  return res.body;
};

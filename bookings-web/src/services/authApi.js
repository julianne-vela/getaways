export const signupUser = async ({ email, password }) => {
  const username = email.substring(0, email.lastIndexOf('@'));

  const res = await fetch(`${process.env.BASE_URL}/users/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json' },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  return res.json();
};

export const loginUser = async ({ email, password }) => {
  console.log(userState);
  const res = await fetch(`${process.env.BASE_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'Application/json;' },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return res.json();
};

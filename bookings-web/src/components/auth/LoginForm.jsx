import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useInput } from '../../hooks/useInput';

const LoginForm = () => {
  const TextInput = useInput();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Password is required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <TextInput
          label="email"
          name="email"
          type="email"
          placeholder="jane@doe.com"
        />
        <TextInput label="password" name="password" type="password" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;

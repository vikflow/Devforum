import React from "react";
import axios from "axios";
import { useState } from "react";
import {
  FormH1,
  Container,
  Icon,
  FormContent,
  Form,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  FormWrap,
} from "./SignupElements";

const SignupPage = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = () => {
    const { firstname, lastname, email, password } = user;
    if (firstname && lastname && email && password) {
      axios
        .post("http://localhost:6969/Register", user)
        .then((res) => console.log(res));
    } else {
      alert("invalid input");
    }
  };

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">KEdevforum</Icon>

          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your acount</FormH1>
              <FormLabel htmlFor="fname">First Name</FormLabel>
              <FormInput
                type="text"
                name="firstname"
                value={user.firstname}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="lname">Last Name</FormLabel>
              <FormInput
                type="text"
                name="lastname"
                value={user.lastname}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                required
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
              <FormButton type="submit" onClick={register}>
                Continue
              </FormButton>
              <Text>Forgort password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignupPage;

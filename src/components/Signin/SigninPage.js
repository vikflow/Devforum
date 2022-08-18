import React from "react";
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
} from "./SigninPageElememnts";

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">KEdevforum</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your acount</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgort password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signin;

import { login } from "@/redux/actions/authactions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Input, Flex,Heading } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
    alert("User Login success!");
    navigate("/");
  };

  return (
    <Container>
      <form onSubmit={handleLogin} style={{ margin: "20px auto" }}>
        <Flex
          direction="column"
          alignItems="center"
          gap="4"
          boxSize="xs"
          p="2"
          boxShadow="md"
          borderRadius="10px"
          justify="center"
          m="6rem auto"
        >
          <Heading color="teal">Login Form</Heading>
          <Input
            type="email"
            placeholder="Enter valid email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            type="submit"
            value="LogIn"
            width="30%"
            bg="teal"
            color="white"
          />
        </Flex>
      </form>
    </Container>
  );
};

export default Login;

import { login } from '@/redux/actions/authactions';
import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Input, VStack } from "@chakra-ui/react";

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
    navigate("/")
  };

  return (
    <Container>
      <form onSubmit={handleLogin}>
        <VStack>
          <Input
            type="email"
            placeholder="Enter valid email "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input type="submit" value="Login" />
        </VStack>
      </form>
    </Container>
  );
}



export default Login
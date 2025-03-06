import { signUp } from '@/redux/actions/authactions';
import { Container,Input ,VStack,Heading, Flex } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    const handleSignUp=(e)=>{
        e.preventDefault();
    dispatch(signUp(email,password))
        setEmail("");
        setPassword("");
        alert("User registered successfully!");
        navigate("/login"); 

    }

  return (
    <Container>
        <form onSubmit={handleSignUp} style={{margin:"20px auto"}}>
            <Flex direction="column"alignItems="center"gap="4" boxSize="xs" p="2"boxShadow="md" borderRadius="10px" justify="center" m="6rem auto" >
                <Heading color="teal">Register Form</Heading>
                <Input type="email" placeholder="Enter valid email " value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                <Input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <Input type="submit" value="SignUp" width="30%" bg="teal" color="white"/>
            </Flex>

        </form>
        
    </Container>
  )
}

export default Register
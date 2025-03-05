import { signUp } from '@/redux/actions/authactions';
import { Container,Input ,VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch(); 

    const handleSignUp=(e)=>{
        e.preventDefault();
    dispatch(signUp(email,password))
        setEmail("");
        setPassword("");
        alert("User registered successfully!"); // Replace with actual success message
    }

  return (
    <Container>
        <form onSubmit={handleSignUp}>
            <VStack>
                <Input type="email" placeholder="Enter valid email " value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <Input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <Input type="submit" value="SignUp"/>
            </VStack>

        </form>
        
    </Container>
  )
}

export default Register
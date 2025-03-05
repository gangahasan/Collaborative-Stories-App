import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const userdata = useSelector((state)=>state.auth.user);
    console.log(userdata,"data")
  return (
    <Container>
        <Heading size="2xl" textAlign="center" padding="8">Welcome   <span style={{color:"blue"}}>{userdata.email}</span></Heading>
        
        <h2>Recent Posts</h2>
        
  
    </Container>
  )
}

export default Home
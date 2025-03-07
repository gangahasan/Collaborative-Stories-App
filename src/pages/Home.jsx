  import StoryCard from '@/components/StoryCard';
import { Box, Container, Heading } from '@chakra-ui/react'
  import React from 'react'
  import { useSelector } from 'react-redux'

  const Home = () => {
      const userdata = useSelector((state)=>state.auth.user);
      // console.log(userdata,"data")
    return (
      <Container>
        {userdata? (
          <Container>
            <Heading size="2xl" textAlign="center" padding="8">
              Welcome <span style={{ color: "blue" }}>{userdata?.email}</span>
            </Heading>
            <Box>
              <StoryCard  user={userdata}/>
            </Box>
          </Container>
        ):(
          <Box textAlign="center" padding="8">
            <Heading size="2xl">Welcome to the Stories app,You can read and add sentences to the stories.</Heading>
          </Box>
        )}
      </Container>
    );
  }

  export default Home
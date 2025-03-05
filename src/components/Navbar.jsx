import { Box, Container, Heading, HStack, Link, Text,Flex,Button } from '@chakra-ui/react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '@/redux/actions/authactions'

const Navbar = () => {
    const userData = useSelector((state)=>state.auth.user)
    console.log(userData,"user");
    const dispatch=useDispatch();
    // const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout());
    }
  return (
    <Container bg="teal" color="white">
      <Flex justify="space-around">
        <Heading size="2xl">Moral Stories</Heading>
        {userData ? (
          <HStack gap="6">
            <Link as={RouterLink} color="white" fontSize="xl" to="/">
              Home
            </Link>
            <Link as={RouterLink} color="white" fontSize="xl" to="/completed">
              Finished Stories
            </Link>
            <Button
              onClick={handleLogout}
              colorPalette="teal"
              size="md"
            >
              LogOut
            </Button>
          </HStack>
        ) : (
          <HStack>
            <Link as={RouterLink} to="/login">
              {" "}
              Login
            </Link>
            <Link as={RouterLink} to="/register">
              {" "}
              Registration
            </Link>
          </HStack>
        )}
      </Flex>
    </Container>
  );
}

export default Navbar
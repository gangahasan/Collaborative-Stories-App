import { Container } from "@chakra-ui/react";
import React from "react";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Stories from "../src/pages/Stories";
import Login from "../src/pages/Login";
import Register from "../src/pages/Register";

const App = () => {
  return (
    <Container>
      <h1>Welcome</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completed" element={<Stories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Container>
  );
};

export default App;

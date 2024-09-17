import React from "react";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <LoginForm />
      <RegistrationForm />
    </div>
  );
};

export default Home;

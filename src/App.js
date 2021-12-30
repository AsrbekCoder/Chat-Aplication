import React from "react";
import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
import "./App.scss";
const App = () => {
  if (!localStorage.getItem("name")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="f902943a-3100-446d-8f11-33499e875740"
      userName={localStorage.getItem("name")}
      userSecret={localStorage.getItem("password")}
    />
  );
};

export default App;

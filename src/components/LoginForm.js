import axios from "axios";
import React from "react";

const LoginForm = () => {
  const [getName, setGetName] = React.useState(null);
  const [getPassword, setGetPassword] = React.useState(null);
  const [error, setError] = React.useState("");

  const handelClick = async (e) => {
    e.preventDefault();
    const auThRect = {
      "Project-ID": "f902943a-3100-446d-8f11-33499e875740",
      "User-Name": getName,
      "User-Secret": getPassword,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", { headers: auThRect });
      localStorage.setItem("name", getName);
      localStorage.setItem("password", getPassword);
    } catch (error) {
      setError("Iltomos togri yozing?");
    }

    window.location.reload();
  };

  return (
    <div className="container">
      <form onSubmit={handelClick}>
        <p>Welcome</p>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setGetName(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setGetPassword(e.target.value)}
        />
        <br />
        <button>Start chatting</button>
        <br />
        <br />
        <p>{error}</p>
      </form>
      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </div>
  );
};

export default LoginForm;

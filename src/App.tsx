import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home/home";
import SignupPage from "./signup/signup";
import LoginPage from "./login/login";
import GlobalHeader from "./header/globalheader";
import { User } from "./interface/user";
import useAuth from "./hooks/useAuth";
function App() {

  const [user, setUser] = useState<User | null>(null);
  const { getUser } = useAuth();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      (async () => {
        try {
          const userData = await getUser(storedToken);
          setUser(userData);
        } catch (err) {
          console.error("Error getting user information:", err);
        }
      })();
    }
  }, [getUser]);

  return (
    <Router>
      <div className="App">
        <GlobalHeader title="User Management App" />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

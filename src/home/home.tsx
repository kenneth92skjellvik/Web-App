import React, { useState, useEffect } from "react";

interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
}
interface HomeProps {
  user: User | null;
}
function Home({user}: HomeProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [user]);

  return (
    <div className="App">
      {loading ? (
        <h2>Loading...</h2>
      ) : user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p>Email: {user.email}</p>
          <p>Username: {user.username}</p>
        </div>
      ) : (
        <h2>Please log in to view your information</h2>
      )}
      {/* Rest of the existing JSX */}
    </div>
  );
}

export default Home;

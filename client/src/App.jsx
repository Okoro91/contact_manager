import React from "react";
import UserProfile from "./pages/UserProfile";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/contacts" replace />} />
          <Route path="contacts" element={<UserProfile />} />
        </Route>
      </Routes>
      {/* <UserProfile /> */}
    </Router>
  );
};

export default App;

import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import UserProfile from "./pages/UserProfile";
import CreateProfile from "./pages/CreateProfile";
import AddContact from "./pages/AddContact";
import MyContact from "./pages/MyContact";
import ContactDetails from "./pages/ContactDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/contacts" replace />} />
          <Route path="contacts" element={<UserProfile />} />
          <Route path="settings" element={<CreateProfile />} />
          <Route path="add-contact" element={<AddContact />} />
          <Route path="dashboard" element={<MyContact />} />
          <Route path="contact-details" element={<ContactDetails />} />
        </Route>
      </Routes>
      {/* <UserProfile /> */}
    </Router>
  );
};

export default App;

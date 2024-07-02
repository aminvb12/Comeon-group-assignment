import React, { useMemo } from "react";

import { Routes, Route, Link, Navigate } from "react-router-dom";

//** Base mutual layout  */
import { BaseLayout } from "../src/components/layouts/base.layouts";

// ** Pages **//

import Login from "../src/views/Login";
import Games from "../src/views/Games";

// ** Context State management **//
import { UserProfileProvider } from "../src/context/userProfileContext";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  const isAuthenticate = useMemo(
    () => (localStorage.getItem("--cached-profile--") ? true : false),
    []
  );

  return (
    <UserProfileProvider>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Login />} />
          <Route
            path="games-view"
            element={<ProtectedRoute element={<Games />} />}
          />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </UserProfileProvider>
  );
}
function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;

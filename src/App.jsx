import "./App.css";
import { Route, Routes } from "react-router-dom";
import Students from "./pages/Dashboard/Students";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Teachers from "./pages/Dashboard/Teachers";
import { AuthProvider } from "./components/Auth";
import Main from "./pages/Dashboard/Main";
import RequireAuth from "./components/RequireAuth";
const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Main />
              </RequireAuth>
            }
          />

          <Route
            path="/profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />

          <Route
            path="/students"
            element={
              <RequireAuth>
                <Students />
              </RequireAuth>
            }
          />
          <Route
            path="/teachers"
            element={
              <RequireAuth>
                <Teachers />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;

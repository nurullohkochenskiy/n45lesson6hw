import "./App.css";
import { AuthProvider } from "./components/Auth";
import { Route, Routes } from "react-router-dom";
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

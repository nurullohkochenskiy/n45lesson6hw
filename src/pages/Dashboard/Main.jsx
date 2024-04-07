import React from "react";
import Dashboard from "../../components/Dashboard";
import { Typography } from "@mui/material";
import { useAuth } from "../../components/Auth";
const Main = () => {
  const { user } = useAuth();
  return (
    <Dashboard>
      <Typography variant="h3" mt={10} mx={"auto"}>
        Hello {user.username}
      </Typography>
    </Dashboard>
  );
};

export default Main;
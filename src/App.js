import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AccountMenu from "./components/AccountMenu";
import BasicForm from "./components/BasicForm";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProfileScreen from "./screens/ProfileScreen";
import TodoTable from "./components/TodoTable";
import ContactScreen from "./screens/ContactScreen";
export default function App() {
  const [openForm, setOpenForm] = React.useState(false);
  const handleOnClick = (page) => {
    console.log("open");
    if (!openForm) {
      setOpenForm(true);
    } else {
      setOpenForm(false);
    }
  };
  return (
    <Container maxWidth="sm">
      <Router>
        <Navbar handleOnClick={handleOnClick} />

        <Switch>
          <Route exact path="/" component={ContactScreen} />

          <Route exact path="/profile" component={ProfileScreen} />
        </Switch>

        {openForm && <BasicForm />}

        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            My Todos
          </Typography>

          <TodoTable />
        </Box>
      </Router>
    </Container>
  );
}

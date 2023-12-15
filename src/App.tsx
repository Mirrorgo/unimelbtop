import { SyntheticEvent, useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Grid,
  Paper,
  styled,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ForumIcon from "@mui/icons-material/Forum";
import PersonIcon from "@mui/icons-material/Person";
import Dashboard from "./pages/Dashboard";
import Forum from "./pages/Forum";
import Me from "./pages/Me";

enum Page {
  Dashboard = "dashboard",
  Forum = "forum",
  Me = "me",
}

const App = () => {
  const [value, setValue] = useState(Page.Dashboard); // 用于存储当前选中的值

  const handleChange = (_event: SyntheticEvent, newValue: Page) => {
    setValue(newValue);
  };

  const renderPage = (selectedValue: Page) => {
    switch (selectedValue) {
      case Page.Dashboard:
        return <Dashboard />;
      case Page.Forum:
        return <Forum />;
      case Page.Me:
        return <Me />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={0} style={{ height: "85vh" }}>
            {renderPage(value)}
          </Paper>
        </Grid>
        <Bottom>
          <Grid item xs={12}>
            <BottomNavigation
              style={{ height: "10vh" }}
              value={value}
              onChange={handleChange}
            >
              <BottomNavigationAction
                label="Dashboard"
                value={Page.Dashboard}
                icon={<DashboardIcon />}
              />
              <BottomNavigationAction
                label="Forum"
                value={Page.Forum}
                icon={<ForumIcon />}
              />
              <BottomNavigationAction
                label="Me"
                value={Page.Me}
                icon={<PersonIcon />}
              />
            </BottomNavigation>
          </Grid>
        </Bottom>
      </Grid>
    </Container>
  );
};

const Bottom = styled("div")({
  position: "fixed",
  bottom: "10px",
  width: "100%",
});
export default App;

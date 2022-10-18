import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Loginform from "./Loginform";
import Signupform from "./Signupform";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext install value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider"}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
            <Tab icon={<LoginIcon />} iconPosition="end" label="Sign In" value="1" />
            <Tab icon={<LockOpenIcon />} iconPosition="end" label="Sign Up" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">{<Loginform />}</TabPanel>
        <TabPanel value="2">{<Signupform />}</TabPanel>
      </TabContext>
    </Box>
  );
};

export default Login;
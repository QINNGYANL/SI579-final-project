import * as React from 'react';
import Box from '@mui/material/Box';
//import {Tabs, Tab, AppBar} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
//import AppBar from '@mui/material/AppBar'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from './Weight';
import daily from './daily';

export default function CenteredTabs() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const routes = ["/weight", "/daily", "/vet"]

  return (
    <>
      <div>
        <BrowserRouter>
            <Route path="/">
                
                  <Tabs value={selectedTab} onChange={handleChange} centered>
                    <Tab label="Weight" value={routes[0]} />
                    <Tab label="Daily" value={routes[1]} />
                    <Tab label="Vet" value={routes[2]} />
                  </Tabs>
            </Route>
            
            {/* <Switch>
              <Route path="/weight" component={App} />
              <Route path="/daily" component={daily} />
            </Switch> */}
        </BrowserRouter>
      </div>
    </>
  );
}
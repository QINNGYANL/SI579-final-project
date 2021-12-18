import React from "react";
import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Chart from "./Weight";
import Daily from "./daily";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function App(){

    const routes = ["/weight", "/daily"]

        return (
            <>
            <div>
                <BrowserRouter>

                    <Route path="/" render={(history) => (

                        <Tabs value={history.location.pathname !== '/'? history.location.pathname: false} centered>
                            <Tab label="Weight" value={routes[0]} component={Link} to={routes[0]} />
                            <Tab label="Daily" value={routes[1]} component={Link} to={routes[1]} />
                        </Tabs>
                        )
                    } />

                    <Switch>
                    <Route path="/weight" component={Chart} />
                    <Route path="/daily" component={Daily} />
                    </Switch>
                </BrowserRouter>
            </div>
            </>
        );

}


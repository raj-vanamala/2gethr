import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Tab1 from './Tab1'
import Tab2 from './Tab2'

import '../Styles/App.css'

export default function App() {
    return  (
        <Router>
            <div className="navigation-bar">
                <div>
                    <Link to="/">Images</Link>
                </div>
                <div>
                    <Link to="/tab2">Images-Data</Link>
                </div>
            </div>

            <Switch>
                <Route exact path="/">
                    <Tab1 />
                </Route>
                <Route path="/tab2">
                    <Tab2 />
                </Route>
            </Switch>
        </Router>
    )
}
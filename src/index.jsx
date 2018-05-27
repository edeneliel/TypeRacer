import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider} from "material-ui";
import RacerPage from "./views/RacerPage";

const App = () => (
    <MuiThemeProvider>
        <RacerPage />
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('react-root')
);
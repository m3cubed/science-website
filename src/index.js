import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
// import "typeface-roboto";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#43a047",
			light: "#76d275",
			dark: "#00701a",
			contrastText: "#000"
		},
		secondary: {
			main: "#f44336",
			light: "#ff7961",
			dark: "#ba000d",
			contrastText: "#fff"
		},
		background: {
			default: "#24292e"
		},
		typography: {
			useNextVariants: true
		}
	}
});

const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	</Provider>,

	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

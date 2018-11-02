import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cssbaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/FrameWork/Navbar";

import { withStyles } from "@material-ui/core/styles";
import SideDrawer from "./components/FrameWork/SideDrawer";

const styles = theme => ({
	root: {
		display: "flex"
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing.unit * 3,
		height: "100vh",
		overflow: "auto"
	}
});

class App extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Router>
				<React.Fragment>
					<Cssbaseline />
					<div className={classes.root}>
						<Navbar />
						<SideDrawer />
						<main className={classes.content}>
							<Switch />
						</main>
					</div>
				</React.Fragment>
			</Router>
		);
	}
}

export default withStyles(styles)(App);

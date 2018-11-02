import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cssbaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/FrameWork/Navbar";

import { withStyles } from "@material-ui/core/styles";
import SideDrawer from "./components/FrameWork/SideDrawer";
import LandingPage from "./components/Pages/LandingPage";
import Calendar from "./components/Pages/Calendar";

const styles = theme => ({
	root: {
		display: "flex"
	},
	content: {
		flexGrow: 1,
		height: "100vh",
		overflow: "auto"
	},
	appBarSpacer: theme.mixins.toolbar,
	pages: {
		padding: theme.spacing.unit * 3,
		margin: "0px auto",
		display: "block"
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
							<div className={classes.appBarSpacer} />
							<Switch>
								<Route exact path="/" component={LandingPage} />
								<div className={classes.pages}>
									<Route exact path="/calendar" component={Calendar} />
								</div>
							</Switch>
						</main>
					</div>
				</React.Fragment>
			</Router>
		);
	}
}

export default withStyles(styles)(App);

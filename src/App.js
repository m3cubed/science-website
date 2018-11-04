import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Cssbaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/FrameWork/Navbar";

import { withStyles } from "@material-ui/core/styles";
import SideDrawer from "./components/FrameWork/SideDrawer";
import LandingPage from "./components/Pages/LandingPage";
import Calendar from "./components/Pages/Calendar";
import Info from "./components/Pages/Info";
import Assignments from "./components/Pages/Assignments";
import Questions from "./components/Pages/Questions";

const styles = theme => ({
	root: {
		display: "flex"
	},
	content: {
		flexGrow: 1,
		height: "100vh",
		overflow: "auto"
	},
	appBarSpacer: theme.mixins.toolbar
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
								<Route exact path="/about" component={Info} />
								<Route exact path="/assignments" component={Assignments} />
								<Route exact path="/questions" component={Questions} />
								<Route exact path="/calendar" component={Calendar} />
							</Switch>
						</main>
					</div>
				</React.Fragment>
			</Router>
		);
	}
}

export default withStyles(styles)(App);

import React, { Component } from "react";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";

import CalendarFW from "../CalendarFrameWork/CalendarFW";
import { handleNavTitle } from "../../actions/FrameWork/framework";

const styles = theme => ({
	root: {
		padding: theme.spacing.unit * 3
	}
});

class Calendar extends Component {
	componentDidMount() {
		this.props.dispatch(handleNavTitle("Calendar"));
	}
	render() {
		const { classes } = this.props;
		return (
			<Grid className={classes.root} container justify="center">
				<CalendarFW style={{ zIndex: 2 }} />
			</Grid>
		);
	}
}

export default compose(
	withStyles(styles),
	connect()
)(Calendar);

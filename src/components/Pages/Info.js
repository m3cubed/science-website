import React, { Component } from "react";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
//Accessories
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const styles = theme => ({
	root: {
		padding: theme.spacing.unit * 3
	}
});

class Info extends Component {
	state = {};
	render() {
		const { classes } = this.props;
		return <div className={classes.root} />;
	}
}

export default compose(
	withStyles(styles),
	connect()
)(Info);

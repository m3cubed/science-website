import React, { Component } from "react";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
//Accessories
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
//Icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { sideMenuToggle } from "../../actions/FrameWork/framework";

const drawerWidth = 240;

const styles = theme => ({
	toolbarIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: "0 8px",
		...theme.mixins.toolbar
	},
	drawerPaper: {
		position: "relative",
		whiteSpace: "nowrap",
		width: drawerWidth,
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	drawerPaperClose: {
		overflowX: "hidden",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing.unit * 7,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing.unit * 9
		}
	}
});

class SideDrawer extends Component {
	state = {};
	render() {
		const { classes, framework } = this.props;
		return (
			<Drawer
				variant="permanent"
				classes={{
					paper: !framework.side_menu_open
						? classes.drawerPaper
						: classes.drawerPaperClose
				}}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={() => this.props.dispatch(sideMenuToggle())}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>{this.props.children}</List>
			</Drawer>
		);
	}
}

function mapStateToProps({ framework }) {
	return { framework };
}

export default compose(
	withStyles(styles),
	connect(mapStateToProps)
)(SideDrawer);

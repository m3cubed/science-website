import React, { Component } from "react";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { drawerContent } from "./DrawerContent";
//Accessories
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
//Icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
//Redux
import { sideMenuToggle } from "../../actions/FrameWork/framework";

const drawerWidth = 240;

const styles = theme => ({
	toolbar: {
		paddingRight: 24 // keep right padding when drawer closed
	},
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
		position: "relative",
		overflowX: "hidden",
		transition: theme.transitions.create("width", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		width: theme.spacing.unit * 7,
		[theme.breakpoints.up("sm")]: {
			width: theme.spacing.unit * 9
		}
	},
	drawerPaperNone: {
		display: "none"
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
					paper: framework.side_menu_open
						? classes.drawerPaper
						: framework.nav_title !== "SNC1D"
							? classes.drawerPaperClose
							: classes.drawerPaperNone
				}}
				open={!framework.side_menu_open}
			>
				<div className={classes.toolbarIcon}>
					<IconButton onClick={() => this.props.dispatch(sideMenuToggle())}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider />
				<List>{drawerContent}</List>
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

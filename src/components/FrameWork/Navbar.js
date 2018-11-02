import React, { Component } from "react";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
//Accessories
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
//Icons
import MenuIcon from "@material-ui/icons/Menu";
//Redux
import { sideMenuToggle } from "../../actions/FrameWork/framework";

const drawerWidth = 240;

const styles = theme => ({
	toolbar: {
		paddingRight: 24 // keep right padding when drawer closed
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 36
	},
	menuButtonHidden: {
		display: "none"
	},
	title: {
		flexGrow: 1
	},
	chartContainer: {
		marginLeft: -22
	},
	tableContainer: {
		height: 320
	},
	h5: {
		marginBottom: theme.spacing.unit * 2
	}
});

class Navbar extends Component {
	state = {};
	render() {
		const { classes, framework } = this.props;
		return (
			<React.Fragment>
				<AppBar
					position="absolute"
					className={
						!framework.side_menu_open ? classes.appBar : classes.appBarShift
					}
				>
					<Toolbar
						disableGutters={!framework.side_menu_open}
						className={classes.toolbar}
					>
						<IconButton
							onClick={() => this.props.dispatch(sideMenuToggle())}
							className={
								!framework.side_menu_open
									? classes.menuButton
									: classes.menuButtonHidden
							}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							component="h1"
							variant="h6"
							color="inherit"
							noWrap
							className={classes.title}
						>
							{framework.nav_title}
						</Typography>
					</Toolbar>
				</AppBar>
			</React.Fragment>
		);
	}
}

function mapStateToProps({ framework }) {
	return { framework };
}

export default compose(
	withStyles(styles),
	connect(mapStateToProps)
)(Navbar);

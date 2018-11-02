import React from "react";
import { Link } from "react-router-dom";
//Accessories
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
//Icons
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EventIcon from "@material-ui/icons/Event";
import InfoIcon from "@material-ui/icons/Info";

export const drawerContent = (
	<React.Fragment>
		<ListItem component={Link} to="/" button>
			<ListItemIcon>
				<HomeIcon />
			</ListItemIcon>
			<ListItemText primary="Home" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Assignments" />
		</ListItem>
		<ListItem component={Link} to="/calendar" button>
			<ListItemIcon>
				<EventIcon />
			</ListItemIcon>
			<ListItemText primary="Calendar" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<InfoIcon />
			</ListItemIcon>
			<ListItemText primary="About" />
		</ListItem>
	</React.Fragment>
);

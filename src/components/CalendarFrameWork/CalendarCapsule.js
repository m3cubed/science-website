import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
//Icons
import AssessmentIcon from "@material-ui/icons/Assessment";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import EventNoteIcon from "@material-ui/icons/EventNote";
import DescriptionIcon from "@material-ui/icons/Description";

const colorScheme = {
	Lesson: "#b39ddb",
	Assignment: "#fff59d",
	Event: "#81d4fa",
	Test: "#f48fb1"
};

class CalendarCapsule extends Component {
	handleIcon = type => {
		switch (type) {
			case "Lesson": {
				return <DescriptionIcon />;
			}
			case "Assignment": {
				return <AssessmentIcon />;
			}
			case "Event": {
				return <EventNoteIcon />;
			}
			case "Test": {
				return <NewReleasesIcon />;
			}
			default:
				return null;
		}
	};

	render() {
		const event = this.props.children[0];
		if (event) {
			return (
				<div
					style={{
						width: "100%",
						height: "20%",
						alignText: "center",
						borderRadius: 3,
						marginTop: 5,
						marginBottom: 5,
						paddingLeft: 5,
						backgroundColor: colorScheme[event[3]],
						overflow: "hidden hidden"
					}}
				>
					<Typography
						variant="subtitle2"
						style={{ margin: "auto", alignText: "center" }}
					>
						{event[2]}
					</Typography>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default CalendarCapsule;

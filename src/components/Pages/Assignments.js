import React, { Component } from "react";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import loremIpsum from "lorem-ipsum";
import { format } from "date-fns";
import currentFormative from "../../CurrentFormativeQuiz.pdf";
//Accessories
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//Redux
import { handleNavTitle } from "../../actions/FrameWork/framework";

import Grid from "@material-ui/core/Grid";
import { events } from "../CalendarFrameWork/Events";

const styles = theme => ({
	root: {
		padding: theme.spacing.unit * 3
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: "33.33%",
		flexShrink: 0
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	}
});

const filteredEvents = events.filter(event => event[3] === "Assignment");

const loremText = events.map(event =>
	loremIpsum({
		count: Math.ceil(Math.random() * 5),
		units: "paragraphs"
	})
);

class Assignements extends Component {
	state = { expanded: null };
	componentDidMount() {
		this.props.dispatch(handleNavTitle("Assignements"));
	}

	handleChange = panel => (event, expanded) => {
		this.setState({
			expanded: expanded ? panel : false
		});
	};

	renderList = () => {
		const { classes } = this.props;
		const { expanded } = this.state;

		return filteredEvents.map((event, i) => {
			return (
				<ExpansionPanel
					key={i}
					expanded={expanded === `panel${i}`}
					onChange={this.handleChange(`panel${i}`)}
				>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography className={classes.heading}>{event[2]}</Typography>
						<Typography className={classes.secondaryHeading}>
							{format(new Date(2018, event[0] - 1, event[1]), "MMMM, Do")}
						</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<div>
							<Typography variant={"subtitle2"} style={{ marginBottom: 10 }}>
								Assignment Info
							</Typography>
							<Typography>
								{event[2] === "Review"
									? "Students are to complete the following formative quiz."
									: loremText[i]}
							</Typography>
							{event[2] === "Review" ? (
								<Typography component="a" href={currentFormative} download>
									Download Current Formative Quiz
								</Typography>
							) : null}
						</div>
					</ExpansionPanelDetails>
				</ExpansionPanel>
			);
		});
	};

	render() {
		const { classes } = this.props;

		return <div className={classes.root}>{this.renderList()}</div>;
	}
}

export default compose(
	withStyles(styles),
	connect()
)(Assignements);

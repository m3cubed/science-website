import React from "react";
import dateFns from "date-fns";
import { format } from "date-fns";
import { withStyles } from "@material-ui/core/styles";
import { events } from "./Events";
import loremIpsum from "lorem-ipsum";
//Accessories
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
//Icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CalendarCapsule from "./CalendarCapsule";

const styles = theme => ({
	dayRegular: {
		height: "100%",
		borderRight: "3px solid lightgrey",
		"&:hover": {
			borderRight: `3px solid ${theme.palette.primary.light}`
		},
		padding: 8
	},
	dayLeft: {
		height: "100%",
		borderRight: "3px solid lightgrey",
		backgroundColor: "#EEEEEE",
		"&:hover": {
			borderRight: `3px solid ${theme.palette.primary.light}`
		},
		padding: 8
	},
	daySelected: {
		height: "100%",
		backgroundColor: "#e5f9e6",
		borderRight: `3px solid ${theme.palette.primary.main}`,
		padding: 8
	},
	dayRight: {
		height: "100%",
		borderRight: `3px solid transparent`,
		backgroundColor: "#EEEEEE",
		"&:hover": {
			borderRight: `3px solid ${theme.palette.primary.light}`
		},
		padding: 8
	}
});

class CalendarFW extends React.Component {
	state = {
		currentMonth: new Date(),
		selectedDate: new Date()
	};

	renderHeader() {
		const dateFormat = "MMMM YYYY";

		return (
			<Grid container alignItems="center">
				<Grid align="center" item xs={2}>
					<IconButton onClick={this.prevMonth}>
						<ChevronLeftIcon />
					</IconButton>
				</Grid>
				<Grid align="center" item xs={8}>
					<Typography variant="h5">
						{dateFns.format(this.state.currentMonth, dateFormat)}
					</Typography>
				</Grid>
				<Grid align="center" item xs={2} onClick={this.nextMonth}>
					<IconButton onClick={this.prevMonth}>
						<ChevronRightIcon />
					</IconButton>
				</Grid>
			</Grid>
		);
	}

	renderDays() {
		const dateFormat = "dddd";
		const days = [];

		let startDate = dateFns.startOfWeek(this.state.currentMonth);

		for (let i = 0; i < 7; i++) {
			days.push(
				<Grid item align="center" xs key={i}>
					<Typography
						style={{ textTransform: "uppercase" }}
						variant="subtitle1"
					>
						{dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
					</Typography>
				</Grid>
			);
		}

		return (
			<Grid
				style={{
					borderTop: "3px solid lightgrey",
					padding: 5
				}}
				container
				justify="space-around"
				alignItems="center"
			>
				{days}
			</Grid>
		);
	}

	renderCells() {
		const { currentMonth, selectedDate } = this.state;
		const { classes } = this.props;
		const monthStart = dateFns.startOfMonth(currentMonth);
		const monthEnd = dateFns.endOfMonth(monthStart);
		const startDate = dateFns.startOfWeek(monthStart);
		const endDate = dateFns.endOfWeek(monthEnd);

		const dateFormat = "D";
		const rows = [];

		const monthNum = format(currentMonth, "M");

		let days = [];
		let day = startDate;
		let formattedDate = "";

		const monthlyEvents = events.filter(event => event[0] !== currentMonth);

		while (day <= endDate) {
			for (let i = 0; i < 7; i++) {
				formattedDate = dateFns.format(day, dateFormat);
				const cloneDay = day;
				const dailyEvent = monthlyEvents.filter(
					event => event[1] == formattedDate
				);

				days.push(
					<Grid
						item
						xs
						key={day}
						className={
							dateFns.isSameDay(day, selectedDate)
								? classes.daySelected
								: i !== 6
									? i !== 0
										? classes.dayRegular
										: classes.dayLeft
									: classes.dayRight
						}
						onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
					>
						<Typography
							style={{
								color: dateFns.isSameMonth(day, monthStart)
									? "black"
									: "lightgrey"
							}}
							variant="h6"
							align="right"
						>
							{formattedDate}
						</Typography>
						{dailyEvent.length > 0 ? (
							dateFns.isSameMonth(day, monthStart) &&
							monthNum == dailyEvent[0][0] ? (
								<CalendarCapsule>{dailyEvent}</CalendarCapsule>
							) : null
						) : null}
					</Grid>
				);
				day = dateFns.addDays(day, 1);
			}
			rows.push(
				<Grid
					container
					item
					xs
					style={{
						flexGrow: 1,
						width: "100%",
						borderTop: "3px solid lightgrey"
					}}
					justify="space-around"
					alignItems="center"
					key={day}
				>
					{days}
				</Grid>
			);
			days = [];
		}
		return (
			<div style={{ height: "100%" }}>
				<Grid
					style={{ height: "inherit" }}
					direction="column"
					justify="space-around"
					alignItems="center"
					container
				>
					{rows}
				</Grid>
			</div>
		);
	}

	onDateClick = day => {
		this.setState({
			selectedDate: day
		});
	};

	nextMonth = () => {
		this.setState({
			currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
		});
	};

	prevMonth = () => {
		this.setState({
			currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
		});
	};

	generateParagraphs = () => {
		const num = Math.ceil(Math.random() * 5);
		let paragraphs = [];

		for (let i = 0; i < num; i++) {
			paragraphs.push(
				<Typography key={i} style={{ marginTop: 10 }}>
					{loremIpsum({
						count: Math.ceil(Math.random() * 3),
						units: "paragraphs"
					})}
				</Typography>
			);
		}

		return paragraphs;
	};

	selectedTitle = () => {
		const dailyEvent = events.filter(
			event =>
				event[0] == format(this.state.selectedDate, "M") &&
				event[1] == format(this.state.selectedDate, "D")
		);
		try {
			return dailyEvent[0][2];
		} catch (error) {
			return null;
		}
	};

	render() {
		return (
			<React.Fragment>
				<Paper style={{ zIndex: 3, width: "80vw", height: "87vh" }}>
					<Grid
						style={{ height: "100%", width: "100%" }}
						container
						direction="column"
					>
						<Grid item>{this.renderHeader()}</Grid>
						<Grid item>{this.renderDays()}</Grid>
						<Grid style={{ maxWidth: "100%" }} item xs>
							{this.renderCells()}
						</Grid>
					</Grid>
				</Paper>
				<div
					style={{
						zIndex: 1,
						backgroundColor: "white",
						width: "80vw",
						height: 400,
						paddingLeft: 15,
						paddingRight: 15,
						paddingTop: 30,
						paddingBottom: 30
					}}
				>
					<Typography variant="h2">
						{format(this.state.selectedDate, "MMMM Do[,] YYYY")}
					</Typography>
					{this.props.children}
					<Divider />

					<Typography
						variant="h4"
						color="primary"
						style={{ marginTop: 10, marginBottom: 20 }}
					>
						{this.selectedTitle()}
					</Typography>

					{this.selectedTitle() !== null ? (
						<React.Fragment>
							<Typography
								variant="h5"
								color="secondary"
								style={{ marginTop: 10, marginBottom: 10 }}
							>
								Content
							</Typography>

							{this.generateParagraphs()}

							<Typography
								variant="h5"
								color="secondary"
								style={{ marginTop: 10, marginBottom: 10 }}
							>
								Assignment/Homework
							</Typography>

							{this.generateParagraphs()}
						</React.Fragment>
					) : null}
				</div>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(CalendarFW);

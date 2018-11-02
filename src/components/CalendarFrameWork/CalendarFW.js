import React from "react";
import dateFns from "date-fns";
import { AutoSizer } from "react-virtualized";
//Accessories
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
//Icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

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
					<Typography variant="subtitle1">
						{dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
					</Typography>
				</Grid>
			);
		}

		return (
			<Grid
				style={{
					borderTop: "1px solid grey",
					borderBottom: "1px solid grey",
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
		const monthStart = dateFns.startOfMonth(currentMonth);
		const monthEnd = dateFns.endOfMonth(monthStart);
		const startDate = dateFns.startOfWeek(monthStart);
		const endDate = dateFns.endOfWeek(monthEnd);

		const dateFormat = "D";
		const rows = [];

		let days = [];
		let day = startDate;
		let formattedDate = "";

		while (day <= endDate) {
			for (let i = 0; i < 7; i++) {
				formattedDate = dateFns.format(day, dateFormat);
				const cloneDay = day;
				days.push(
					<Grid
						item
						xs
						key={day}
						onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
					>
						<div>{formattedDate}</div>
					</Grid>
				);
				day = dateFns.addDays(day, 1);
			}
			rows.push(
				<div style={{ flexGrow: 1, width: "inherit" }}>
					<Grid
						container
						item
						justify="space-around"
						alignItems="center"
						key={day}
					>
						{days}
					</Grid>
				</div>
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

	render() {
		return (
			<Paper style={{ width: "80vw", height: "80vh" }}>
				<Grid
					style={{ height: "100%", width: "100%" }}
					container
					direction="column"
				>
					<Grid item xs>
						{this.renderHeader()}
					</Grid>
					<Grid item xs>
						{this.renderDays()}
					</Grid>
					<Grid style={{ flexGrow: 1, maxWidth: "100%" }} item xs={10}>
						{this.renderCells()}
					</Grid>
				</Grid>
			</Paper>
		);
	}
}

export default CalendarFW;

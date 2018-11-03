import React, { Component } from "react";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import school from "../../school.jpg";
import teacher from "../../teacher.png";
import science from "../../science.jpg";
import loremIpsum from "lorem-ipsum";
//Accessories
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
//Icons
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { handleNavTitle } from "../../actions/FrameWork/framework";

const styles = theme => ({
	root: {
		padding: theme.spacing.unit * 3,
		display: "flex",
		height: "calc(100%-64px)"
	},
	cardRegular: {
		transition: "500ms ease-in-out",
		flexGrow: 1,
		padding: 15
	},
	cardCenter: {
		transition: "500ms ease-in-out",
		flexGrow: 10,
		zIndex: "10 !important",
		padding: 0
	},
	cardHiddenRight: {
		transition: "500ms ease-in-out",
		flexGrow: 1,
		zIndex: 1,
		padding: 12,
		overflow: "hidden",
		marginRight: "-6em"
	},
	cardHiddenLeft: {
		transition: "500ms ease-in-out",
		flexGrow: 1,
		zIndex: 1,
		padding: 12,
		overflow: "hidden",
		marginLeft: "-6em"
	},
	cardContent: {
		height: "55vh",
		display: "flex"
	},
	cardMedia: {
		width: "calc(55vh/4*3)"
	},
	cardTextOpen: {
		transition: "500ms ease-in-out",
		width: "30vw"
	},
	cardTextClose: {
		transition: "500ms ease-in-out",
		color: "transparent",
		width: 0
	}
});

const card1 = loremIpsum();
const card2 = loremIpsum();
const card3 = loremIpsum();

class Info extends Component {
	state = {
		open1: false,
		open2: false,
		open3: false
	};

	componentDidMount() {
		this.props.dispatch(handleNavTitle("About"));
	}

	handleExpand = grid => e => {
		const toggle = !this.state[grid];

		this.setState(
			{
				open1: false,
				open2: false,
				open3: false
			},
			() =>
				this.setState({
					[grid]: toggle
				})
		);
	};

	render() {
		const { classes } = this.props;
		const expanded = Object.values(this.state).includes(true);

		return (
			<div className={classes.root}>
				<div
					className={
						this.state.open1
							? classes.cardCenter
							: expanded
								? classes.cardHiddenRight
								: classes.cardRegular
					}
				>
					<Card className={classes.cardContent}>
						<CardMedia
							className={classes.cardMedia}
							title="teacher"
							image={teacher}
						/>
						<CardHeader
							action={
								<IconButton onClick={this.handleExpand("open1")}>
									{this.state.open1 ? (
										<ChevronLeftIcon />
									) : (
										<ChevronRightIcon />
									)}
								</IconButton>
							}
							title="Teacher"
						/>

						<CardContent style={{ paddingRight: 0 }}>
							<Typography
								component="p"
								className={
									this.state.open1
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								{card1}
							</Typography>
						</CardContent>
					</Card>
				</div>

				<div
					className={
						this.state.open2
							? classes.cardCenter
							: expanded
								? this.state.open1
									? classes.cardHiddenLeft
									: classes.cardHiddenRight
								: classes.cardRegular
					}
					style={{ zIndex: this.state.open1 ? 4 : 1 }}
				>
					<Card className={classes.cardContent}>
						<CardMedia
							className={classes.cardMedia}
							title="science"
							image={science}
						/>
						<CardHeader
							action={
								<IconButton onClick={this.handleExpand("open2")}>
									{this.state.open2 ? (
										<ChevronLeftIcon />
									) : (
										<ChevronRightIcon />
									)}
								</IconButton>
							}
							title="Course"
						/>
						<CardContent style={{ paddingRight: 0 }}>
							<Typography
								component="p"
								className={
									this.state.open2
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								{card1}
							</Typography>
						</CardContent>
					</Card>
				</div>

				<div
					className={
						this.state.open3
							? classes.cardCenter
							: expanded
								? classes.cardHiddenLeft
								: classes.cardRegular
					}
				>
					<Card className={classes.cardContent}>
						<CardMedia
							className={classes.cardMedia}
							title="school"
							image={school}
						/>
						<CardHeader
							action={
								<IconButton onClick={this.handleExpand("open3")}>
									{this.state.open3 ? (
										<ChevronLeftIcon />
									) : (
										<ChevronRightIcon />
									)}
								</IconButton>
							}
							title="School"
						/>
						<CardContent style={{ paddingRight: 0 }}>
							<Typography
								component="p"
								className={
									this.state.open3
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								{card1}
							</Typography>
						</CardContent>
					</Card>
				</div>
			</div>
		);
	}
}

export default compose(
	withStyles(styles),
	connect()
)(Info);

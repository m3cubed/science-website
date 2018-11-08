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
		display: "flex",
		"&:hover": {
			backgroundColor: "#E0E0E0"
		}
	},
	cardMedia: {
		width: "calc(55vh/4*3)",
		maxWidth: 250
	},
	cardTextOpen: {
		transition: "500ms ease-in-out",

		width: "30vw",
		marginTop: 20
	},
	cardTextClose: {
		transition: "500ms ease-in-out",
		color: "transparent",
		width: 0,
		marginTop: 20
	}
});

const card1 = loremIpsum({ count: 10 });
const card2 = loremIpsum({ count: 10 });
const card3 = loremIpsum({ count: 6 });

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
					onClick={this.handleExpand("open1")}
					className={
						this.state.open1
							? classes.cardCenter
							: expanded
								? classes.cardHiddenRight
								: classes.cardRegular
					}
				>
					<Card
						className={classes.cardContent}
						style={{
							backgroundColor: expanded ? "#fff" : null,
							boxShadow: this.state.open1
								? "0px 15px 3px 5px rgba(0, 0, 0, 0.2), 0px 15px 3px 3px rgba(0, 0, 0, 0.14), 0px 15px 3px -1px rgba(0, 0, 0, 0.12)"
								: null
						}}
					>
						<CardMedia
							className={classes.cardMedia}
							title="teacher"
							image={teacher}
						/>

						<CardHeader
							// action={
							// 	<IconButton onClick={this.handleExpand("open1")}>
							// 		{this.state.open1 ? (
							// 			<ChevronLeftIcon />
							// 		) : (
							// 			<ChevronRightIcon />
							// 		)}
							// 	</IconButton>
							// }
							title="Teacher"
						/>

						<CardContent style={{ paddingRight: 0 }}>
							<Typography
								variant="h4"
								className={
									this.state.open1
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								Mr. Ma
							</Typography>
							<Typography
								variant="h6"
								className={
									this.state.open1
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								Short Bios
							</Typography>
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
							<Typography
								variant="h6"
								className={
									this.state.open1
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								Hobbies
							</Typography>
							<Typography
								component="p"
								className={
									this.state.open1
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								Badminton, Sketching, Hiking, Programming
							</Typography>
						</CardContent>
					</Card>
				</div>

				<div
					onClick={this.handleExpand("open2")}
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
					<Card
						className={classes.cardContent}
						style={{
							backgroundColor: expanded ? "#fff" : null,
							boxShadow: this.state.open2
								? "0px 15px 3px 5px rgba(0, 0, 0, 0.2), 0px 15px 3px 3px rgba(0, 0, 0, 0.14), 0px 15px 3px -1px rgba(0, 0, 0, 0.12)"
								: null
						}}
					>
						<CardMedia
							className={classes.cardMedia}
							title="science"
							image={science}
						/>

						<CardHeader
							// action={
							// 	<IconButton onClick={this.handleExpand("open2")}>
							// 		{this.state.open2 ? (
							// 			<ChevronLeftIcon />
							// 		) : (
							// 			<ChevronRightIcon />
							// 		)}
							// 	</IconButton>
							// }
							title="Course"
						/>

						<CardContent style={{ paddingRight: 0 }}>
							<Typography
								variant="h4"
								className={
									this.state.open2
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								SNC1D - Grade 9 Academic Science
							</Typography>

							<Typography
								variant="h6"
								className={
									this.state.open2
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								Class Description
							</Typography>

							<Typography
								component="p"
								className={
									this.state.open2
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								This course enables students to develop their understanding of
								basic concepts in biology, chemistry, earth and space science,
								and physics, and to relate science to technology, society, and
								the environment. Throughout the course, students will develop
								their skills in the processes of scientific investigation.
								Students will acquire an understanding of scientific theories
								and conduct investigations related to sustainable ecosystems;
								atomic and molecular structures and the properties of elements
								and compounds; the study of the universe and its properties and
								components; and the principles of electricity.
							</Typography>

							<Typography
								variant="h6"
								className={
									this.state.open2
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								Ontario Curriculum
							</Typography>

							<Typography
								className={
									this.state.open2
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								<a href="http://www.edu.gov.on.ca/eng/curriculum/secondary/science910_2008.pdf">
									Course Curriculum
								</a>
							</Typography>
						</CardContent>
					</Card>
				</div>

				<div
					onClick={this.handleExpand("open3")}
					className={
						this.state.open3
							? classes.cardCenter
							: expanded
								? classes.cardHiddenLeft
								: classes.cardRegular
					}
				>
					<Card
						className={classes.cardContent}
						style={{
							backgroundColor: expanded ? "#fff" : null,
							boxShadow: this.state.open3
								? "0px 15px 3px 5px rgba(0, 0, 0, 0.2), 0px 15px 3px 3px rgba(0, 0, 0, 0.14), 0px 15px 3px -1px rgba(0, 0, 0, 0.12)"
								: null
						}}
					>
						<CardMedia
							className={classes.cardMedia}
							title="school"
							image={school}
						/>

						<CardHeader
							// action={
							// 	<IconButton onClick={this.handleExpand("open3")}>
							// 		{this.state.open3 ? (
							// 			<ChevronLeftIcon />
							// 		) : (
							// 			<ChevronRightIcon />
							// 		)}
							// 	</IconButton>
							// }
							title="School"
						/>

						<CardContent
							style={{
								paddingRight: 0,
								overflowY: this.state.open3 ? "scroll" : "hidden",
								overflowX: "hidden"
							}}
						>
							<Typography
								variant="h4"
								className={
									this.state.open3
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								Bill Crothers Secondary School
							</Typography>

							<Typography
								variant="h6"
								className={
									this.state.open3
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								School Mission
							</Typography>
							<Typography
								component="p"
								className={
									this.state.open3
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								Focus on learning through a healthy and active lifestyle;
								Develop literacy and numeracy for life-long learning; Ensure
								flexible programs that follow the Ontario Curriculum; Emphasize
								post-secondary pathways to learning and career choices;
								Facilitate professional learning and research; Create an
								athlete-friendly environment of learning; Provide a safe and
								supportive school environment.
							</Typography>
							<Typography
								variant="h6"
								className={
									this.state.open3
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								Vision
							</Typography>
							<Typography
								component="p"
								className={
									this.state.open3
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								Bill Crothers Secondary School (BCSS) is an inclusive,
								character-focused learning environment that links excellence in
								education and athletics with a commitment to healthy, active
								living for all students. BCSS is a school for public secondary
								students across York Region. It will serve as a catalyst for the
								development of health and physical education programming as well
								as sport and academic innovation.
							</Typography>
							<Typography
								component="p"
								className={
									this.state.open3
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								<strong>
									To develop in students the love of sport through learning and
									the love of learning through sport.
								</strong>
							</Typography>
							<Typography
								variant="h6"
								className={
									this.state.open3
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								School Website
							</Typography>

							<Typography
								className={
									this.state.open3
										? classes.cardTextOpen
										: classes.cardTextClose
								}
							>
								<a href="http://www.yrdsb.ca/schools/billcrothers.ss/Pages/default.aspx">
									School Website
								</a>
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

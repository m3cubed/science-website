import React, { Component } from "react";
import { connect } from "react-redux";
import earthBanner from "../../Earth.png";
import { format } from "date-fns";
import loremIpsum from "lorem-ipsum";
//Accessories
import Typography from "@material-ui/core/Typography";
//Icons
import AnnouncementIcon from "@material-ui/icons/Announcement";
//Redux
import { handleNavTitle } from "../../actions/FrameWork/framework";

const date = format(new Date(), "dddd[,] MMMM Do[,] YYYY");
const text1 = loremIpsum();
const text2 = loremIpsum();
const text3 = loremIpsum();
const text4 = loremIpsum();

class LandingPage extends Component {
	state = {
		time: format(Date.now(), "HH[:]mm[:]ss")
	};

	tick() {
		this.setState({
			time: format(Date.now(), "HH[:]mm[:]ss")
		});
	}

	componentDidMount() {
		this.props.dispatch(handleNavTitle("SNC1D"));
		this.timerID = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	render() {
		return (
			<React.Fragment>
				<div
					style={{
						height: "45vh",
						backgroundColor: "#231f20"
					}}
				>
					<img
						src={earthBanner}
						style={{ margin: "0px auto", height: "inherit", display: "block" }}
					/>
				</div>
				<div style={{ height: "fit-content", backgroundColor: "#231f20" }}>
					<Typography style={{ color: "white" }} variant="h4" align="center">
						Grade 9 Academic Science
					</Typography>
					<Typography
						style={{ marginTop: 10, marginBottom: 10 }}
						color="primary"
						variant="h3"
						align="center"
					>
						{this.state.time}
					</Typography>
					<Typography style={{ color: "white" }} variant="h5" align="center">
						{format(new Date(), "dddd[,] MMMM Do[,] YYYY")}
					</Typography>
				</div>
				<div style={{ marginTop: 50 }}>
					<Typography
						variant="h5"
						align="center"
						color="secondary"
						style={{ marginBottom: 30 }}
					>
						Announcements
					</Typography>
					<Typography variant="subtitle1" align="center">
						{text1}
					</Typography>
					<Typography variant="subtitle1" align="center">
						{text2}
					</Typography>
					<Typography variant="subtitle1" align="center">
						{text3}
					</Typography>
					<Typography variant="subtitle1" align="center">
						{text4}
					</Typography>
				</div>
			</React.Fragment>
		);
	}
}

export default connect()(LandingPage);

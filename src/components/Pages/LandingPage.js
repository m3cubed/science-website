import React, { Component } from "react";
import { connect } from "react-redux";
import earthBanner from "../../Earth.png";
//Accessories
import Typography from "@material-ui/core/Typography";
//Redux
import { handleNavTitle } from "../../actions/FrameWork/framework";

class LandingPage extends Component {
	componentDidMount() {
		this.props.dispatch(handleNavTitle("SNC1D"));
	}
	render() {
		return (
			<React.Fragment>
				<div
					style={{
						height: "50vh",
						backgroundColor: "#231f20"
					}}
				>
					<img
						src={earthBanner}
						style={{ margin: "0px auto", height: "inherit", display: "block" }}
					/>
				</div>
				<div style={{ height: "10vh", backgroundColor: "#231f20" }}>
					<Typography style={{ color: "white" }} variant="h4" align="center">
						Grade 9 Academic Science
					</Typography>
				</div>
			</React.Fragment>
		);
	}
}

export default connect()(LandingPage);

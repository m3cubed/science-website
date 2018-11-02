import React, { Component } from "react";
import { connect } from "react-redux";
import CalendarFW from "../CalendarFrameWork/CalendarFW";
import { handleNavTitle } from "../../actions/FrameWork/framework";

class Calendar extends Component {
	componentDidMount() {
		this.props.dispatch(handleNavTitle("Calendar"));
	}
	render() {
		return (
			<React.Fragment>
				<CalendarFW />
			</React.Fragment>
		);
	}
}

export default connect()(Calendar);

import React, { Component } from "react";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import loremIpsum from "lorem-ipsum";
//Accessories
import Typography from "@material-ui/core/Typography";
//Redux
import { handleNavTitle } from "../../actions/FrameWork/framework";

const styles = theme => ({
	root: {
		padding: theme.spacing.unit * 3,
		marginTop: "2vh",
		width: "80vw"
	}
});

let quesAns = [];
for (let i = 0; i < 10; i++) {
	quesAns.push(
		[
			<Typography key={i + "1"} variant="h6">
				{`Q${i + 1}. ${loremIpsum({
					count: Math.ceil(Math.random() * 3),
					units: "sentences"
				})}`.slice(0, -1) + "?"}
			</Typography>
		],
		[
			<Typography key={i + "2"}>
				{loremIpsum({
					count: Math.ceil(Math.random() * 3),
					units: "paragraphs"
				})}
			</Typography>
		]
	);
}

class Questions extends Component {
	state = { expanded: null };
	componentDidMount() {
		this.props.dispatch(handleNavTitle("Questions"));
	}

	renderList = () => {
		return quesAns.map((item, i) => (
			<div style={{ marginBottom: i % 2 === 0 ? 5 : 30 }}>
				{item[0]}
				{item[1]}
			</div>
		));
	};

	render() {
		const { classes } = this.props;

		return <div className={classes.root}>{this.renderList()}</div>;
	}
}

export default compose(
	withStyles(styles),
	connect()
)(Questions);

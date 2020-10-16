import chroma from "chroma-js"
import sizes from "./sizes"

const styles = {
	root: {
		width: "20%",
		height: "25%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		textTransform: "uppercase",
		marginBottom: "-6px",
		"&:hover svg": {
			color: props => chroma(props.color).luminance() <= 0.77 ?  "white" : "rgba(0, 0, 0, 0.5)",
			transform: "scale(1.5)",
			[sizes.down("sm")]: {
				transform: "scale(1.2)",
			},
		},
		[sizes.down("lg")]: {
			width: "25%",
			height: "20%",
		},
		[sizes.down("md")]: {
			width: "50%",
			height: "10%",
		},
		[sizes.down("sm")]: {
			width: "100%",
			height: "5%",
		},
	},
	boxContent: {
		position: "absolute",
		width: "100%",
		left: "0px",
		bottom: "-6px",
		padding: "10px",
		letterSpacing: "1px",
		textTransform: "uppercase",
		fontSize: "12px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		[sizes.down("xxs")]: {
			paddingLeft: "15px"
		},
	},
	text: {
		color: props => chroma(props.color).luminance() <= 0.06 ?  "white" : "rgba(0, 0, 0, 0.5)"
	},
	deleteIcon: {
		transition: "all 0.3s ease-in-out",
		[sizes.down("sm")]: {
			fontSize: "1.3rem"
		},
	}
}

export default styles
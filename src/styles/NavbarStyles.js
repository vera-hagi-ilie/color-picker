import "rc-slider/assets/index.css"
import sizes from "./sizes"

const styles = {
	navbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-start",
		height: "5.5vh",
		[sizes.down("xs")]: {
			height: "6vh",
			fontSize: "15px",
			lineHeight: "15px"
		}
	},
	logo:{
		marginRight: "15px",
		padding: "0 13px",
		fontSize: "22px",
		backgroundColor: "#eceff1",
		height: "100%",
		fontFamily: "Roboto",
		display: "flex",
		alignItems: "center",
		"& a": {
			textDecoration: "none",
			color: "black"
		},
		[sizes.down("xs")]: {
			fontSize: "15px",
			padding: "0 5px",
			marginRight: "5px"
		}
	},
	sliderContainer: {
		display: "flex",
		alignItems: "center"
	},
	level: {
		margin: "0 10px",
		[sizes.down("xs")]: {
			margin: "auto",
			whiteSpace: "nowrap"	
		}
	},
	slider: {
		width: "340px",
		margin: "0 10px",
		display: "inline-block",
		"& .rc-slider-track": {
			backgroundColor: "transparent"
		},
		"& .rc-slider-rail": {
			height: "8px"
		},
		"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
			backgroundColor: "green",
			outline: "none",
			border: "2px solid green",
			boxShadow: "none",
			width: "13px",
			height: "13px",
			marginLeft: "-7px",
			marginTop: "-3px"
		},
		[sizes.down("md")]: {
			width: "150px",
		},
		[sizes.down("sm")]: {
			width: "120px",
		},
		[sizes.down("xxs")]: {
			width: "90px",
		}
	},
	selectContainer: {
		marginLeft: "auto",
		marginRight: "8px",
		[sizes.down("xxs")]: {
			"& .MuiInputBase-root": {
				fontSize: "0.7rem"
			}
		}
	}
}

export default styles
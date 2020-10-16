import chroma from "chroma-js"
import sizes from "./sizes"

const styles = {
	colorBox: {
		width: "20%",
		height: props => props.showLink? "25%" : "50%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		cursor: "pointer",
		textTransform: "uppercase",
		marginBottom: "-3.5px",
		"&:hover button" : {
			opacity: "1",
			transition: "0.5s",
			[sizes.down("xs")]: {
				opacity: props => props.showLink? "0.4" : "1"
			}
		},
		[sizes.down("lg")]: {
			width: "25%",
			height: props => props.showLink? "20%" : "33.3333%",
		},
		[sizes.down("md")]: {
			width: "50%",
			height: props => props.showLink? "10%" : "20%",
		},
		[sizes.down("xs")]: {
			width: "100%",
			height: props => props.showLink? "5%" : "10%",
		}
	},
	text: {
		color: props => chroma(props.color[props.format]).luminance() <= 0.06 ?  "white" : "black" 
	},
	seeMore: {
		position: "absolute",
		background: "rgba(255, 255, 255, 0.3)",
		border: "none",
		right: "0px",
		bottom: "0px",
		padding: "5px",
		fontSize: "12px"
	},
	name: {
		position: "absolute",
		width: "100%",
		left: "0px",
		bottom: "0px",
		padding: "10px",
		letterSpacing: "1px",
		fontSize: "12px"
	},
	copyButton: {
		width: "100px",
		height: "30px",
		position: "absolute",
		display: "inline-block",
		top: "50%",
		left: "50%",
		marginLeft: "-50px",
		marginTop: "-15px",
		textAlign: "center",
		outline: "none",
		backgroundColor: "rgba(255, 255, 255, 0.3)",
		fontSize: "1rem",
		lineHeight: "30px",
		border: "none",
		textDecoration: "none",
		opacity: "0",
		[sizes.down("xs")]: {
			backgroundColor: props => props.showLink? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.1)",
			left: "auto",
			right: props => props.showLink? "8%" : "3%",
			opacity: props => props.showLink? "0.4" : "1"
		}
	},
	copyOverlay: {
		opacity: "0",
		zIndex: "0",
		width: "100%",
		height: "100%",
		transition: "transform 0.6s ease-in-out",
		transform: "scale(0.1)"
	},
	showOverlay: {
		opacity: "1",
		transform: "scale(50)",
		zIndex: "10",
		position: "absolute"
	},
	copyMessage: {
		position: "fixed",
		left: "0",
		right: "0",
		top: "0",
		bottom: "0",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "4rem",
		transform: "scale(0.1)",
		opacity: "0",
		"& h1": {
			fontWeight: "400",
			textShadow: "1px 2px black",
			backgroundColor: "rgba(255, 255, 255, 0.2)",
			width: "100%",
			textAlign: "center",
			marginBottom: "0",
			padding: "1rem",
			textTransform: "uppercase",
			[sizes.down("xs")]: {
				fontSize: "5rem"
			},
			[sizes.down("xxs")]: {
				fontSize: "4rem"
			}
		},
		"& p": {
			fontSize: "2rem",
			fontWeight: "100"
		}
	},
	showCopyMessage: {
		opacity: "1",
		transform: "scale(1)",
		zIndex: "25",
		transition: "all 0.4s ease-in-out",
		transitionDelay: "0.3s"
	}
}

export default styles
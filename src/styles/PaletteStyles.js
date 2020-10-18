import sizes from "./sizes"

const styles = {
	palette: {
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		overflow: "hidden"
	},
	paletteColors: {
		height: "90vh",
		[sizes.down("xs")]: {
			height: "89vh"
		}
	},
	goBackArea: {
		width: "20%",
		height: "50%",
		margin: "0 auto",
		display: "inline-block",
		position: "relative",
		textTransform: "uppercase",
		marginBottom: "-3.5px",
		backgroundColor: "black",
		[sizes.down("lg")]: {
			width: "25%",
			height: "33.3333%",
		},
		[sizes.down("md")]: {
			width: "50%",
			height: "20%"
		},
		[sizes.down("xs")]: {
			width: "100%",
			height: "8%"
		}
	},
	backButton: {
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
		background: "rgba(255, 255, 255, 0.3)",
		fontSize: "1rem",
		lineHeight: "30px",
		border: "none",
		textDecoration: "none",
		color: "white",
		cursor:"pointer"
	}
}

export default styles
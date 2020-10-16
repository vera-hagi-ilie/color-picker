import sizes from "./sizes"

const styles = {
	footer: {
		backgroundColor: "white",
		height: "4.5vh",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		fontWeight: "bold",
		[sizes.down("xs")]: {
			fontSize: "15px",
			alignItems: "flex-end",
		}
	},
	emoji: {
		margin: "1rem",
		fontSize: "1.rem",
		[sizes.down("xs")]: {
			fontSize: "15px",
			margin: "0 1rem",
		}
	}
}

export default styles
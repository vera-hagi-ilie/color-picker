import sizes from "./sizes"

const styles = {
	root: {
		backgroundColor: "white",
		border: "1px solid black",
		borderRadius: "5px",
		padding: "0.5rem",
		position: "relative",
		overflow: "hidden",
		cursor: "pointer",
		"&:hover svg": {
			opacity: 1
		}
	},
	colors: {
		height: "150px",
		width: "100%",
		backgroundColor: "#dae1e4",
		borderRadius: "5px",
		overflow: "hidden"
	},
	title: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		margin: "0",
		color: "black",
		paddingTop: "0.5rem",
		fontSize: "1rem",
		position: "relative"
	},
	emoji: {
		marginLeft: "0.5rem",
		fontSize: "1.5rem"
	},
	miniColor: {
		height: "25%",
		width: "20%",
		display: "inline-block",
		margin: "0 auto",
		position: "relative",
		marginBottom: "-3.5px"
	},
	deleteIcon: {
		color: "white",
		backgroundColor: "#eb3d30",
		width: "20px",
		height: "20px",
		position: "absolute",
		right: "0px",
		top: "0px",
		padding: "10px",
		zIndex: 10,
		opacity: 0,
		[sizes.down("md")]: {
			opacity: 1,
			borderBottomLeftRadius: "10px",
		},
	}
}

export default styles
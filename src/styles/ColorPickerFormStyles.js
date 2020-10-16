import sizes from "./sizes"

const styles = {
	picker: {
		width: "100% !important",
		marginTop: "2rem",
		[sizes.down("xl")]: {
			marginTop: "1rem"
		},
	},
	addColor: {
		width: "100%",
		padding: "1rem",
		marginTop: "1rem",
		fontSize: "2rem",
		[sizes.down("xl")]: {
			padding: "0.2rem",
			fontSize: "1rem"
		},
	},
	colorNameInput: {
		width: "100%",
		height: "70px",
		[sizes.down("xl")]: {
			height: "auto",
			"& > div > input": {
				padding: "5px 10px",
			}
		},
	}
}

export default styles
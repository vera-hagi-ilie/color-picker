import sizes from "./sizes"
import background from "./background.svg"

const styles = {
	"@global": {
		".fade-exit": {
			opacity: 1
		},
		".fade-exit-active": {
			opacity: 0,
			transition: "opacity 500ms ease-out"
		}
	},
	root:{
		height: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		/* background by SVGbackgrounds.com */
		backgroundColor: "#4259aa",
		backgroundImage: `url(${background})`,
		overflow: "scroll"
	},
	container:{
		width: "50%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
		[sizes.down("xl")]: {
			width: "80%"
		},
		[sizes.down("xs")]: {
			width: "75%"
		}
	},
	nav:{
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		color: "white",
		alignItems: "center",
		"& a": {
			color: "white",
			textDecoration: "none"
		}
	},
	heading: {
		fontSize: "1.5rem"
	},
	palettes:{
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 30%)",
		gridGap: "2.5rem",
		[sizes.down("md")]: {
			gridTemplateColumns: "repeat(2, 50%)"
		},
		[sizes.down("xs")]: {
			gridTemplateColumns: "repeat(1, 100%)",
			gridGap: "1.2rem"
		}
	}
}

export default styles
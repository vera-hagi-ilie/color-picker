import {drawerWidth, drawerWidthSM, drawerWidthXXS} from "./constants"
import sizes from "./sizes"

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
	[sizes.down("sm")]: {
		width: drawerWidthSM,
	},
	[sizes.down("xxs")]: {
		width: drawerWidthXXS,
	},
  },
  drawerPaper: {
      width: drawerWidth,
	  display: "flex",
	  alignItems: "center",
	  [sizes.down("sm")]: {
		 width: drawerWidthSM,
	  },
	  [sizes.down("xxs")]: {
		width: drawerWidthXXS,
	  },
  },
  drawerHeader: {
      display: 'flex',
	  width: "100%",
	  height: "64px",
      alignItems: 'center',
      padding: '0 8px',
      ...theme.mixins.toolbar,
      justifyContent: 'space-between',
  },
  content: {
	height: "calc(100vh - 64px)",
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
	[sizes.down("sm")]: {
		marginLeft: -drawerWidthSM,
	},
	[sizes.down("xxs")]: {
		marginLeft: `calc(-1 * ${drawerWidthXXS})`,
	},
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
	container: {
		width: "90%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center"	
	},
	buttons: {
		width: "100%"
	},
	button: {
		width: "50%",
		[sizes.down("xl")]: {
			lineHeight: "1rem"
		},
	}
});

export default styles
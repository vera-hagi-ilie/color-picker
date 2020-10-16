import {drawerWidth, drawerWidthSM, drawerWidthXXS} from "./constants"
import sizes from "./sizes"

const styles = theme => ({
	root: {
		display: "flex"
	},
  	appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
      	easing: theme.transitions.easing.sharp,
      	duration: theme.transitions.duration.leavingScreen,
      }),
	  flexDirection: "row",
	  justifyContent: "space-between",
	  alignItems: "center",
	  height: "64px"
  	},
	toolbar: {
		[sizes.down("xs")]: {
			paddingRight:"10px"
		},
	},
	hide: {
    	display: 'none',
    },
	label: {
		cursor: props => props.open? "auto" : "pointer",
	},
    navButtons: {
	    marginRight: "1rem",
	    "& a": {
			textDecoration: "none"
	    },
		[sizes.down("md")]: {
			display: "flex",
			alignItems: "center",
		},
		[sizes.down("xs")]: {
			marginRight: "0.5rem",
		},
    },
	button: {
		margin: "0 0.5rem",
		[sizes.down("md")]: {
			lineHeight: "1rem"
		},
		[sizes.down("xs")]: {
			margin: "0 0.2rem",
			padding: "0.2rem",
		},
	},
    appBarShift: {
    	width: `calc(100% - ${drawerWidth}px)`,
    	marginLeft: drawerWidth,
    	transition: theme.transitions.create(['margin', 'width'], {
      		easing: theme.transitions.easing.easeOut,
      		duration: theme.transitions.duration.enteringScreen,
    	}),
		[sizes.down("sm")]: {
			width: `calc(100% - ${drawerWidthSM}px)`,
    		marginLeft: drawerWidthSM,
		},
		[sizes.down("xxs")]: {
			width: "15px",
    		marginLeft: drawerWidthXXS,
		},
  	},
    menuButton: {
   		marginLeft: 12,
   		marginRight: 20,
		[sizes.down("sm")]: {
			marginLeft: 0,
   			marginRight: 0,
		},	
  	},
})

export default styles
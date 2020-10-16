import React, {Component} from "react"
import Button from "@material-ui/core/Button"
import {Link} from "react-router-dom"
import PaletteFormDialog from "./PaletteFormDialog"
import styles from "./styles/PaletteFormNavbarStyles"

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos"


class PaletteFormNavbar extends Component{
	constructor(props){
		super(props)
		this.state = {
			formDialogShowing: false,
		}
	}
	
	openFormDialogue = () => {
		this.setState({ formDialogShowing: true });
	};

	closeFormDialogue = () => {
		this.setState({ formDialogShowing: false });
	};
		
	render(){
		const {open, classes} = this.props
		
		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position="fixed" color="default" className={classNames(classes.appBar, {[classes.appBarShift]: open, })} >
          			<Toolbar disableGutters={!open} 
						     onClick={open? undefined : this.props.handleDrawerOpen}
						     className={classes.toolbar}>
						<IconButton color="inherit" aria-label="Open drawer" 
							        className={classNames(classes.menuButton, open && classes.hide)}>
              				<AddToPhotosIcon />	
            			</IconButton>
						<Typography className={classes.label} variant="body2">Customize Palette</Typography>
          			</Toolbar>
					<div className={classes.navButtons} >
						<Link to="/">
							<Button variant="contained" color="secondary" className={classes.button} >Quit</Button>
						</Link>
						<Button variant="contained" color="primary" onClick={this.openFormDialogue} className={classes.button} >Save palette</Button>
					</div>
        		</AppBar>
				{this.state.formDialogShowing && <PaletteFormDialog palettes={this.props.palettes} savePalette={this.props.savePalette} 
													                closeFormDialogue={this.closeFormDialogue} /> }
			</div>
		)
	}
}

export default withStyles(styles, { withTheme: true })(PaletteFormNavbar)
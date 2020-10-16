import React, {Component} from "react"
import {withStyles} from "@material-ui/styles"
import MiniPalette from "./MiniPalette"
import {Link} from "react-router-dom"
import {CSSTransition, TransitionGroup} from "react-transition-group"
import styles from "./styles/PaletteListStyles"
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from "@material-ui/core/Avatar"
import ListItemText from "@material-ui/core/ListItemText"
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"
import blue from "@material-ui/core/colors/blue"
import red from "@material-ui/core/colors/red"

class PaletteList extends Component{
	constructor(props){
		super(props)
		this.state = {
			openDeleteDialog: false,
			deletingId: ""
		}
		this.goToPalette = this.goToPalette.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}
	
	goToPalette(id){
		this.props.history.push(`/palette/${id}`)
	}
	
	openDeleteDialog = (id) => {
		this.setState({openDeleteDialog: true, deletingId: id})
	}
	
	closeDeleteDialog = () => {
		this.setState({openDeleteDialog: false})
	}
	
	handleDelete(){
		this.props.deletePalette(this.state.deletingId)
		this.closeDeleteDialog()
	}
	
	render(){	
		return (
			<div className={this.props.classes.root}>
				<div className={this.props.classes.container}>
					<nav className={this.props.classes.nav}>
						<h1 className={this.props.classes.heading}>Color Palettes</h1>
						<Link to="/palette/new">Create Palette</Link>
					</nav>
					<TransitionGroup className={this.props.classes.palettes}>
						{this.props.palettes.map(palette => { return (
							<CSSTransition key={palette.paletteName} classNames="fade" timeout={500} >
								<MiniPalette key={palette.paletteName} {...palette} handleClick={this.goToPalette} deletePalette={this.openDeleteDialog}/>
							</CSSTransition>
						)})}
					</TransitionGroup>
				</div>
				<Dialog open={this.state.openDeleteDialog} area-labeledby="delete-dialog-title" onClose={this.closeDeleteDialog}>
					<DialogTitle id="delete-dialog-title" >Delete This Palette?</DialogTitle>
					<List>
						<ListItem button onClick={this.handleDelete} >
							<ListItemAvatar>
								<Avatar style={{backgroundColor: blue[100], color: blue[600]}} >
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Delete</ListItemText>
						</ListItem>
						<ListItem button onClick={this.closeDeleteDialog}> 
							<ListItemAvatar>
								<Avatar style={{backgroundColor: red[100], color: red[600]}}>
									<CloseIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Cancel</ListItemText>
						</ListItem>
					</List>
				</Dialog>
			</div>
		)
	}
}

export default withStyles(styles)(PaletteList)
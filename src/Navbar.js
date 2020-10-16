import React, {Component} from "react"
import Slider from "rc-slider"
import {Link} from "react-router-dom"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import Snackbar from "@material-ui/core/Snackbar"
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"
import {withStyles} from "@material-ui/styles"
import "rc-slider/assets/index.css"
import styles from "./styles/NavbarStyles"


class Navbar extends Component{
	constructor(props){
		super(props)
		this.state = {
			snackbarOpen: false
		}
		this.handleChange = this.handleChange.bind(this)
		this.closeSnackbar = this.closeSnackbar.bind(this)
	}
	
	handleChange(evt){
		this.props.handleChangeFormat(evt.target.value)
		this.setState({snackbarOpen: true})
	}
	
	closeSnackbar(){
		this.setState({snackbarOpen: false})
	}
	
	render(){
		return (
			<div className={this.props.classes.navbar}>
				<div className={this.props.classes.logo}>
					<Link to="/">Color Picker</Link>
				</div>
				{this.props.showSlider &&
				<div className={this.props.classes.sliderContainer}>
					<span className={this.props.classes.level}>Level: {this.props.level}</span>
					<div className={this.props.classes.slider}>															   
						<Slider defaultValue={this.props.level} min={100} max={900} step={100} onAfterChange={this.props.changeLevel}/>
					</div>
				</div>}
				<div className={this.props.classes.selectContainer}>
					<Select value={this.props.format} onChange={this.handleChange}>
						<MenuItem value="hex">HEX </MenuItem>
						<MenuItem value="rgb">RGB </MenuItem>
						<MenuItem value="rgba">RGBA </MenuItem>
					</Select>
				</div>
				<Snackbar anchorOrigin={{vertical: "bottom", horizontal: "left"}} open={this.state.snackbarOpen} autoHideDuration={3000} 
					message={<span id="message-id">Format Changed to {this.props.format.toUpperCase()}!</span>} ContentProps={{"aria-describedby": "message-id"}}
					onClose={this.closeSnackbar}
					action={[<IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close"><CloseIcon /></IconButton> ]}/>
			</div>
		)
	}
}

export default withStyles(styles)(Navbar)

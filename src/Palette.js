import React, {Component} from "react"
import ColorBox from "./ColorBox"
import Navbar from "./Navbar"
import PaletteFooter from "./PaletteFooter"
import {withStyles} from "@material-ui/styles"
import styles from "./styles/PaletteStyles"

class Palette extends Component{
	constructor(props){
		super(props)
		this.state = {
			level: 500,
			format: "hex"
		}
		this.changeLevel = this.changeLevel.bind(this)
		this.changeFormat = this.changeFormat.bind(this)
	}
	
	changeLevel(level){
		this.setState({level})
	}
	
	changeFormat(val){
		this.setState({format: val})
	}
	
	render(){
		const colorBoxes = this.props.palette.colors[this.state.level].map(color => <ColorBox color={color} format={this.state.format} 
																						paletteId={this.props.palette.id} key={color.name} showLink={true}/>)
		
		return (
			<div className={this.props.classes.palette}>
				<Navbar level={this.state.level} changeLevel={this.changeLevel} showSlider={true} format={this.state.format} handleChangeFormat={this.changeFormat}/>
				<div className={this.props.classes.paletteColors}>
					{colorBoxes}
				</div>
				<PaletteFooter name={this.props.palette.paletteName} emoji={this.props.palette.emoji}/>
			</div>
		)
	}
}

export default withStyles(styles)(Palette)
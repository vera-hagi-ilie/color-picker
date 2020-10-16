import React, {Component} from "react"
import {Link} from "react-router-dom"
import ColorBox from "./ColorBox"
import Navbar from "./Navbar"
import PaletteFooter from "./PaletteFooter"
import {withStyles} from "@material-ui/styles"
import styles from "./styles/PaletteStyles"

class SingleColorPalette extends Component{
	constructor(props){
		super(props)
		this._shades = this.gatherShades(this.props.completePalette, this.props.colorId)
		this.state = {
			format: "hex"
		}
		this.changeFormat = this.changeFormat.bind(this)
	}
	gatherShades(palette, colorId){
		let shades = []
		for (let level in palette.colors){
			shades = shades.concat(palette.colors[level].filter(color => color.id === colorId))
		}		
		return shades.slice(1)
	}
	changeFormat(val){
		this.setState({format: val})
	}
	render(){
		const colorBoxes = this._shades.map(color => {
			return <ColorBox key={color.name} color={color} format={this.state.format} paletteId={this.props.completePalette.id} showLink={false} />
		})
		return (
			<div className={this.props.classes.palette}>
				<Navbar showSlider={false} format={this.state.format} handleChangeFormat={this.changeFormat}/>
				<div className={this.props.classes.paletteColors}>
					{colorBoxes}
					<div className={this.props.classes.goBackArea}>
						<Link className={this.props.classes.backButton} to={`/palette/${this.props.completePalette.id}`}>GO BACK</Link>
					</div>
				</div>
				<PaletteFooter name={this.props.completePalette.paletteName} emoji={this.props.completePalette.emoji} />
			</div>
		)
	}
}

export default withStyles(styles)(SingleColorPalette)
import React,{PureComponent} from "react"
import {withStyles} from "@material-ui/styles"
import DeleteIcon from "@material-ui/icons/Delete"
import styles from "./styles/MiniPaletteStyles"

class MiniPalette extends PureComponent{
											
	handleDelete = (evt) => {
		evt.stopPropagation()
		this.props.deletePalette(this.props.id)
	}
	
	render(){
		const miniColorBoxes = this.props.colors.map(color => <div className={this.props.classes.miniColor} style={{backgroundColor: color.color}} key={color.name} ></div>)
		
		return (
			<div className={this.props.classes.root} onClick={() => this.props.handleClick(this.props.id)}>
				<DeleteIcon className={this.props.classes.deleteIcon} style={{transition: "all 0.3s ease-in-out"}} onClick={this.handleDelete}/>									
				<div className={this.props.classes.colors}>
					{miniColorBoxes}
				</div>
				<h5 className={this.props.classes.title}>{this.props.paletteName} <span className={this.props.classes.emoji}>{this.props.emoji}</span></h5>
			</div>
		)
	}

}

export default withStyles(styles)(MiniPalette)
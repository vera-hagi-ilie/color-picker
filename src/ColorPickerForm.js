import React, {Component} from "react"
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator"
import {ChromePicker} from "react-color"
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button"
import styles from "./styles/ColorPickerFormStyles"
import chroma from "chroma-js"


class ColorPickerForm extends Component{
	constructor(props){
		super(props)
		this.state = {
			newColorName: "",
			currentColor: "teal"
		}
		this.updateCurrentColor = this.updateCurrentColor.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.addNewColor = this.addNewColor.bind(this)
	}
	
	static defaultProps = {
		maxCharactersInColorName: 16
	}
	
	componentDidMount(){
		ValidatorForm.addValidationRule("isColorNameUnique", value => {
			return this.props.colors.every( ({name}) => name.toLowerCase() !== value.toLowerCase())
		})
		ValidatorForm.addValidationRule("isColorUnique", value => {
			return this.props.colors.every( ({color}) => color !== this.state.currentColor)
		})
		ValidatorForm.addValidationRule("isColorNameNotEmpty", value => value.trim() !== '')
		ValidatorForm.addValidationRule("isColorNameShort", value => value.trim().length <= this.props.maxCharactersInColorName)
	}
	
	handleChange(evt){
		this.setState({[evt.target.name]: evt.target.value})
	}
	
	updateCurrentColor(newColor){
		this.setState({currentColor: newColor.hex})
	}
	
	addNewColor(){
		this.props.addNewColor(this.state.currentColor, this.state.newColorName.trim())
		this.setState({newColorName: ""})
	}
	
	render(){
		const {paletteIsFull} = this.props
		
		return (
			<div>
				<ChromePicker color={this.state.currentColor} onChangeComplete={this.updateCurrentColor} className={this.props.classes.picker} />
				<ValidatorForm onSubmit={this.addNewColor} instantValidate={false}>
					<TextValidator value={this.state.newColorName} onChange={this.handleChange} name="newColorName"
								   validators={["required", "isColorNameUnique", "isColorUnique", "isColorNameNotEmpty", "isColorNameShort"]}
								   errorMessages={["This field is required", "Color name must be unique", "Color already used", "Color name must not be empty", `Color name must be at most ${this.props.maxCharactersInColorName} characters long`]}
						           className={this.props.classes.colorNameInput} variant="filled" margin="normal" 
						           placeholder="Color Name" />
					<Button type="submit" variant="contained" color="primary" 
						    style={{backgroundColor: paletteIsFull? "grey" : this.state.currentColor,
									color: chroma(this.state.currentColor).luminance() <= 0.70 ?  "white" : "rgba(0, 0, 0, 0.5)" 
								   }} 
							disabled={paletteIsFull} className={this.props.classes.addColor} >
						{paletteIsFull? "Palette Full" : "Add Color"} 
					</Button>
				</ValidatorForm>	
			</div>
		)
	}
}

export default withStyles(styles)(ColorPickerForm)
import React, {Component} from "react"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator"
import {Picker} from "emoji-mart"
import "emoji-mart/css/emoji-mart.css"

class PaletteFormDialog extends Component{
	constructor(props){
		super(props)
		this.state = {
			newPaletteName: "",
			stage: "name"
		}
		this.handleChange = this.handleChange.bind(this)
		this.savePalette = this.savePalette.bind(this)
	}
	
	componentDidMount(){
		ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
			return this.props.palettes.every( ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase())
		})
		ValidatorForm.addValidationRule("isPaletteNameNotEmpty", value => value.trim() !== ''
		)
	}
	
	handleChange(evt){
		this.setState({[evt.target.name]: evt.target.value})
	}
	
	showEmojiPicker = () => {
		this.setState({stage: "emoji"})
	}
	
	savePalette(emoji){
		this.props.savePalette(this.state.newPaletteName.trim(), emoji.native)
		this.setState({stage: ""})
	}

	render() {
    	return (
			<div>
				<Dialog open={this.state.stage === "emoji"} onClose={this.props.closeFormDialogue} >
					<DialogTitle>Chose a palette emoji</DialogTitle>
					<Picker onSelect={this.savePalette} />
				</Dialog>
				<Dialog open={this.state.stage === "name"} onClose={this.props.closeFormDialogue} aria-labelledby="form-dialog-title" >
					<DialogTitle id="form-dialog-title">Chose a palette name</DialogTitle>
					<ValidatorForm onSubmit={this.showEmojiPicker}>
						<DialogContent>
							<DialogContentText> Please enter a name for your new beautiful palette. Make sure it's unique! </DialogContentText>
								<TextValidator value={this.state.newPaletteName} 
									           label="Palette Name" 
									           onChange={this.handleChange} 
									           name="newPaletteName" 
									           autoFocus
											   fullWidth 
									           margin="normal"
											   validators={["required", "isPaletteNameUnique", "isPaletteNameNotEmpty"]} 
											   errorMessages={["Enter a palette name", "This name is already in use", "Palette name must not be empty"]} />	
						</DialogContent>
						<DialogActions>
							<Button onClick={this.props.closeFormDialogue} color="primary"> Cancel </Button>
							<Button variant="contained" color="primary" type="submit" >Save Palette</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
    	);
  	}
}

export default PaletteFormDialog